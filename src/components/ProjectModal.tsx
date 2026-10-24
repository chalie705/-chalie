import { useEffect, useRef } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { profile } from '../data/portfolio'

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-6">
    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">{title}</h3>
    <div className="text-sm leading-relaxed text-muted">{children}</div>
  </section>
)
const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-1 pl-5">{items.map((i) => <li key={i}>{i}</li>)}</ul>
)

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6" onClick={onClose}>
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
          <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="btn btn-ghost !px-3">
            <X size={18} />
          </button>
        </div>

        <Block title="Overview">{project.problem}</Block>
        <Block title="Objectives"><List items={project.objectives} /></Block>
        <Block title="My contributions"><List items={project.contributions} /></Block>
        <Block title="Key features"><List items={project.features} /></Block>
        <Block title="Technologies">
          <div className="flex flex-wrap gap-2">{project.stack.map((s) => <span key={s} className="tag">{s}</span>)}</div>
        </Block>
        <Block title="Challenges">{project.challenges}</Block>
        <Block title="Lessons learned">{project.lessons}</Block>

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