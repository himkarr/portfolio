import Link from "next/link";

import {experiences} from "@/config/experience";
import {WorkExperience} from "@/components/experience/ExperienceItem";

const PREVIEW_COUNT = 2;

export default function Experience() {
  const preview = experiences.slice(0, PREVIEW_COUNT);

  return (
    <section id="experience">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-4">
          <WorkExperience experiences={preview} />
        </div>
        {experiences.length > 0 && (
          <div className="mt-4 flex justify-center">
            <Link
              href="/work"
              className="rounded-md border px-6 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Show all work experiences
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
