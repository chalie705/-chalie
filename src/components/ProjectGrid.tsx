import { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import type { Project } from '../types/project';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project: Project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto max-w-2xl text-[var(--color-secondary)]">
            Practical applications I’ve built to apply software engineering
            concepts and solve real organizational needs. Details and
            repositories will be updated as projects mature.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category: string) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20'
                  : 'border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-secondary)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-text)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-[var(--color-secondary)]">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Only render the modal when a project is selected */}
      {selectedProject !== null && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}