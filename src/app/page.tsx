import Container from "@/components/common/Container";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import Experience from "@/components/landing/Experience";
import Certifications from "@/components/landing/Certifications";
import Contact from "@/components/landing/Contact";

export default function HomePage() {
  return (
    <Container className="py-16">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Certifications />
      <Contact />
    </Container>
  );
}
