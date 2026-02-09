import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Refund Policy - Designora",
  description: "Refund Policy for Designora - Interior Designer Mastery Bundle",
};

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> February 2026
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">100% Money Back Guarantee</h2>
        <p>
          We are confident in the quality and value of our Interior Designer Mastery Bundle.
          We want you to be completely satisfied with your purchase.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Refund Eligibility</h2>
        <p>You are eligible for a full refund if:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>You request a refund within 7 days of purchase</li>
          <li>You have not downloaded or accessed the majority of the bundle content</li>
          <li>You provide a valid reason for the refund request</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Non-Refundable Cases</h2>
        <p>Refunds will not be granted in the following cases:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>The request is made after 7 days from the date of purchase</li>
          <li>The bundle has been fully downloaded and used</li>
          <li>The buyer has shared the download link with others</li>
          <li>The buyer requests a refund for reasons unrelated to product quality</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">How to Request a Refund</h2>
        <p>To request a refund:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>
            Send an email to{" "}
            <a href="mailto:support@designora.com" className="text-primary hover:underline">
              support@designora.com
            </a>
          </li>
          <li>Include your payment ID and order details</li>
          <li>Describe the reason for your refund request</li>
          <li>Our team will review and respond within 48-72 hours</li>
        </ol>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Refund Processing</h2>
        <p>
          Once approved, refunds will be processed within 5-7 business days. The amount will
          be credited back to the original payment method used during purchase.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
        <p>
          For any refund-related queries, contact us at{" "}
          <a href="mailto:support@designora.com" className="text-primary hover:underline">
            support@designora.com
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
