import {Suspense} from "react";
import Container from "@/components/common/Container";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import Experience from "@/components/landing/Experience";
import Contact from "@/components/landing/Contact";
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/common/github-contributions";
import {getCachedContributions} from "@/lib/get-cached-contributions";
import {github} from "@/config/github";

export default function HomePage() {
  const contributions = getCachedContributions(github.username);

  return (
    <Container className="pt-6 pb-16 sm:pt-8">
      <div className="space-y-12 sm:space-y-14">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Suspense fallback={<GitHubContributionsFallback />}>
          <GitHubContributions
            contributions={contributions}
            githubProfileUrl={github.profileUrl}
          />
        </Suspense>
        <Contact />
      </div>
    </Container>
  );
}
