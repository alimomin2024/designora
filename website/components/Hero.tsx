import CountdownTimer from "./CountdownTimer";
import BuyButton from "./BuyButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
          <span className="text-primary text-sm">🏅</span>
          <span className="text-primary text-sm font-medium">
            Trusted by 7500+ Interior Designers and Architects Across India
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-white">5000+ Templates, Legal Docs &</span>
          <br />
          <span className="text-white">Mood Boards, Assets, Files —</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
            Finally In One Place!
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-muted text-lg sm:text-xl mb-10">
          Ready To Use | 100% Editable | Instant Download
        </p>

        {/* Pricing */}
        <div id="pricing" className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-muted line-through text-2xl">₹1,999/-</span>
            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Limited Time
            </span>
          </div>
          <div className="text-5xl sm:text-6xl font-bold text-primary mb-2">
            ₹299/-
          </div>
          <p className="text-accent text-sm font-medium animate-pulse">
            🚨 Limited Time Offer
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-10">
          <CountdownTimer />
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <BuyButton className="text-xl px-12 py-5">
            Yes! I Want This Interior Bundle! Buy Now At Just ₹299/-
          </BuyButton>

          <div className="flex items-center gap-2 text-muted text-sm">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            100% Money Back Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
