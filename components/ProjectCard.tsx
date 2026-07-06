import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-graphite/10 dark:border-paper/10 rounded-2xl overflow-hidden hover:border-signal/40 transition-colors">
      <div className="aspect-[16/10] bg-graphite/5 dark:bg-paper/5 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} ekran görüntüsü`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs flex items-center gap-1.5 text-mist dark:text-fog">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.live ? "bg-wire animate-pulse-dot" : "bg-mist"
              }`}
            />
            {project.live ? "canlı" : "geliştiriliyor"}
          </span>
          <span className="font-mono text-xs text-mist dark:text-fog">
            {project.domain}
          </span>
        </div>

        <h3 className="font-display font-medium text-xl mb-1">{project.name}</h3>
        <p className="text-sm text-mist dark:text-fog mb-4">{project.category}</p>
        <p className="text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-1 rounded-full bg-graphite/5 dark:bg-paper/5 text-mist dark:text-fog"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-sm font-medium">{stat.value}</p>
                <p className="text-[11px] text-mist dark:text-fog">{stat.label}</p>
              </div>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium hover:text-signal transition-colors"
            >
              Siteyi gör <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
