import { geolocation } from "@vercel/functions";
import { type NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const { country } = geolocation(request);
  const { ua } = userAgent(request);

  if (country) {
    response.headers.set("x-user-country", country);
  }
  response.headers.set("x-user-agent", ua);
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Credentials", "true");

  return response;
}
