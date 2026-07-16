import { NextRequest, NextResponse } from "next/server";
import { getOrderStatus } from "@/lib/uropay";
import { sendPurchaseEmail, sendSellerNotification } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { uroPayOrderId, customerName, customerEmail, referenceNumber, amount } =
      await req.json();

    if (!uroPayOrderId || !customerEmail) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const status = await getOrderStatus(uroPayOrderId);

    if (status.orderStatus !== "COMPLETED") {
      return NextResponse.json(
        { success: false, error: "Payment not yet verified" },
        { status: 402 }
      );
    }

    try {
      await sendPurchaseEmail({
        customerEmail,
        customerName: customerName || "Valued Customer",
        amount: amount || 299,
        paymentId: referenceNumber || uroPayOrderId,
      });
    } catch (emailError) {
      console.error("Failed to send buyer email:", emailError);
    }

    try {
      await sendSellerNotification({
        customerName: customerName || "Unknown",
        customerEmail,
        transactionId: referenceNumber || uroPayOrderId,
        amount: amount || 299,
      });
    } catch (emailError) {
      console.error("Failed to send seller notification:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Confirm payment error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
