import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service - Designora",
  description: "Terms of Service for Designora - Interior Designer Mastery Bundle",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> February 2026
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Designora website and purchasing our products, you agree
          to be bound by these Terms of Service. If you do not agree with any part of these
          terms, please do not use our website or purchase our products.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">2. Products and Services</h2>
        <p>
          Designora sells digital products, specifically the Interior Designer Mastery Bundle,
          which includes templates, assets, legal documents, mood boards, and other design
          resources. All products are delivered digitally via download link.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">3. License and Usage</h2>
        <p>Upon purchase, you receive:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>A personal and commercial license to use all assets in the bundle</li>
          <li>The right to modify and customize templates for your projects</li>
          <li>Lifetime access to the purchased content and future updates</li>
        </ul>
        <p className="mt-3">You may NOT:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Resell, redistribute, or share the bundle or its contents</li>
          <li>Claim the assets as your own original creation for resale</li>
          <li>Share your download link or access with others</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">4. Pricing and Payment</h2>
        <p>
          All prices are listed in Indian Rupees (INR). Payments are processed securely
          through Razorpay. The displayed price includes all applicable taxes unless stated
          otherwise.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">5. Delivery</h2>
        <p>
          Upon successful payment, you will receive your product via:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>An instant download link displayed on the success page</li>
          <li>A confirmation email containing the download link</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
        <p>
          All content, including but not limited to templates, designs, text, graphics, and
          other materials on this website, is the property of Designora and is protected by
          applicable copyright laws.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
        <p>
          Designora shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with the use of our products
          or services.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on
          this page with an updated date. Continued use of the website constitutes acceptance
          of modified terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">9. Contact Us</h2>
        <p>
          For questions about these Terms of Service, contact us at{" "}
          <a href="mailto:support@designora.com" className="text-primary hover:underline">
            support@designora.com
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
