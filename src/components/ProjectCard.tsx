
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpen,
}: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group block w-full text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className="flex min-h-40 items-center justify-center bg-[var(--color-card)] p-8">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="max-h-48 w-full rounded-lg object-cover"
            />
          ) : (
            <div className="text-center">
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                {project.imagePlaceholder}
              </span>
            </div>
          )}
        </div>

        <div className="px-6 pt-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="tag">{project.category}</span>
            <span className="text-xs text-[var(--color-secondary)]">
              Academic project
            </span>
          </div>

          <h3 className="flex items-center justify-between gap-3 text-xl font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
            {project.title}
            <ArrowUpRight size={18} className="shrink-0" />
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
            {project.shortDescription}
          </p>
        </div>
      </button>

      <div className="mt-auto px-6 pb-6 pt-5">
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="tag">
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onOpen(project)}
          >
            View details
          </button>

          {project.githubUrl && (
            <a
              className="btn btn-ghost"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code`}
            >
              <Github size={16} />
              Source code
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              className="btn btn-ghost"
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
            >
              <ExternalLink size={16} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
