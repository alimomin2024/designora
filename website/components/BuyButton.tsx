"use client";

import { useState } from "react";

interface BuyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

type Step = "details" | "pay" | "confirm";

export default function BuyButton({ className = "", children }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<Step>("details");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");

  const UPI_ID = process.env.NEXT_PUBLIC_UPI_ID || "yourname@upi";
  const AMOUNT = 299;
  const upiLink = `upi://pay?pa=${UPI_ID}&pn=Designora&am=${AMOUNT}&cu=INR&tn=Interior+Designer+Mastery+Bundle`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

  const handleBuyClick = () => {
    setShowModal(true);
    setStep("details");
    setError("");
  };

  const handleDetailsSubmit = () => {
    if (!customerName.trim() || !customerEmail.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStep("pay");
  };

  const handlePaymentDone = () => {
    setStep("confirm");
    setError("");
  };

  const handleConfirmPayment = async () => {
    if (!transactionId.trim()) {
      setError("Please enter your UPI transaction/reference ID.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/confirm-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          transactionId: transactionId.trim(),
          amount: AMOUNT,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      window.location.href = `/success?txn_id=${transactionId.trim()}`;
    } catch (err) {
      console.error("Confirm payment error:", err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setStep("details");
    setError("");
    setLoading(false);
  };

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
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {(["details", "pay", "confirm"] as Step[]).map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step === s ? "bg-primary text-black" :
                    (["details", "pay", "confirm"].indexOf(step) > i ? "bg-green-500 text-white" : "bg-surface-light text-muted")
                  }`}>
                    {["details", "pay", "confirm"].indexOf(step) > i ? "✓" : i + 1}
                  </div>
                  {i < 2 && <div className={`w-8 h-0.5 ${["details", "pay", "confirm"].indexOf(step) > i ? "bg-green-500" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1: Enter Details */}
            {step === "details" && (
              <>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Enter Your Details</h3>
                <p className="text-muted text-sm mb-6 text-center">
                  We&apos;ll send the download link to your email after payment.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-surface-light border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-surface-light border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}

                <button
                  onClick={handleDetailsSubmit}
                  className="w-full mt-6 bg-gradient-to-r from-primary to-gold text-black font-bold py-3.5 rounded-full text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
                >
                  Next — Pay via UPI
                </button>
              </>
            )}

            {/* Step 2: Pay via UPI */}
            {step === "pay" && (
              <>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Pay ₹{AMOUNT} via UPI</h3>
                <p className="text-muted text-sm mb-5 text-center">
                  Scan the QR code or use the UPI ID below to pay.
                </p>

                {/* QR Code */}
                <div className="flex justify-center mb-5">
                  <div className="bg-white rounded-xl p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={qrUrl} alt="UPI QR Code" width={220} height={220} className="rounded-lg" />
                  </div>
                </div>

                {/* UPI ID */}
                <div className="bg-surface-light border border-border rounded-xl p-4 mb-5">
                  <p className="text-muted text-xs mb-1.5 text-center">UPI ID</p>
                  <div className="flex items-center justify-center gap-2">
                    <code className="text-primary font-mono text-lg font-bold">{UPI_ID}</code>
                    <button
                      onClick={() => navigator.clipboard.writeText(UPI_ID)}
                      className="text-muted hover:text-white transition-colors"
                      title="Copy UPI ID"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-center mt-2">
                    <span className="text-white font-bold text-lg">₹{AMOUNT}</span>
                  </p>
                </div>

                {/* Instructions */}
                <div className="bg-surface-light/50 rounded-xl p-4 mb-5 text-sm text-muted space-y-2">
                  <p className="flex items-start gap-2"><span className="text-primary">1.</span> Open any UPI app (GPay, PhonePe, Paytm, etc.)</p>
                  <p className="flex items-start gap-2"><span className="text-primary">2.</span> Scan the QR code or enter the UPI ID</p>
                  <p className="flex items-start gap-2"><span className="text-primary">3.</span> Pay ₹{AMOUNT} and note the Transaction ID</p>
                  <p className="flex items-start gap-2"><span className="text-primary">4.</span> Click the button below after payment</p>
                </div>

                <button
                  onClick={handlePaymentDone}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3.5 rounded-full text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25"
                >
                  I&apos;ve Completed the Payment
                </button>

                <button
                  onClick={() => setStep("details")}
                  className="w-full mt-3 text-muted hover:text-white text-sm transition-colors"
                >
                  ← Go back
                </button>
              </>
            )}

            {/* Step 3: Enter Transaction ID */}
            {step === "confirm" && (
              <>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Confirm Your Payment</h3>
                <p className="text-muted text-sm mb-6 text-center">
                  Enter the UPI transaction/reference ID from your payment app to get your download link.
                </p>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                    UPI Transaction / Reference ID
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="e.g. 423190XXXXXX or UTR number"
                    className="w-full bg-surface-light border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors"
                  />
                  <p className="text-muted/60 text-xs mt-2">
                    You can find this in your UPI app&apos;s transaction history or payment success screen.
                  </p>
                </div>

                {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}

                <button
                  onClick={handleConfirmPayment}
                  disabled={loading}
                  className="w-full mt-6 bg-gradient-to-r from-primary to-gold text-black font-bold py-3.5 rounded-full text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    "Get My Download Link"
                  )}
                </button>

                <button
                  onClick={() => { setStep("pay"); setError(""); }}
                  className="w-full mt-3 text-muted hover:text-white text-sm transition-colors"
                >
                  ← Go back
                </button>
              </>
            )}

            <p className="text-muted/60 text-xs text-center mt-4">
              Secure payment via UPI. Your email is only used to deliver the product.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
