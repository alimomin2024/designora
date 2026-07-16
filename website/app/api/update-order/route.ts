import { NextRequest, NextResponse } from "next/server";
import { updateOrder } from "@/lib/uropay";

export async function POST(req: NextRequest) {
  try {
    const { uroPayOrderId, referenceNumber } = await req.json();

    if (!uroPayOrderId || !referenceNumber) {
      return NextResponse.json(
        { success: false, error: "Missing order ID or reference number" },
        { status: 400 }
      );
    }

    const data = await updateOrder({ uroPayOrderId, referenceNumber });

    return NextResponse.json({
      success: true,
      orderStatus: data.orderStatus,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Update order error:", message);
    return NextResponse.json(
      { success: false, error: "Failed to update order", details: message },
      { status: 500 }
    );
  }
}
