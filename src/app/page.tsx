import {
  Contact,
  FAQ,
  Features,
  Footer,
  Hero,
  Navbar,
  PWASection,
  SocialProof,
} from "@/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PWASection />
        <SocialProof />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
