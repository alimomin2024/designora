import crypto from "crypto";

const UROPAY_API_URL = "https://api.uropay.me";

function getCredentials() {
  const apiKey = process.env.UROPAY_API_KEY;
  const secret = process.env.UROPAY_SECRET;

  if (!apiKey || !secret) {
    throw new Error(
      `Missing UroPay credentials. API_KEY: ${apiKey ? "set" : "missing"}, SECRET: ${secret ? "set" : "missing"}`
    );
  }

  const hashedSecret = crypto.createHash("sha512").update(secret).digest("hex");
  return { apiKey, hashedSecret };
}

function getApiKeyOnly() {
  const apiKey = process.env.UROPAY_API_KEY;
  if (!apiKey) throw new Error("Missing UROPAY_API_KEY");
  return apiKey;
}

export async function createOrder({
  amount,
  merchantOrderId,
  customerName,
  customerEmail,
  vpa,
  vpaName,
  transactionNote,
}: {
  amount: number;
  merchantOrderId: string;
  customerName: string;
  customerEmail: string;
  vpa: string;
  vpaName: string;
  transactionNote?: string;
}) {
  const { apiKey, hashedSecret } = getCredentials();

  const res = await fetch(`${UROPAY_API_URL}/order/generate`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
      "Authorization": `Bearer ${hashedSecret}`,
    },
    body: JSON.stringify({
      vpa,
      vpaName,
      amount: amount * 100,
      merchantOrderId,
      customerName,
      customerEmail,
      transactionNote: transactionNote || `Payment for ${merchantOrderId}`,
      emailTrigger: "DISABLED",
    }),
  });

  const data = await res.json();

  if (data.code !== 200 || data.status !== "success") {
    throw new Error(`UroPay create order failed: ${JSON.stringify(data)}`);
  }

  return data.data;
}

export async function updateOrder({
  uroPayOrderId,
  referenceNumber,
}: {
  uroPayOrderId: string;
  referenceNumber: string;
}) {
  const { apiKey, hashedSecret } = getCredentials();

  const res = await fetch(`${UROPAY_API_URL}/order/update`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
      "Authorization": `Bearer ${hashedSecret}`,
    },
    body: JSON.stringify({
      uroPayOrderId,
      referenceNumber,
    }),
  });

  const data = await res.json();

  if (data.code !== 200 || data.status !== "success") {
    throw new Error(`UroPay update order failed: ${JSON.stringify(data)}`);
  }

  return data.data;
}

export async function getOrderStatus(uroPayOrderId: string) {
  const apiKey = getApiKeyOnly();

  const res = await fetch(`${UROPAY_API_URL}/order/status/${uroPayOrderId}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
    },
  });

  const data = await res.json();

  if (data.code !== 200) {
    throw new Error(`UroPay status check failed: ${JSON.stringify(data)}`);
  }

  return data.data;
}
