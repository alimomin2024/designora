import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms & Conditions - Designoraa",
  description: "Terms & Conditions for Designoraa - Interior Designer Mastery Bundle",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms &amp; Conditions">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> 26 February 2026
      </p>

      <p>
        This website is operated by <strong className="text-white">MOHAMMAD ALI FAROOQUE MOMIN</strong>,
        trading as <strong className="text-white">Designoraa</strong>.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Designoraa website (designoraa.in) and purchasing our products, you agree
          to be bound by these Terms &amp; Conditions. If you do not agree with any part of these
          terms, please do not use our website or purchase our products.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">2. Business Information</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong className="text-white">Legal Entity Name:</strong> MOHAMMAD ALI FAROOQUE MOMIN</li>
          <li><strong className="text-white">Trade Name:</strong> Designoraa</li>
          <li><strong className="text-white">Registered Address:</strong> 1725/22 Ayyub Doodh Complex, Near Anand Takies, Gaibi Nagar, Bhiwandi, Maharashtra, PIN: 421302</li>
          <li><strong className="text-white">Email:</strong> alimomin2424@gmail.com</li>
          <li><strong className="text-white">Phone:</strong> +91 7977398081</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">3. Products and Services</h2>
        <p>
          Designoraa sells digital products, specifically the <strong className="text-white">Interior Designer Mastery Bundle</strong> priced
          at <strong className="text-white">₹299/-</strong> (Indian Rupees). The bundle includes 5,000+ templates, design assets,
          legal documents, mood boards, presentation templates, Procreate assets, SketchUp files,
          furniture blocks, pricing sheets, rate cards, infographics, workflow packs, and bonus
          content including premium fonts, layout blocks, and Lumion blocks.
          All products are delivered digitally via instant download link.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">4. License and Usage</h2>
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
        <h2 className="text-xl font-semibold text-white mb-3">5. Pricing and Payment</h2>
        <p>
          All prices are listed in <strong className="text-white">Indian Rupees (INR)</strong>. The Interior Designer Mastery Bundle
          is priced at <strong className="text-white">₹299/-</strong> (inclusive of all taxes). Payments are processed securely
          via UPI (Unified Payments Interface). We accept payments through GPay, PhonePe, Paytm,
          and all other UPI-enabled applications.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">6. Delivery</h2>
        <p>
          This is a <strong className="text-white">digital product</strong>. Upon successful payment verification, you will receive your product:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>An instant download link displayed on the success page</li>
          <li>A confirmation email containing the download link sent within <strong className="text-white">5-10 minutes</strong> of payment verification</li>
        </ul>
        <p className="mt-3">
          No physical product is shipped. Delivery is <strong className="text-white">instant and digital</strong>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
        <p>
          All content, including but not limited to templates, designs, text, graphics, and
          other materials on this website, is the property of Designoraa and is protected by
          applicable copyright laws.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
        <p>
          Designoraa shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with the use of our products
          or services.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of India.
          Any disputes arising under these terms shall be subject to the exclusive jurisdiction
          of the courts in Bhiwandi, Maharashtra, India.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on
          this page with an updated date. Continued use of the website constitutes acceptance
          of modified terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
        <p>
          For questions about these Terms &amp; Conditions, contact us at{" "}
          <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">
            alimomin2424@gmail.com
          </a>{" "}
          or call <a href="tel:+917977398081" className="text-primary hover:underline">+91 7977398081</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
