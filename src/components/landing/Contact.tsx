import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <p className="text-sm font-medium text-zinc-400">Get in touch</p>
      <div className="mt-3 flex flex-col justify-between gap-6 border-t border-zinc-800 pt-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s build something thoughtful.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-zinc-400">
            Have a project, opportunity, or security problem to discuss? I&apos;d
            be glad to hear from you.
          </p>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="shrink-0 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
