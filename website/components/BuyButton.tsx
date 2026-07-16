"use client";

import { useState } from "react";

interface BuyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

type Step = "details" | "pay" | "verifying" | "pending";

export default function BuyButton({ className = "", children }: BuyButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<Step>("details");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [orderId, setOrderId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [amountDisplay, setAmountDisplay] = useState("");

  const AMOUNT = 1;

  const handleBuyClick = () => {
    setShowModal(true);
    setStep("details");
    setError("");
    setOrderId("");
    setQrCode("");
    setLoading(false);
  };

  const handleDetailsSubmit = async () => {
    if (!customerName.trim() || !customerEmail.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: AMOUNT,
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to create order");

      setOrderId(data.uroPayOrderId);
      setQrCode(data.qrCode);
      setAmountDisplay(data.amountInRupees);
      setStep("pay");
    } catch (err) {
      console.error("Create order error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyPayment = async () => {
    setError("");
    setLoading(true);
    setStep("verifying");

    try {
      const res = await fetch("/api/verify-and-deliver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uroPayOrderId: orderId,
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          amount: AMOUNT,
        }),
      });

      const data = await res.json();

      if (data.verified) {
        window.location.href = `/success?order_id=${orderId}`;
        return;
      }

      setStep("pending");
      setLoading(false);
    } catch (err) {
      console.error("Verify error:", err);
      setError("Something went wrong. Please try again.");
      setStep("pay");
      setLoading(false);
    }
  };

  const handleCheckAgain = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/verify-and-deliver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uroPayOrderId: orderId,
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          amount: AMOUNT,
        }),
      });

      const data = await res.json();

      if (data.verified) {
        window.location.href = `/success?order_id=${orderId}`;
        return;
      }

      setError("Payment not yet detected. Please make sure you completed the UPI payment and try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setStep("details");
    setError("");
    setLoading(false);
  };

  const stepIndex = { details: 0, pay: 1, verifying: 1, pending: 1 };
  const steps = ["Details", "Pay"];

  return (
    <>
      <button
        onClick={handleBuyClick}
        className={`relative overflow-hidden bg-gradient-to-r from-primary to-gold text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 btn-shine ${className}`}
      >
        {children || "Buy Now at Just ₹299/-"}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-muted hover:text-white transition-colors z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {steps.map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    stepIndex[step] === i ? "bg-primary text-black" :
                    stepIndex[step] > i ? "bg-green-500 text-white" : "bg-surface-light text-muted"
                  }`}>
                    {stepIndex[step] > i ? "✓" : i + 1}
                  </div>
                  {i < steps.length - 1 && <div className={`w-12 h-0.5 ${stepIndex[step] > i ? "bg-green-500" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1: Details */}
            {step === "details" && (
              <>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Enter Your Details</h3>
                <p className="text-muted text-sm mb-6 text-center">
                  We&apos;ll send the download link to your email after payment.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Full Name</label>
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter your name"
                      className="w-full bg-surface-light border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email Address</label>
                    <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} placeholder="your@email.com"
                      className="w-full bg-surface-light border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}
                <button onClick={handleDetailsSubmit} disabled={loading}
                  className="w-full mt-6 bg-gradient-to-r from-primary to-gold text-black font-bold py-3.5 rounded-full text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50">
                  {loading ? <Spinner text="Creating order..." /> : "Next — Pay via UPI"}
                </button>
              </>
            )}

            {/* Step 2: Pay */}
            {step === "pay" && (
              <>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Pay ₹{amountDisplay || AMOUNT} via UPI</h3>
                <p className="text-muted text-sm mb-5 text-center">Scan the QR code with any UPI app to pay.</p>
                {qrCode && (
                  <div className="flex justify-center mb-5">
                    <div className="bg-white rounded-xl p-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={qrCode} alt="UPI QR Code" width={220} height={220} className="rounded-lg" />
                    </div>
                  </div>
                )}
                <div className="bg-surface-light/50 rounded-xl p-4 mb-5 text-sm text-muted space-y-2">
                  <p className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> Open GPay, PhonePe, Paytm, or any UPI app</p>
                  <p className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> Scan the QR code above</p>
                  <p className="flex items-start gap-2"><span className="text-primary font-bold">3.</span> Complete the payment of ₹{amountDisplay || AMOUNT}</p>
                </div>
                {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}
                <button onClick={handleVerifyPayment} disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3.5 rounded-full text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50">
                  {loading ? <Spinner text="Verifying..." /> : "I've Completed the Payment — Verify"}
                </button>
              </>
            )}

            {/* Verifying spinner */}
            {step === "verifying" && (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                  <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Verifying Your Payment</h3>
                <p className="text-muted text-sm mb-2">Checking with your bank...</p>
                <p className="text-muted/60 text-xs">This takes 15-30 seconds. Please wait.</p>
              </div>
            )}

            {/* Pending — not yet detected */}
            {step === "pending" && (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-6">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Payment Not Yet Detected</h3>
                <p className="text-muted text-sm mb-4">
                  We couldn&apos;t confirm your payment yet. If you&apos;ve already paid, wait a moment and try again.
                </p>
                {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
                <button onClick={handleCheckAgain} disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-gold text-black font-bold py-3.5 rounded-full text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50">
                  {loading ? <Spinner text="Checking..." /> : "Check Again"}
                </button>
                <p className="text-muted/60 text-xs mt-4">
                  If you haven&apos;t paid yet, go back and scan the QR code.
                </p>
                <button onClick={() => { setStep("pay"); setError(""); }}
                  className="mt-2 text-primary hover:text-gold text-sm transition-colors">
                  ← Back to QR Code
                </button>
              </div>
            )}

            <p className="text-muted/60 text-xs text-center mt-4">
              Secure UPI payment verified automatically. No fake payments accepted.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Spinner({ text }: { text: string }) {
  return (
    <span className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      {text}
    </span>
  );
}
