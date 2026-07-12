import {siteConfig} from "@/config/site";
import {socialLinks} from "@/config/social";
import {navbarConfig} from "@/config/Navbar";
import Image from "next/image";
import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import Moon from "@/components/svgs/Moon";
import X from "@/components/svgs/X";

export default function Hero() {
  return (
    <section id="hero">
      <header className="flex items-center justify-between">
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-5 text-sm font-medium text-zinc-400 sm:gap-7"
        >
          {navbarConfig.navItems.map((item) => (
            <a
              key={item.href}
              className="transition-colors hover:text-zinc-100"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="transition-colors hover:text-zinc-100"
            href={siteConfig.resume}
          >
            Resume
          </a>
        </nav>
        <span
          aria-label="Dark theme"
          className="rounded-lg border border-zinc-700 p-2 text-zinc-300"
        >
          <Moon className="size-4" />
        </span>
      </header>

      <div className="pt-14 sm:pt-16">
        <div className="flex items-center gap-5">
          <div className="shrink-0">
            <Image
              src="/assets/logo.avif"
              alt={siteConfig.fullName}
              width={96}
              height={96}
              className="rounded-full ring-4 ring-zinc-800"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {siteConfig.fullName}
            </h1>
            <p className="mt-1 text-zinc-400">
              {siteConfig.title} · {siteConfig.subtitle}
            </p>
            <a
              className="mt-1 inline-block text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <p className="mt-7 max-w-2xl leading-7 text-zinc-400">
          {siteConfig.description}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <Github className="size-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <span className="block [&_svg]:size-5">
              <LinkedIn />
            </span>
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X / Twitter"
            className="text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <span className="block [&_svg]:size-5">
              <X />
            </span>
          </a>
          <a
            href={socialLinks.email}
            aria-label="Email"
            className="text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <span className="block [&_svg]:size-5">
              <Mail />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
