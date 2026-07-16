import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/uropay";

export async function POST(req: NextRequest) {
  try {
    const { amount, customerName, customerEmail } = await req.json();

    if (!customerName || !customerEmail) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const vpa = process.env.NEXT_PUBLIC_UPI_ID || "";
    const vpaName = process.env.UPI_DISPLAY_NAME || "Designoraa";
    const merchantOrderId = `ORD-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const data = await createOrder({
      amount: amount || 299,
      merchantOrderId,
      customerName,
      customerEmail,
      vpa,
      vpaName,
      transactionNote: "Interior Designer Mastery Bundle",
    });

    return NextResponse.json({
      success: true,
      uroPayOrderId: data.uroPayOrderId,
      qrCode: data.qrCode,
      amountInRupees: data.amountInRupees,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Create order error:", message);
    return NextResponse.json(
      { success: false, error: "Failed to create order", details: message },
      { status: 500 }
    );
  }
}
