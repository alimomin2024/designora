export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Interior Designer, Mumbai",
      text: "This bundle saved me hundreds of hours! The presentation templates alone are worth 10x the price. My client pitches look so much more professional now.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Architect, Bangalore",
      text: "I was spending more time on admin work than actual designing. This bundle changed everything — contracts, mood boards, assets, all in one place!",
      rating: 5,
    },
    {
      name: "Anita Desai",
      role: "Interior Stylist, Delhi",
      text: "The quality of assets is incredible. I use the mood board elements daily. My clients are always impressed with the polished presentations now.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Design Studio Owner, Pune",
      text: "Best investment for my studio. The legal documents and workflow templates have streamlined our entire process. Highly recommended!",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Freelance Designer, Hyderabad",
      text: "As a freelancer, I used to struggle with creating professional proposals. This bundle gave me everything I needed to compete with big studios.",
      rating: 4,
    },
    {
      name: "Arjun Patel",
      role: "Interior Architect, Ahmedabad",
      text: "The Lumion blocks and Sketchup files are game-changers. What used to take days now takes hours. Absolutely love this bundle!",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-primary" : "text-border"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have A Look At What Our{" "}
            <span className="text-primary">Designers</span> Have to Say
          </h2>
        </div>

        {/* Overall Rating */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-bold text-xl">RATED 4.7 OUT OF 5</span>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-foreground/80 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
