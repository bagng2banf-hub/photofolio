import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
