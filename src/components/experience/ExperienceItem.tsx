"use client";

import {useState} from "react";
import {Briefcase, ChevronDown} from "lucide-react";

import {cn} from "@/lib/utils";
import {Experience} from "@/config/experience";

export default function ExperienceItem({experience}: {experience: Experience}) {
  const [open, setOpen] = useState(false);
  const isCurrent = experience.period.toLowerCase().includes("present");

  return (
    <div className="relative pl-9">
      <span
        aria-hidden
        className="absolute top-7 bottom-0 left-3 w-px bg-border"
      />

      <div className="absolute top-0 left-0 flex size-6 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground">
        <Briefcase className="size-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-2 text-left"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{experience.role}</h3>
            {isCurrent && (
              <span className="relative flex size-2" aria-label="Current role">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-sky-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-sky-500" />
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {experience.organization}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {experience.period} · {experience.location}
          </p>
        </div>

        <ChevronDown
          className={cn(
            "mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-all duration-200 ease-out",
          open
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            {experience.description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {experience.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
