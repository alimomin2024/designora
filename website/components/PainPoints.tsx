export default function PainPoints() {
  const painPoints = [
    {
      icon: "📂",
      text: "Assets Scattered Across 20 Different Folders?",
    },
    {
      icon: "⏰",
      text: "Spending More Time Managing Clients Than Designing?",
    },
    {
      icon: "🎨",
      text: "Struggling To Make Your Moodboard Look Polished?",
    },
    {
      icon: "📋",
      text: "Confusion About Contracts & Legal Documents?",
    },
    {
      icon: "🌙",
      text: "Endless Nights Building Pitch Presentations From Zero?",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Still Wasting Hours On Admin Work
          <br />
          <span className="text-primary">Instead of Designing?</span>
        </h2>
        <p className="text-muted text-center mb-12 text-lg">
          If any of these sound familiar, you need this bundle.
        </p>

        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-surface-light border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {point.icon}
              </span>
              <span className="text-foreground text-lg">{point.text}</span>
              <svg
                className="w-5 h-5 text-accent ml-auto flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
