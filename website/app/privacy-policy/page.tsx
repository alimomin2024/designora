import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy - Designoraa",
  description: "Privacy Policy for Designoraa - Interior Designer Mastery Bundle",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> 26 February 2026
      </p>

      <p>
        This Privacy Policy is published in accordance with the Information Technology Act, 2000
        and the rules made thereunder. This policy applies to the website <strong className="text-white">designoraa.in</strong> operated
        by <strong className="text-white">MOHAMMAD ALI FAROOQUE MOMIN</strong>, trading as <strong className="text-white">Designoraa</strong>.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong className="text-white">Personal Information:</strong> Name and email address when you make a purchase.</li>
          <li><strong className="text-white">Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
          <li><strong className="text-white">Transaction Data:</strong> UPI transaction reference numbers and payment amounts.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
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
        <h2 className="text-xl font-semibold text-white mb-3">3. Payment Security</h2>
        <p>
          All payment transactions are processed via UPI (Unified Payments Interface).
          We do not store any sensitive payment information such as bank account numbers, credit/debit
          card details, or UPI PINs on our servers. Payments go directly to the merchant&apos;s bank account.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may
          share your data only with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Email service providers (Resend) to send purchase confirmation emails</li>
          <li>Analytics providers (Vercel Analytics) to understand website usage</li>
          <li>Law enforcement if required by law</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes
          for which it was collected. Transaction records are retained for accounting and legal compliance purposes.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
        <p>
          Our website may use cookies and similar technologies to enhance your browsing experience.
          You can control cookie settings through your browser preferences.
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
        <p className="mt-3">
          To exercise any of these rights, email us at{" "}
          <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">alimomin2424@gmail.com</a>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">
            alimomin2424@gmail.com
          </a>{" "}
          or call <a href="tel:+917977398081" className="text-primary hover:underline">+91 7977398081</a>.
        </p>
        <p className="mt-2">
          <strong className="text-white">Address:</strong> 1725/22 Ayyub Doodh Complex, Near Anand Takies, Gaibi Nagar, Bhiwandi, Maharashtra, PIN: 421302
        </p>
      </div>
    </LegalLayout>
  );
}
