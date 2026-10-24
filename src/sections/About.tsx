import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="About" title="A student who learns by building" />

      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
          {/* Left Profile Card */}
          <div className="card h-fit overflow-hidden rounded-2xl border border-line bg-card/50 p-4 shadow-xl">
            <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-xl bg-slate-900/40">
              <img
                src={profile.avatar || '/me.webp'}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-4 border-b border-line/60 pb-4">
              <h3 className="text-xl font-bold text-fg">{profile.name}</h3>
              <p className="text-sm font-medium text-accent">Software Engineering Student</p>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-muted">Institution:</span>
                <span className="font-semibold text-fg">Injibara University</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Degree:</span>
                <span className="font-semibold text-fg">Undergraduate Student</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Specialization:</span>
                <span className="font-semibold text-fg">Full Stack Web Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Primary Languages:</span>
                <span className="font-semibold text-fg">TypeScript, JavaScript, PHP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Availability:</span>
                <span className="font-semibold text-emerald-400">Internships (2026)</span>
              </div>
            </div>
          </div>

          {/* Right Content & Philosophy Cards */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted">
              I am an undergraduate student in Software Engineering at Injibara University. My technical journey is driven by curiosity, rigorous fundamentals, and an eagerness to build practical applications that streamline organizational tasks.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Rather than stopping at academic theory, I translate software engineering principles into usable products. My focus spans designing accessible frontend interfaces, constructing robust PHP backend architectures, and modeling efficient MySQL database schemas.
            </p>

            {/* 4 Core Pillars Grid */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="card rounded-xl border border-line/80 bg-card/40 p-5">
                <h4 className="font-bold text-fg">1. Practical Learning</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Learning by engineering complete, working prototypes—from database schema design to responsive client-side interactions.
                </p>
              </div>

              <div className="card rounded-xl border border-line/80 bg-card/40 p-5">
                <h4 className="font-bold text-fg">2. Maintainable Code</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Structuring code with clear modular boundaries, strict TypeScript typings, semantic HTML, and organized database queries.
                </p>
              </div>

              <div className="card rounded-xl border border-line/80 bg-card/40 p-5">
                <h4 className="font-bold text-fg">3. Database Integrity</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Architecting normalized MySQL relational databases with strict constraints, foreign-key relationships, and indexes.
                </p>
              </div>

              <div className="card rounded-xl border border-line/80 bg-card/40 p-5">
                <h4 className="font-bold text-fg">4. Real-World Usability</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Designing interfaces that solve operational friction for administrative teams, clinics, and academic departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}