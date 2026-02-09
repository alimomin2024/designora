import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendPurchaseEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      customer_email,
      customer_name,
    } = await req.json();

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        { success: false, error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Send confirmation email if customer email is provided
    if (customer_email) {
      try {
        await sendPurchaseEmail({
          customerEmail: customer_email,
          customerName: customer_name || "Valued Customer",
          amount: 299,
          paymentId: razorpay_payment_id,
        });
      } catch (emailError) {
        console.error("Email send failed:", emailError);
        // Don't fail the payment verification if email fails
      }
    }

    return NextResponse.json({
      success: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { success: false, error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
