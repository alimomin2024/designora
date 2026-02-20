import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const baseUrl = new URL(req.url).origin;
  return NextResponse.redirect(new URL("/", baseUrl));
}
