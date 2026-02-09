import BuyButton from "./BuyButton";

export default function ProductShowcase() {
  const categories = [
    {
      title: "Presentation Templates",
      description: "50+ Premium templates for client pitches and project showcases",
      icon: "📊",
      color: "from-blue-500/20 to-blue-600/5",
    },
    {
      title: "Designing Assets",
      description: "10,000+ design assets, creative blocks & mood board elements",
      icon: "🎨",
      color: "from-purple-500/20 to-purple-600/5",
    },
    {
      title: "Complete Collection",
      description: "Full workflow pack: briefs, checklists, planners & trackers",
      icon: "📦",
      color: "from-primary/20 to-primary/5",
    },
  ];

  const bundleItems = [
    {
      icon: "✅",
      text: "10,000+ Design Assets, Creative Blocks & Mood Board Elements — all organized and ready to use.",
    },
    {
      icon: "✅",
      text: "50+ Premium Presentation & Proposal Templates for client pitches and project showcases.",
    },
    {
      icon: "✅",
      text: "740+ Procreate Design Assets, Sketchup Files. 2000+ Furniture Blocks.",
    },
    {
      icon: "✅",
      text: "Complete Pricing Sheets, Rate Cards & Editable Infographics to present your value professionally.",
    },
    {
      icon: "✅",
      text: "Full Interior Design Workflow Pack: briefs, checklists, planners, trackers, and process docs.",
    },
    {
      icon: "✅",
      text: "15+ Bonus Editable Bundles including brand kits, social media templates.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
            Meet the Interior Designer Mastery Bundle
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Loved by{" "}
            <span className="text-primary">7,500+ Designers</span>{" "}
            Worldwide
          </p>
        </div>

        {/* Category Cards */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            What You Will Get Inside{" "}
            <span className="text-primary">Designer Pro Bundle</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${cat.color} border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{cat.title}</h4>
              <p className="text-muted text-sm">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Bundle Contents */}
        <div className="bg-surface border border-border rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Here Is What You Are Getting
          </h3>
          <p className="text-primary text-center text-lg font-semibold mb-10">
            5000+ Premium Assets Inside Bundle!
          </p>

          <div className="space-y-5 max-w-3xl mx-auto">
            {bundleItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group"
              >
                <span className="text-green-500 text-xl flex-shrink-0 mt-0.5">
                  {item.icon}
                </span>
                <span className="text-foreground/90 text-base leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <BuyButton>
              Yes! I Want this Interior Bundle — Buy Now At Just ₹299/-
            </BuyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
