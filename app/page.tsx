import { Navbar } from "@/app/components/sections/Navbar";
import { Hero } from "@/app/components/sections/Hero";
import { ClientMarquee } from "@/app/components/sections/ClientMarquee";
import { Stats } from "@/app/components/sections/Stats";
import { Services } from "@/app/components/sections/Services";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { Philosophy } from "@/app/components/sections/Philosophy";
import { Process } from "@/app/components/sections/Process";
import { TechStack } from "@/app/components/sections/TechStack";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { Contact } from "@/app/components/sections/Contact";
import { CTA } from "@/app/components/sections/CTA";
import { Footer } from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-void text-silver">
      <Navbar />
      <Hero />
      <ClientMarquee />
      <Stats />
      <Services />
      <Portfolio />
      <Philosophy />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
