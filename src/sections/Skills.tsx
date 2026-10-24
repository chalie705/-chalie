import { Check, Database, Monitor, Settings } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

const icons: Record<string, React.ElementType> = {
  monitor: Monitor,
  database: Database,
  settings: Settings,
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon] ?? Monitor
          return (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="card h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{g.title}</h3>
                {g.description && (
                  <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-muted">
                    {g.description}
                  </p>
                )}

                <ul className="mt-5 space-y-3">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-3 rounded-lg border border-line bg-bg/60 px-4 py-3 text-sm font-medium"
                    >
                      {item}
                      <Check size={16} className="shrink-0 text-emerald-500" aria-hidden />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}