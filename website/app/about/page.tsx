import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "About Us - Designoraa",
  description: "About Designoraa - Interior Designer Mastery Bundle",
};

export default function AboutUs() {
  return (
    <LegalLayout title="About Us">
      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Who We Are</h2>
        <p>
          <strong className="text-white">Designoraa</strong> is a digital product platform created to empower interior designers
          and architects across India. We provide premium, ready-to-use design resources that help
          professionals save time, impress clients, and run their businesses more efficiently.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Our Product</h2>
        <p>
          The <strong className="text-white">Interior Designer Mastery Bundle</strong> is our flagship product — a comprehensive
          collection of <strong className="text-white">5,000+ premium digital assets</strong> priced at just <strong className="text-white">₹299/-</strong>.
        </p>
        <p className="mt-3">The bundle includes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>10,000+ Design Assets, Creative Blocks &amp; Mood Board Elements</li>
          <li>50+ Premium Presentation &amp; Proposal Templates</li>
          <li>740+ Procreate Design Assets, SketchUp Files, 2000+ Furniture Blocks</li>
          <li>Complete Pricing Sheets, Rate Cards &amp; Editable Infographics</li>
          <li>Full Interior Design Workflow Pack: briefs, checklists, planners, trackers</li>
          <li>15+ Bonus Editable Bundles including brand kits and social media templates</li>
        </ul>
        <p className="mt-3"><strong className="text-white">Bonus Content (included free):</strong></p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>50+ Premium Fonts (valued at ₹4,000)</li>
          <li>30+ Layout &amp; Title Blocks (valued at ₹3,500)</li>
          <li>200+ Lumion Blocks (valued at ₹5,000)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
        <p>
          We believe every interior designer deserves access to professional-grade resources
          without spending thousands on individual templates and assets. Our mission is to provide
          an all-in-one toolkit that transforms how designers work — from client presentations
          to project management.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Business Information</h2>
        <div className="bg-surface border border-border rounded-xl p-6 space-y-3 mt-3">
          <p><strong className="text-white">Legal Entity Name:</strong> MOHAMMAD ALI FAROOQUE MOMIN</p>
          <p><strong className="text-white">Trade Name:</strong> Designoraa</p>
          <p><strong className="text-white">Registered Address:</strong> 1725/22 Ayyub Doodh Complex, Near Anand Takies, Gaibi Nagar, Bhiwandi, Maharashtra, PIN: 421302</p>
          <p><strong className="text-white">Operational Address:</strong> 1725/22 Ayyub Doodh Complex, Near Anand Takies, Gaibi Nagar, Bhiwandi, Maharashtra, PIN: 421302</p>
          <p><strong className="text-white">Email:</strong>{" "}
            <a href="mailto:alimomin2424@gmail.com" className="text-primary hover:underline">alimomin2424@gmail.com</a>
          </p>
          <p><strong className="text-white">Phone:</strong>{" "}
            <a href="tel:+917977398081" className="text-primary hover:underline">+91 7977398081</a>
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Trusted by 7,500+ Designers</h2>
        <p>
          Interior designers and architects across India trust Designoraa for their professional
          design resource needs. Our bundle has helped thousands of professionals streamline
          their workflow and deliver polished results to clients.
        </p>
      </div>
    </LegalLayout>
  );
}
