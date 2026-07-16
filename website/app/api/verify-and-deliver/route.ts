import { NextRequest, NextResponse } from "next/server";
import { getOrderStatus } from "@/lib/uropay";
import { sendPurchaseEmail, sendSellerNotification } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { uroPayOrderId, customerName, customerEmail, amount } = await req.json();

    if (!uroPayOrderId || !customerEmail) {
      return NextResponse.json(
        { verified: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Poll UroPay status for up to 30 seconds
    let verified = false;
    for (let i = 0; i < 10; i++) {
      try {
        const status = await getOrderStatus(uroPayOrderId);
        console.log(`[verify] Attempt ${i + 1}: order=${uroPayOrderId} status=${status.orderStatus}`);

        if (status.orderStatus === "COMPLETED") {
          verified = true;
          break;
        }
      } catch (e) {
        console.error("Status check error:", e);
      }

      await new Promise((r) => setTimeout(r, 3000));
    }

    if (!verified) {
      return NextResponse.json({ verified: false });
    }

    // Payment verified by UroPay (SMS confirmed) — send emails
    console.log(`[verify] CONFIRMED: order=${uroPayOrderId} email=${customerEmail}`);

    try {
      await sendPurchaseEmail({
        customerEmail,
        customerName: customerName || "Valued Customer",
        amount: amount || 299,
        paymentId: uroPayOrderId,
      });
    } catch (e) {
      console.error("Buyer email failed:", e);
    }

    try {
      await sendSellerNotification({
        customerName: customerName || "Unknown",
        customerEmail,
        transactionId: uroPayOrderId,
        amount: amount || 299,
      });
    } catch (e) {
      console.error("Seller notification failed:", e);
    }

    return NextResponse.json({ verified: true });
  } catch (error) {
    console.error("verify-and-deliver error:", error);
    return NextResponse.json(
      { verified: false, error: "Server error" },
      { status: 500 }
    );
  }
}
