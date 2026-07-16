import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Shipping & Delivery Policy - Designoraa",
  description: "Shipping & Delivery Policy for Designoraa - Interior Designer Mastery Bundle",
};

export default function ShippingPolicy() {
  return (
    <LegalLayout title="Shipping &amp; Delivery Policy">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> 26 February 2026
      </p>

      <p>
        This Shipping &amp; Delivery Policy is applicable to purchases made on <strong className="text-white">designoraa.in</strong>,
        operated by <strong className="text-white">MOHAMMAD ALI FAROOQUE MOMIN</strong>, trading as <strong className="text-white">Designoraa</strong>.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Digital Product — No Physical Shipping</h2>
        <p>
          Designoraa sells <strong className="text-white">digital products only</strong>. There is no physical product to ship.
          All products are delivered electronically via download links. No shipping charges apply.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Delivery Method</h2>
        <p>
          Upon successful payment verification, your product will be delivered through:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong className="text-white">Instant download link</strong> displayed on the payment success page</li>
          <li><strong className="text-white">Confirmation email</strong> containing the download link, sent to the email address provided at checkout</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Delivery Duration</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong className="text-white">Download link on success page:</strong> Instant (immediately after payment verification)</li>
          <li><strong className="text-white">Email delivery:</strong> Within <strong className="text-white">5-10 minutes</strong> of payment verification</li>
        </ul>
        <p className="mt-3">
          If you do not receive the email within 15 minutes, please check your spam/junk folder.
          If the issue persists, contact us at{" "}
          <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">alimomin2424@gmail.com</a>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Access</h2>
        <p>
          Your purchase provides <strong className="text-white">lifetime access</strong> to the product. The download link
          will remain active permanently. You can re-download the files at any time.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Delivery Issues</h2>
        <p>
          If you face any issues accessing your download link or did not receive the confirmation
          email, please contact us immediately:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Email: <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">alimomin2424@gmail.com</a></li>
          <li>Phone: <a href="tel:+917977398081" className="text-primary hover:underline">+91 7977398081</a></li>
        </ul>
        <p className="mt-3">We aim to resolve all delivery issues within <strong className="text-white">24 hours</strong>.</p>
      </div>
    </LegalLayout>
  );
}
