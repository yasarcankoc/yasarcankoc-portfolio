import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projeler"
      className="max-w-4xl mx-auto px-6 py-24 border-t border-graphite/8 dark:border-paper/8"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Projeler"
          title="Üretimde çalışan sistemler"
          lead="Dördü de canlı ortamda çalışıyor ve her gün gerçek işlerde kullanılıyor."
        />
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
