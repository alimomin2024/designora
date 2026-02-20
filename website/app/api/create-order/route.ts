import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "This endpoint is no longer in use. Please use /api/confirm-payment instead." },
    { status: 410 }
  );
}
