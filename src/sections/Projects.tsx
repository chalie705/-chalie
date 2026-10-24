import { useState } from 'react'
import { ArrowUpRight, Check, ExternalLink, Folder, Github } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectModal from '../components/ProjectModal'
import { categories, profile, projects, type Project } from '../data/portfolio'

const real = (s: string) => !s.startsWith('TODO')

function badgeText(p: Project) {
  const tech = p.stack.slice(0, 2).join(' & ')
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
          const tags = p.stack.filter(real)
          const features = p.features.filter(real).slice(0, 3)
          return (
            <Reveal key={p.slug}>
              <article className="card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/50 transition duration-300 hover:-translate-y-1 hover:border-accent">
                {/* Frame container matching screenshot style */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100 p-4 dark:bg-slate-900/60">
                  <span className="absolute left-4 top-4 z-10 rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur">
                    {badgeText(p)}
                  </span>
                  
                  {p.image ? (
                    <div className="h-full w-full overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950 shadow-lg transition duration-500 group-hover:scale-105">
                      <img
                        src={p.image}
                        alt={`${p.name} screenshot`}
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
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>

                  {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((s) => (
                        <span key={s} className="tag !border-accent/30 !bg-accent/10 !text-accent">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {features.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden /> {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto flex items-center gap-2 pt-6">
                    <button className="btn btn-primary flex-1 !py-2" onClick={() => setSelected(p)}>
                      View Project <ArrowUpRight size={14} />
                    </button>
                    <a
                      className="btn btn-ghost !px-3 !py-2"
                      href={p.repo ?? profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                    {p.demo && (
                      <a
                        className="btn btn-ghost !px-3 !py-2"
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} live demo`}
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