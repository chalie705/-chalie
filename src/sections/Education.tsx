import { GraduationCap, BookOpen, Cpu } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-5 py-20">
      <SectionHeading eyebrow="Education" title="Education and learning" />

      <div className="relative space-y-6 border-l-2 border-line/60 pl-6 md:pl-8">
        {timeline.map((t, index) => (
          <div key={t.title} className="relative">
            {/* Timeline bullet indicator */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg" />
            
            <Reveal>
              <div className="card rounded-2xl border border-line bg-card/40 p-6 transition duration-300 hover:border-accent/60">
                <span className="inline-block rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {t.type}
                </span>
                <h3 className="mt-3 text-xl font-bold text-fg">{t.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{t.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.note}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}