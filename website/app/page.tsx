import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProductShowcase from "@/components/ProductShowcase";
import BonusSection from "@/components/BonusSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PainPoints />
      <ProductShowcase />
      <BonusSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
