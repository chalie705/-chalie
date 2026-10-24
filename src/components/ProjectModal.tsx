import { useEffect, useRef, type ReactNode } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { profile } from '../data/portfolio';

function Block({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-6">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;

    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [onClose]);

  // Fallbacks for unified property access
  const projectName = project.title ?? project.name ?? 'Project Details';
  const projectStatus = project.status ?? 'Academic project';
  const projectOverview = project.fullDescription ?? project.problem ?? project.shortDescription ?? '';
  const projectObjectives = project.objectives ?? [];
  const projectContributions = project.contributions ?? [];
  const projectFeatures = project.features ?? [];
  const projectStack = project.stack ?? project.technologies ?? [];
  const projectChallenges = project.challenges ?? 'Maintained clean architecture and modular design principles throughout implementation.';
  const projectLessons = project.lessons ?? 'Gained practical experience in structured problem-solving and full-stack integration.';
  const projectRepo = project.githubUrl ?? project.repo ?? profile.github;
  const projectDemo = project.liveDemoUrl ?? project.demo;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="card max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-white">
              {projectName}
            </h2>

            <p className="mt-1 text-sm text-muted">
              {project.category} · {projectStatus}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="btn btn-ghost !px-3"
          >
            <X size={18} />
          </button>
        </div>

        <Block title="Overview">{projectOverview}</Block>

        {projectObjectives.length > 0 && (
          <Block title="Objectives">
            <List items={projectObjectives} />
          </Block>
        )}

        {projectContributions.length > 0 && (
          <Block title="My contributions">
            <List items={projectContributions} />
          </Block>
        )}

        {projectFeatures.length > 0 && (
          <Block title="Key features">
            <List items={projectFeatures} />
          </Block>
        )}

        {projectStack.length > 0 && (
          <Block title="Technologies">
            <div className="flex flex-wrap gap-2">
              {projectStack.map((technology: string) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>
          </Block>
        )}

        <Block title="Challenges">{projectChallenges}</Block>

        <Block title="Lessons learned">{projectLessons}</Block>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="btn btn-ghost"
            href={projectRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            {project.repo || project.githubUrl ? 'Source code' : 'GitHub profile'}
          </a>

          {projectDemo && (
            <a
              className="btn btn-primary"
              href={projectDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}