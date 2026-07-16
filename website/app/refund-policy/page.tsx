import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Return & Refund Policy - Designoraa",
  description: "Return & Refund Policy for Designoraa - Interior Designer Mastery Bundle",
};

export default function RefundPolicy() {
  return (
    <LegalLayout title="Return &amp; Refund Policy">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> 26 February 2026
      </p>

      <p>
        This Return &amp; Refund Policy is applicable to purchases made on <strong className="text-white">designoraa.in</strong>,
        operated by <strong className="text-white">MOHAMMAD ALI FAROOQUE MOMIN</strong>, trading as <strong className="text-white">Designoraa</strong>.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">100% Money Back Guarantee</h2>
        <p>
          We are confident in the quality and value of our Interior Designer Mastery Bundle.
          We want you to be completely satisfied with your purchase.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Refund Duration</h2>
        <p>
          Refund requests must be made within <strong className="text-white">7 days</strong> from the date of purchase.
          Requests made after 7 days will not be entertained.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Refund Eligibility</h2>
        <p>You are eligible for a full refund if:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>You request a refund within <strong className="text-white">7 days</strong> of purchase</li>
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
        <h2 className="text-xl font-semibold text-white mb-3">Return Policy</h2>
        <p>
          As this is a <strong className="text-white">digital product</strong>, there are no physical returns.
          Once purchased and delivered digitally, the product cannot be &quot;returned&quot; in the traditional sense.
          However, if you are unsatisfied, you may request a refund within the 7-day window described above.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Refund Mode</h2>
        <p>
          Once a refund is approved, the amount will be credited back to the <strong className="text-white">original payment method</strong> used
          during purchase (i.e., the same UPI-linked bank account). Refunds are processed
          within <strong className="text-white">5-7 business days</strong> from the date of approval.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">How to Request a Refund</h2>
        <p>To request a refund:</p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>Send an email to{" "}
            <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">alimomin2424@gmail.com</a>
          </li>
          <li>Include your payment/transaction ID and order details</li>
          <li>Describe the reason for your refund request</li>
          <li>Our team will review and respond within <strong className="text-white">48-72 hours</strong></li>
        </ol>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
        <p>
          For any refund-related queries, contact us at{" "}
          <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">
            alimomin2424@gmail.com
          </a>{" "}
          or call <a href="tel:+917977398081" className="text-primary hover:underline">+91 7977398081</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
