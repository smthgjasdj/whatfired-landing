import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const installId = request.nextUrl.searchParams.get("installId");
  if (!installId) {
    return NextResponse.json({ error: "installId is required" }, { status: 400 });
  }

  try {
    await fetch(
      `${process.env.API_URL}/m/uninstall?${new URLSearchParams({ uuid: installId }).toString()}`,
      { method: "POST" }
    );
  } catch {
    // the visitor still gets their goodbye page
  }

  return NextResponse.json({ success: true });
}
