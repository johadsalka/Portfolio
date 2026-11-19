import { site, type ExperienceEntry } from "@/data/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Experience() {
  const entries: ExperienceEntry[] = site.experience;

  return (
    <Section id="experience" eyebrow="02 / experience" title="Where I have worked">
      <ol className="relative space-y-12 border-l border-border pl-8">
        {entries.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
            />
            <Reveal>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {entry.role}{" "}
                  <span className="text-muted">at {entry.company}</span>
                </h3>
                <p className="font-mono text-xs text-subtle">{entry.period}</p>
              </div>
              <p className="mt-1 text-sm text-subtle">{entry.location}</p>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {entry.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
