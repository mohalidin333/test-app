import HeroSection from "./main/components/HeroSection";
import FooterSection from "./main/components/FooterSection";

export default function Main() {
  return (
    <main className="min-h-[100vh] overflow-y-auto bg-sidebar">
      <HeroSection />
      <FooterSection />
    </main>
  );
}
