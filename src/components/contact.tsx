import { site } from "@/data/site";
import { btnPrimary, btnSecondary } from "@/lib/ui";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 / contact" title="Let's talk">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {site.contactBlurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={btnPrimary}>
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
