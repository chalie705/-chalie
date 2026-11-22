import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'
import { profile, type Project } from '../data/portfolio'

// Placeholder lines start with "TODO", so they are hidden from visitors.
const real = (s: string) => !s.startsWith('TODO')

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">{title}</h3>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  )
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  const objectives = project.objectives.filter(real)
  const contributions = project.contributions.filter(real)
  const features = project.features.filter(real)
  const stack = project.stack.filter(real)

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
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold">{project.name}</h2>
            <p className="mt-1 text-sm text-muted">{project.category} · {project.status}</p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close project details"
            className="btn btn-ghost !px-3"
          >
            <X size={18} />
          </button>
        </div>

        <Block title="Overview">{project.problem}</Block>
        {objectives.length > 0 && <Block title="Objectives"><List items={objectives} /></Block>}
        {contributions.length > 0 && <Block title="My contributions"><List items={contributions} /></Block>}
        {features.length > 0 && <Block title="Key features"><List items={features} /></Block>}
        {stack.length > 0 && (
          <Block title="Technologies">
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </Block>
        )}
        {real(project.challenges) && <Block title="Challenges">{project.challenges}</Block>}
        {real(project.lessons) && <Block title="Lessons learned">{project.lessons}</Block>}

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-ghost" href={project.repo ?? profile.github} target="_blank" rel="noreferrer">
            <Github size={16} /> {project.repo ? 'Source code' : 'GitHub profile'}
          </a>
          {project.demo && (
            <a className="btn btn-primary" href={project.demo} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}