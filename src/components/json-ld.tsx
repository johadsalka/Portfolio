import { site } from "@/data/site";
import { siteUrl } from "@/lib/utils";

/** Structured data so search engines understand this is a person's portfolio. */
export function JsonLd() {
  const school = site.education[0]?.school;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: siteUrl,
    sameAs: [site.socials.github, site.socials.linkedin],
    ...(school ? { alumniOf: { "@type": "CollegeOrUniversity", name: school } } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
