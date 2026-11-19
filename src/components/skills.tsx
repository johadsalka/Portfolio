import { site, type SkillGroup } from "@/data/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Skills() {
  const groups: SkillGroup[] = site.skills;

  return (
    <Section id="skills" eyebrow="04 / skills" title="Tools I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <Reveal key={group.name} delay={(index % 3) * 0.06}>
            <div className="h-full rounded-xl border border-border bg-card p-5">
              <h3 className="font-mono text-sm text-accent">{group.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
