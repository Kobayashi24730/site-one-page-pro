import { Navbar } from "@/components/Navbar";
import {Hero} from "@/components/sections/Hero";
import {About} from "@/components/sections/About";
import {Proposals} from "@/components/sections/Proposals";
import {Projects} from "@/components/sections/Projects";
import {Gallery} from "@/components/sections/Gallery";
import {Testimonials} from "@/components/sections/Testimonials";
import {Contact} from "@/components/sections/Contact";
import {Footer} from "@/components/Footer";
import {WhatsAppButton} from "@/components/WhatsAppButton";

export function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Proposals />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
