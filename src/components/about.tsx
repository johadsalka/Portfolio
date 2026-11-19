import { site } from "@/data/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" eyebrow="01 / about" title="About me">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted md:col-span-3">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
            {site.highlights.map((item) => (
              <li
                key={item.label}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
