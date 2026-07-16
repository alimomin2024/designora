import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Contact Us - Designoraa",
  description: "Contact Designoraa - Interior Designer Mastery Bundle",
};

export default function ContactUs() {
  return (
    <LegalLayout title="Contact Us">
      <p className="text-foreground/70">
        <strong className="text-white">Last updated:</strong> 26-02-2026
      </p>

      <p>You may contact us using the information below:</p>

      <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
        <div>
          <h3 className="text-white font-semibold text-sm mb-1">Merchant Legal Entity Name</h3>
          <p>MOHAMMAD ALI FAROOQUE MOMIN</p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-1">Registered Address</h3>
          <p>
            1725/22 Ayyub Doodh Complex, Near Anand Takies, Gaibi Nagar,
            <br />Bhiwandi, Maharashtra, PIN: 421302
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-1">Operational Address</h3>
          <p>
            1725/22 Ayyub Doodh Complex, Near Anand Takies, Gaibi Nagar,
            <br />Bhiwandi, Maharashtra, PIN: 421302
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-1">Telephone</h3>
          <p>
            <a href="tel:+917977398081" className="text-primary hover:text-gold transition-colors">
              +91 7977398081
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-1">E-Mail</h3>
          <p>
            <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:text-gold transition-colors">
              alimomin2424@gmail.com
            </a>
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
