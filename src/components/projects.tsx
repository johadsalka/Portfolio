import { site, type Project } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Projects() {
  const projects: Project[] = site.projects;

  return (
    <Section id="projects" eyebrow="03 / projects" title="Things I have built">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.title}
            className={cn(project.featured && "md:col-span-2")}
          >
            <Reveal delay={(index % 2) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-subtle">
                    {project.year}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {project.impact.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-5 pt-6 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
