"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: { name: string; email: string };
  theme: { color: string };
  handler: (response: RazorpayResponse) => void;
  modal: { ondismiss: () => void };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface BuyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BuyButton({ className = "", children }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Step 1: Create order on server
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 299 }),
      });

      const data = await res.json();

      if (!data.orderId) {
        throw new Error("Failed to create order");
      }

      // Step 2: Open Razorpay checkout
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: 29900, // in paise
        currency: "INR",
        name: "Designora",
        description: "Interior Designer Mastery Bundle",
        order_id: data.orderId,
        prefill: {
          name: "",
          email: "",
        },
        theme: {
          color: "#f59e0b",
        },
        handler: async function (response: RazorpayResponse) {
          // Step 3: Verify payment on server
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                customer_email: (document.querySelector('input[name="prefill[email]"]') as HTMLInputElement)?.value || "",
                customer_name: (document.querySelector('input[name="prefill[name]"]') as HTMLInputElement)?.value || "",
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              window.location.href = `/success?payment_id=${response.razorpay_payment_id}`;
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch {
            alert("Something went wrong. Please contact support.");
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`relative overflow-hidden bg-gradient-to-r from-primary to-gold text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed btn-shine ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Processing...
        </span>
      ) : (
        children || "Buy Now at Just ₹299/-"
      )}
    </button>
  );
}
