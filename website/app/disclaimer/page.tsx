import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Disclaimer - Designora",
  description: "Disclaimer for Designora - Interior Designer Mastery Bundle",
};

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer">
      <p className="text-foreground/70">
        <strong className="text-white">Last Updated:</strong> February 2026
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">General Disclaimer</h2>
        <p>
          The information and materials provided on the Designora website and within the
          Interior Designer Mastery Bundle are for informational and professional development
          purposes only.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">No Guarantee of Results</h2>
        <p>
          While our templates, assets, and resources are designed to help interior designers
          and architects improve their workflow and professionalism, we make no guarantees
          about specific results, income, or business outcomes from using our products.
          Individual results may vary.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Professional Advice</h2>
        <p>
          The legal document templates included in the bundle (contracts, agreements, etc.)
          are provided as general templates only. They should not be considered legal advice.
          We recommend consulting with a qualified legal professional before using any legal
          documents in your business.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Third-Party Tools</h2>
        <p>
          Our templates and assets are designed to work with third-party tools such as Canva,
          AutoCAD, SketchUp, Lumion, 3DS Max, Microsoft Word, and PowerPoint. We are not
          affiliated with or endorsed by any of these companies. Compatibility and
          availability of these tools are subject to their respective terms and conditions.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Accuracy of Information</h2>
        <p>
          While we strive to provide accurate and up-to-date information, we make no
          representations or warranties of any kind, express or implied, about the
          completeness, accuracy, reliability, or suitability of the information contained on
          our website or in our products.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">External Links</h2>
        <p>
          Our website may contain links to external websites. We have no control over the
          content and availability of those sites. The inclusion of any links does not
          necessarily imply a recommendation or endorsement of the views expressed within them.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, please contact us at{" "}
          <a href="mailto:support@designora.com" className="text-primary hover:underline">
            support@designora.com
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
