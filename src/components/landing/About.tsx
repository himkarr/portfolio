import { about } from "@/config/about";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <p className="text-sm font-medium text-zinc-400">{about.eyebrow}</p>
      <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {about.heading}
        </h2>
        <div className="mt-4">
          <p className="leading-7 text-zinc-400">{about.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of focus">
            {about.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
