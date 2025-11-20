import { Hero } from "@/app/components/sections/Hero";
import { Services } from "@/app/components/sections/Services";
import { Process } from "@/app/components/sections/Process";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { TechStack } from "@/app/components/sections/TechStack";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { CTA } from "@/app/components/sections/CTA";
import { Footer } from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-void text-silver">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <TechStack />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
