import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group h-full flex flex-col rounded-2xl overflow-hidden bg-paper-soft dark:bg-ink-soft ring-1 ring-graphite/10 dark:ring-paper/10 transition-all duration-300 hover:-translate-y-1 hover:ring-signal/40 hover:shadow-[0_24px_60px_-24px_rgb(74_95_255/0.35)]">
      <div className="relative aspect-[16/10] bg-graphite/5 dark:bg-paper/5 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} ekran görüntüsü`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        {/* Durum rozeti — görselin üstünde, buzlu cam zeminli */}
        <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-ink/70 backdrop-blur px-2.5 py-1 font-mono text-[11px] text-paper">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.live ? "bg-wire animate-pulse-dot" : "bg-fog"
            }`}
          />
          {project.live ? "canlı" : "geliştiriliyor"}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <h3 className="font-display font-medium text-xl">{project.name}</h3>
          <span className="font-mono text-xs text-mist dark:text-fog shrink-0">
            {project.domain}
          </span>
        </div>
        <p className="text-sm text-signal mb-4">{project.category}</p>
        <p className="text-sm leading-relaxed text-mist dark:text-fog mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-graphite/[0.05] dark:bg-paper/[0.07] text-mist dark:text-fog"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-graphite/8 dark:border-paper/8">
          <div className="flex gap-6">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-base font-medium">
                  {stat.value}
                </p>
                <p className="text-[11px] text-mist dark:text-fog">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-signal hover:gap-2 transition-all"
            >
              Siteyi gör <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
