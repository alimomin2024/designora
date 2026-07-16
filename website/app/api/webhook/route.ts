import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const environment = req.headers.get("x-uropay-environment");
    const webhookId = req.headers.get("x-uropay-webhook-id");

    console.log("[UroPay Webhook]", {
      environment,
      webhookId,
      referenceNumber: body.referenceNumber,
      amount: body.amount,
      from: body.from,
      vpa: body.vpa,
    });

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ status: "ok" }, { status: 200 });
  }
}
