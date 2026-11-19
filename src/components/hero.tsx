import { site } from "@/data/site";
import { btnPrimary, btnSecondary, iconLink } from "@/lib/ui";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="hero-glow absolute inset-0 -z-10" />
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-36 sm:pb-28 sm:pt-44">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {site.availability}
        </p>

        <h1
          className="animate-fade-up mt-6 text-4xl font-semibold tracking-tight sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {site.name}
        </h1>

        <p
          className="animate-fade-up mt-3 font-mono text-lg text-accent"
          style={{ animationDelay: "140ms" }}
        >
          {site.role}
        </p>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "200ms" }}
        >
          {site.headline}
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "260ms" }}
        >
          <a href="#projects" className={btnPrimary}>
            View projects
          </a>
          <a href={`mailto:${site.email}`} className={btnSecondary}>
            <MailIcon className="h-4 w-4" />
            Get in touch
          </a>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              <DownloadIcon className="h-4 w-4" />
              Resume
            </a>
          )}
        </div>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 text-sm text-muted"
          style={{ animationDelay: "320ms" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-4 w-4" />
            {site.location}
          </span>
          <span aria-hidden className="h-4 w-px bg-border" />
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={iconLink}
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={iconLink}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
