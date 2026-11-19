import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-subtle sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js, TypeScript, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
