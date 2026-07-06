import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Backend",
    items: ["Python", "Django", "Django REST Framework", "PostgreSQL"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Bootstrap"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Amazon Web Services", "Hetzner", "Nginx"],
  },
  {
    title: "Diğer",
    items: ["Git", "REST API entegrasyonu", "S3 & CDN", "JWT / Auth", "Cloudflare"],
  },
];

export default function Skills() {
  return (
    <section
      id="yetenekler"
      className="max-w-4xl mx-auto px-6 py-24 border-t border-graphite/8 dark:border-paper/8"
    >
      <Reveal>
        <SectionHeading eyebrow="Yetenekler" title="Kullandığım araçlar" />
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-5">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl bg-paper-soft dark:bg-ink-soft ring-1 ring-graphite/10 dark:ring-paper/10 p-6 transition-colors hover:ring-signal/30">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-mist dark:text-fog mb-4">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-graphite/[0.05] dark:bg-paper/[0.07]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
