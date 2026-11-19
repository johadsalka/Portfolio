import { site, type EducationEntry } from "@/data/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Education() {
  const entries: EducationEntry[] = site.education;

  return (
    <Section id="education" eyebrow="05 / education" title="Education">
      <div className="space-y-6">
        {entries.map((entry) => (
          <Reveal key={`${entry.school}-${entry.degree}`}>
            <article className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {entry.school}
                </h3>
                <p className="font-mono text-xs text-subtle">{entry.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {entry.degree}
                {entry.gpa ? ` · GPA ${entry.gpa}` : ""} · {entry.location}
              </p>

              {entry.details.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-subtle">
                Relevant coursework
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {entry.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
