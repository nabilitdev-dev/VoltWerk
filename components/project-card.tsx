import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  /** true für Karten oberhalb des Folds (LCP-Optimierung). */
  priority?: boolean;
}

/** Projektkarte für das Referenzen-Grid. */
export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <Badge variant="volt" className="absolute left-4 top-4">
          {project.categoryLabel}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel">
          <MapPin aria-hidden className="h-3.5 w-3.5 text-volt-700" />
          {project.location}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-950">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-steel">{project.description}</p>
      </div>
    </article>
  );
}
