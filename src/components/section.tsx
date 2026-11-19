import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24"
    >
      <Reveal>
        <p className="font-mono text-sm text-accent">{eyebrow}</p>
        <h2
          id={`${id}-title`}
          className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
