import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Cancellation Policy - Designoraa",
  description: "Cancellation Policy for Designoraa - Interior Designer Mastery Bundle",
};

export default function CancellationPolicy() {
  return (
    <LegalLayout title="Cancellation Policy">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> 26 February 2026
      </p>

      <p>
        This Cancellation Policy is applicable to purchases made on <strong className="text-white">designoraa.in</strong>,
        operated by <strong className="text-white">MOHAMMAD ALI FAROOQUE MOMIN</strong>, trading as <strong className="text-white">Designoraa</strong>.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Cancellation Window</h2>
        <p>
          You may request cancellation of your order within <strong className="text-white">24 hours</strong> of purchase,
          provided the product has not yet been downloaded or accessed.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Cancellation After Download</h2>
        <p>
          Since this is a <strong className="text-white">digital product</strong> with instant delivery, once the product has been
          downloaded or accessed via the download link, the order <strong className="text-white">cannot be cancelled</strong>. In such
          cases, please refer to our{" "}
          <a href="/refund-policy" className="text-primary hover:underline">Return &amp; Refund Policy</a> for
          refund eligibility.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">How to Cancel</h2>
        <p>To request a cancellation:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>Send an email to{" "}
            <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">alimomin2424@gmail.com</a>{" "}
            within 24 hours of purchase
          </li>
          <li>Include your payment/transaction ID and email address used for purchase</li>
          <li>Our team will process your cancellation within <strong className="text-white">24-48 hours</strong></li>
        </ol>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Refund on Cancellation</h2>
        <p>
          If a cancellation is approved (i.e., the product has not been downloaded), a full refund
          will be issued to the <strong className="text-white">original payment method</strong> within <strong className="text-white">5-7 business days</strong>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
        <p>
          For any cancellation-related queries, contact us at{" "}
          <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">
            alimomin2424@gmail.com
          </a>{" "}
          or call <a href="tel:+917977398081" className="text-primary hover:underline">+91 7977398081</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
