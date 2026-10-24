import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      className="group flex flex-col rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/5"
    >
      {/* Image / Placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-[var(--color-secondary)]">
            <FolderGit2 size={40} className="opacity-50" />
            <span className="text-sm font-medium px-4 text-center">
              {project.imagePlaceholder}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-2">
          <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-secondary)] leading-relaxed mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-secondary)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-[var(--color-secondary)]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-[var(--color-border)]">
          <button
            onClick={() => onOpen(project)}
            className="flex-1 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors text-left"
          >
            View Details
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-background)] transition-colors"
              aria-label={`${project.title} GitHub repository`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-background)] transition-colors"
              aria-label={`${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
