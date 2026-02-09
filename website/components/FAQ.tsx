"use client";

import { useState } from "react";
import BuyButton from "./BuyButton";

export default function FAQ() {
  const faqs = [
    {
      question: "Are all the templates and assets fully editable?",
      answer:
        "Yes! Everything inside the bundle — presentations, documents, infographics, assets, and bonuses — is fully editable in Canva, AutoCAD, SketchUp, Lumion, 3DS, Word, PowerPoint, and other standard tools.",
    },
    {
      question: "How will I get access to the system after purchase?",
      answer:
        "Right after payment, you'll receive an instant download link on your screen and a copy sent to your email. No waiting — you can start using everything in seconds.",
    },
    {
      question: "Is there any expert support available?",
      answer:
        "Absolutely! We have a dedicated support team ready to assist you with any questions or challenges you may encounter while using the toolkit. You can reach out to us at support@designora.com",
    },
    {
      question: "Will I get lifetime access and future updates?",
      answer:
        "Yes. Your purchase gives you lifetime access, including future updates, new additions, and bonus drops at no extra cost.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Frequently Asked{" "}
          <span className="text-primary">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left bg-surface-light hover:bg-surface-light/80 transition-colors"
              >
                <span className="text-white font-medium text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0 bg-surface-light">
                  <p className="text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <BuyButton>
            Yes! I Want this Interior Bundle — Buy Now At Just ₹299/-
          </BuyButton>
        </div>
      </div>
    </section>
  );
}
