import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import Experience from "@/components/landing/Experience";
import Certifications from "@/components/landing/Certifications";
import Contact from "@/components/landing/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-zinc-100">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
