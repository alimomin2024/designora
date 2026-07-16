import { NextRequest, NextResponse } from "next/server";
import { getOrderStatus } from "@/lib/uropay";

export async function GET(req: NextRequest) {
  try {
    const orderId = req.nextUrl.searchParams.get("orderId");

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: "Missing orderId" },
        { status: 400 }
      );
    }

    const data = await getOrderStatus(orderId);

    return NextResponse.json({
      success: true,
      orderStatus: data.orderStatus,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Check status error:", message);
    return NextResponse.json(
      { success: false, error: "Failed to check status" },
      { status: 500 }
    );
  }
}
