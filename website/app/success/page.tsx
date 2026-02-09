"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <nav className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">Designora</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Success Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Animated Checkmark */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-muted text-lg mb-8">
          Thank you for purchasing the Interior Designer Mastery Bundle.
          <br />
          Your bundle is ready to download!
        </p>

        {paymentId && (
          <p className="text-muted text-sm mb-8">
            Payment ID:{" "}
            <span className="text-white font-mono">{paymentId}</span>
          </p>
        )}

        {/* Download Button */}
        <div className="mb-12">
          <a
            href={process.env.NEXT_PUBLIC_GOOGLE_DRIVE_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-gold text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Your Bundle Now
          </a>
        </div>

        {/* Email Notice */}
        <div className="bg-surface border border-border rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-white">
              Check Your Email
            </h3>
          </div>
          <p className="text-muted text-sm">
            We&apos;ve sent a confirmation email with the download link to your email
            address. If you don&apos;t see it, please check your spam/junk folder.
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-surface border border-border rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            What&apos;s Next?
          </h3>
          <ul className="text-muted text-sm space-y-3 text-left">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">1.</span>
              <span>
                Download the bundle from the button above or the link in your
                email
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">2.</span>
              <span>
                Extract the files and start exploring the templates, assets, and
                resources
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">3.</span>
              <span>
                Customize the templates in Canva, AutoCAD, SketchUp, or your
                preferred tool
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">4.</span>
              <span>
                Start impressing your clients with professional presentations and
                mood boards!
              </span>
            </li>
          </ul>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-gold transition-colors mt-8 text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
