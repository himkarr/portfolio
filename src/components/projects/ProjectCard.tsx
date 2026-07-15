import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/config/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-2 pt-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        {project.href && (
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        )}
      </div>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {technology}
          </li>
        ))}
      </ul>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="group flex min-h-60 flex-col rounded-xl border p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="group flex min-h-60 flex-col rounded-xl border p-4">
      {content}
    </article>
  );
}