import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(rgb(var(--line))_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Fourth-year student · open to internships
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">{profile.headline}</h1>
          <p className="mt-3 text-lg font-medium text-accent">{profile.name}</p>
          <p className="text-sm text-muted">{profile.role}</p>
          <p className="mt-5 max-w-xl text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View My Projects <ArrowRight size={16} /></a>
            <a href={profile.cv} download className="btn btn-ghost"><Download size={16} /> Download My CV</a>
            <a href="#contact" className="btn btn-ghost"><Mail size={16} /> Contact Me</a>
          </div>

          <div className="mt-6 flex gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-muted hover:text-fg"><Github /></a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-muted hover:text-fg"><Linkedin /></a>
            )}
          </div>
        </motion.div>

        {/* Profile Card Container with Bottom Stats */}
        <div className="card hidden overflow-hidden rounded-2xl border border-line bg-card/50 p-3 shadow-2xl lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-900/40">
            <img
              src={profile.avatar}
              alt="Portrait of Chalie Melkamu Wagnew"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 border-t border-line/50 pt-3 text-center text-xs">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">University</span>
              <span className="font-bold text-fg">{profile.university}</span>
            </div>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">Focus</span>
              <span className="font-bold text-fg">{profile.focus}</span>
            </div>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">Primary Stack</span>
              <span className="font-bold text-fg">{profile.primaryStack}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}