import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projeler"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-graphite/10 dark:border-paper/10"
    >
      <Reveal>
        <p className="font-mono text-xs text-signal mb-3">02 — projeler</p>
        <h2 className="font-display font-medium text-2xl md:text-3xl mb-10">
          Üretimde çalışan sistemler
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
