import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const installId = request.nextUrl.searchParams.get("installId");
  const version = request.nextUrl.searchParams.get("version");
  const from = request.nextUrl.searchParams.get("from");

  if (!installId || !version || !from) {
    return NextResponse.json({ error: "installId, version and from are required" }, { status: 400 });
  }

  const backend = await fetch(
    `${process.env.API_URL}/m/update?${new URLSearchParams({ uuid: installId }).toString()}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ new_version: version, previous_version: from }),
    }
  );

  if (!backend.ok) {
    return NextResponse.json({ error: "Version signal failed" }, { status: 500 });
  }

  const result = await backend.json();
  if (result.error) {
    return NextResponse.json({ error: "Version signal failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
