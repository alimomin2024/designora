import { NextRequest, NextResponse } from "next/server";
import { sendPurchaseEmail, sendSellerNotification } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { customerName, customerEmail, transactionId, amount } = await req.json();

    if (!customerName || !customerEmail || !transactionId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    try {
      await sendPurchaseEmail({
        customerEmail,
        customerName,
        amount: amount || 299,
        paymentId: transactionId,
      });
    } catch (emailError) {
      console.error("Failed to send buyer email:", emailError);
    }

    try {
      await sendSellerNotification({
        customerName,
        customerEmail,
        transactionId,
        amount: amount || 299,
      });
    } catch (emailError) {
      console.error("Failed to send seller notification:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Confirm payment error:", error);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
