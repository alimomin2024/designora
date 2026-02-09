import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designora - Interior Designer Mastery Bundle | 5000+ Premium Assets",
  description:
    "Get 5000+ premium templates, legal docs, mood boards, assets & files for interior designers. Ready to use, 100% editable, instant download.",
  keywords: [
    "interior design",
    "design templates",
    "mood boards",
    "interior designer bundle",
    "design assets",
    "presentation templates",
  ],
  openGraph: {
    title: "Designora - Interior Designer Mastery Bundle",
    description:
      "5000+ Templates, Legal Docs & Mood Boards, Assets, Files - Finally In One Place!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
