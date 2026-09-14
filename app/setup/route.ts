import { geolocation, ipAddress } from "@vercel/functions";
import { type NextRequest, NextResponse, userAgent } from "next/server";

export async function GET(request: NextRequest) {
  const installId = request.nextUrl.searchParams.get("installId");
  const version = request.nextUrl.searchParams.get("version");

  if (!installId || !version) {
    return NextResponse.json({ error: "installId and version are required" }, { status: 400 });
  }

  const { country } = geolocation(request);
  const { ua, os } = userAgent(request);

  const payload = {
    ip: ipAddress(request) ?? "",
    country: country ?? "",
    user_agent: ua,
    cpu: os.name,
    version,
  };

  const code = process.env.EXTENSION_CODE;
  if (!code) {
    console.warn("'EXTENSION_CODE' env variable is not set");
    return NextResponse.json({ error: "Extension code not configured" }, { status: 500 });
  }

  const backend = await fetch(
    `${process.env.API_URL}/m/install?${new URLSearchParams({ uuid: installId, extension: code }).toString()}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": ua },
      body: JSON.stringify(payload),
    }
  );

  if (!backend.ok) {
    return NextResponse.json({ error: "Install signal failed" }, { status: 500 });
  }

  const result = await backend.json();
  if (result.error) {
    return NextResponse.json({ error: "Install signal failed" }, { status: 500 });
  }

  const reply = NextResponse.json({ success: true });
  // remember which install this browser is, so release notes match its version
  reply.cookies.set({
    name: "installId",
    value: installId,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return reply;
}
