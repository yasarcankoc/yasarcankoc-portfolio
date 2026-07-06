import Reveal from "./Reveal";

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
      className="max-w-4xl mx-auto px-6 py-20 border-t border-graphite/10 dark:border-paper/10"
    >
      <Reveal>
        <p className="font-mono text-xs text-signal mb-3">03 — yetenekler</p>
        <h2 className="font-display font-medium text-2xl md:text-3xl mb-10">
          Kullandığım araçlar
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div>
              <p className="font-mono text-xs text-mist dark:text-fog mb-3">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-graphite/15 dark:border-paper/15"
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
