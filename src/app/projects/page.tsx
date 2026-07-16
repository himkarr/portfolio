import {Metadata} from "next";
import Container from "@/components/common/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import {projects} from "@/config/projects";
import {siteConfig} from "@/config/site";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.fullName}`,
  description: `All of ${siteConfig.fullName}'s projects, in one place.`,
};

export default function ProjectsPage() {
  return (
    <Container className="pt-8 pb-10">
      <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
        Projects
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Everything I&apos;ve built, from security tooling to AI experiments and
        full-stack apps.
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Container>
  );
}
