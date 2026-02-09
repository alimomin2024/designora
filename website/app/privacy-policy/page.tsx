import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy - Designora",
  description: "Privacy Policy for Designora - Interior Designer Mastery Bundle",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> February 2026
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
        <p>
          Welcome to Designora. We respect your privacy and are committed to protecting your
          personal data. This privacy policy will inform you about how we look after your
          personal data when you visit our website and tell you about your privacy rights.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-white">Personal Information:</strong> Name, email address,
            and payment information when you make a purchase.
          </li>
          <li>
            <strong className="text-white">Usage Data:</strong> Information about how you use
            our website, including IP address, browser type, and pages visited.
          </li>
          <li>
            <strong className="text-white">Transaction Data:</strong> Details about payments
            and purchases you have made.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
        <p>We use your personal data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>To process and deliver your purchase</li>
          <li>To send you the product download link via email</li>
          <li>To provide customer support</li>
          <li>To send important updates about your purchase</li>
          <li>To improve our website and services</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">4. Payment Security</h2>
        <p>
          All payment transactions are processed through Razorpay, a PCI-DSS compliant payment
          gateway. We do not store your credit/debit card details on our servers. All payment
          information is encrypted and handled securely by Razorpay.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may
          share your data only with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Payment processors (Razorpay) to complete transactions</li>
          <li>Email service providers to send purchase confirmations</li>
          <li>Law enforcement if required by law</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes
          for which it was collected, including satisfying any legal or reporting requirements.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Access your personal data</li>
          <li>Correct any inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at{" "}
          <a href="mailto:support@designora.com" className="text-primary hover:underline">
            support@designora.com
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
