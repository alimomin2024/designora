import BuyButton from "./BuyButton";
import CountdownTimer from "./CountdownTimer";

export default function BonusSection() {
  const bonuses = [
    {
      number: 1,
      title: "50+ Premium Fonts",
      description:
        "A curated collection of elegant, versatile typefaces, included at no extra cost, to give your layouts, boards, and presentations a unique professional touch.",
      value: "₹4,000",
      emoji: "🎁",
    },
    {
      number: 2,
      title: "30+ Layout & Title Blocks",
      description:
        "Professional-ready templates designed to simplify your workflow, keep your projects consistent, and help you deliver polished results faster.",
      value: "₹3,500",
      emoji: "🎁",
    },
    {
      number: 3,
      title: "200+ Lumion Blocks",
      description:
        "Enjoy unlimited access to all resources forever, with a full commercial license included at no extra cost, so you can use every asset freely in personal and client projects.",
      value: "₹5,000",
      emoji: "🎁",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            BUT WAIT!!!
          </h2>
          <p className="text-xl text-muted mb-2">That&apos;s Not Everything&hellip;</p>
          <h3 className="text-2xl sm:text-3xl font-bold mt-6">
            You Can Unlock These 3 Amazing Bonuses
            <br />
            <span className="text-primary">
              Worth ₹12,500 For Absolutely FREE
            </span>
          </h3>
          <p className="text-muted text-lg mt-4">
            Only If You Buy The Bundle Right Now!!!
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {bonuses.map((bonus) => (
            <div
              key={bonus.number}
              className="bg-surface-light border border-border rounded-2xl p-8 relative overflow-hidden hover:border-primary/40 transition-all duration-300 group"
            >
              {/* FREE badge */}
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                FREE
              </div>

              <div className="text-3xl mb-4">{bonus.emoji}</div>
              <p className="text-primary text-sm font-semibold mb-2">
                Bonus #{bonus.number}
              </p>
              <h4 className="text-xl font-bold text-white mb-3">
                {bonus.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {bonus.description}
              </p>

              <div className="border-t border-border pt-4">
                <p className="text-muted text-sm">
                  Priced:{" "}
                  <span className="text-white font-semibold line-through">
                    {bonus.value}/-
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold mb-2">
            Get All This With Bundle
          </h3>
          <p className="text-muted text-lg mb-6">
            Total Value Of Bonuses:{" "}
            <span className="line-through text-white">₹12,500/-</span>
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Buy Today For Just Rs. 299/-
          </p>
          <p className="text-accent text-sm font-medium mb-8">
            Time is running out. Order Now!
          </p>

          {/* Timer */}
          <div className="mb-8">
            <CountdownTimer />
          </div>

          <BuyButton className="text-xl">
            Yes! I Want this Interior Bundle! Buy Now At Just ₹299/-
          </BuyButton>
        </div>
      </div>
    </section>
  );
}
