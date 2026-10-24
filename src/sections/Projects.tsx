import { useState } from 'react'
import { ArrowUpRight, Check, ExternalLink, Folder, Github } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectModal from '../components/ProjectModal'
import { categories, profile, projects, type Project } from '../data/portfolio'

const real = (s: string) => !s.startsWith('TODO')

function badgeText(p: Project) {
  const stackList = p.stack ?? p.technologies ?? []
  const tech = stackList.slice(0, 2).join(' & ')
  return tech ? `${p.category} · ${tech}` : p.category
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const visible = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Projects" title="Things I've built" />

      <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`btn !rounded-full !py-2 ${filter === c ? 'btn-primary' : 'btn-ghost'}`}
          >
            {c === 'All' ? 'All Projects' : c}
          </button>
        ))}
      </div>

      {visible.length === 0 && <p className="text-center text-muted">No projects in this category yet.</p>}

      <div className="grid gap-8 md:grid-cols-2">
        {visible.map((p) => {
          const stackList = p.stack ?? p.technologies ?? []
          const tags = stackList.filter(real)
          const featuresList = p.features ?? []
          const features = featuresList.filter(real).slice(0, 3)
          const projectName = p.title ?? p.name ?? 'Project'
          const projectImage = p.imageUrl ?? p.image
          const projectRepo = p.githubUrl ?? p.repo ?? profile.github
          const projectDemo = p.liveDemoUrl ?? p.demo
          const projectSummary = p.shortDescription ?? p.summary ?? ''

          return (
            <Reveal key={p.id ?? p.slug}>
              <article className="card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/50 transition duration-300 hover:-translate-y-1 hover:border-accent">
                {/* Frame container */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100 p-4 dark:bg-slate-900/60">
                  <span className="absolute left-4 top-4 z-10 rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur">
                    {badgeText(p)}
                  </span>
                  
                  {projectImage ? (
                    <div className="h-full w-full overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950 shadow-lg transition duration-500 group-hover:scale-105">
                      <img
                        src={projectImage}
                        alt={`${projectName} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center text-accent" aria-hidden>
                      <Folder size={48} />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white">{projectName}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{projectSummary}</p>

                  {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((s: string) => (
                        <span key={s} className="tag !border-accent/30 !bg-accent/10 !text-accent">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {features.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {features.map((f: string) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden /> {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto flex items-center gap-2 pt-6">
                    <button type="button" className="btn btn-primary flex-1 !py-2" onClick={() => setSelected(p)}>
                      View Project <ArrowUpRight size={14} />
                    </button>
                    <a
                      className="btn btn-ghost !px-3 !py-2"
                      href={projectRepo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${projectName} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                    {projectDemo && (
                      <a
                        className="btn btn-ghost !px-3 !py-2"
                        href={projectDemo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${projectName} live demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}