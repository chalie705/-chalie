import { useEffect } from 'react';
import { X, Github, ExternalLink, FolderGit2 } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] shadow-2xl animate-fade-in">
        {/* Header image */}
        <div className="relative aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-[var(--color-secondary)]">
              <FolderGit2 size={48} className="opacity-40" />
              <span className="text-sm">{project.imagePlaceholder}</span>
              <span className="text-xs opacity-60">Screenshot placeholder</span>
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">
              {project.category}
            </span>
            <h2
              id="project-modal-title"
              className="text-2xl font-bold text-[var(--color-text)] mt-1"
            >
              {project.title}
            </h2>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              Overview
            </h3>
            <p className="text-[var(--color-secondary)] leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              Problem Addressed
            </h3>
            <p className="text-[var(--color-secondary)] leading-relaxed text-sm sm:text-base">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              Main Features
            </h3>
            <ul className="space-y-1.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-[var(--color-secondary)]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 rounded-lg transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-secondary)] bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg">
                <Github size={16} />
                Repository coming soon
              </span>
            )}
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
