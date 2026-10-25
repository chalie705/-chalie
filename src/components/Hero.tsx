import { Github, Linkedin, ArrowDown, Download } from 'lucide-react';
import { requestCvDownload } from '../lib/downloadCv';

const techBadges = ['React', 'TypeScript', 'Java', 'PHP', 'MySQL', 'PostgreSQL'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Mobile profile photo */}
            <div className="flex lg:hidden justify-center mb-2">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-[var(--color-card)] shadow-xl ring-2 ring-[var(--color-primary)]/30">
                  <img
                    src="/images/profile.png"
                    alt="Chalie Melkamu Wagnew"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-sm text-[var(--color-secondary)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to internship opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-tight">
              Chalie Melkamu{' '}
              <span className="text-[var(--color-primary)]">Wagnew</span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-secondary)] font-medium">
              Fourth-Year Software Engineering Student
            </p>

            <p className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] leading-snug">
              “Building Practical Software Solutions, One Project at a Time.”
            </p>

            <p className="text-[var(--color-secondary)] leading-relaxed max-w-xl">
              I’m a Software Engineering student at Injibara University passionate about
              web development, database systems, and solving real-world problems through
              technology. I’m looking for an internship where I can learn from experienced
              developers, contribute to meaningful projects, and grow my engineering skills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 rounded-lg transition-all shadow-lg shadow-[var(--color-primary)]/20"
              >
                View My Projects
                <ArrowDown size={16} />
              </a>
              <button
                type="button"
                onClick={requestCvDownload}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--color-text)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-lg transition-all"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/chalie705"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)] transition-all"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)] transition-all opacity-60 cursor-not-allowed"
                aria-label="LinkedIn profile (coming soon)"
                title="LinkedIn profile coming soon"
                onClick={(e) => e.preventDefault()}
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 blur-2xl" />

              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-full border border-[var(--color-primary)]/25 animate-float" />
              <div className="absolute -inset-6 rounded-full border border-[var(--color-accent)]/15 animate-float" style={{ animationDelay: '1.5s' }} />

              {/* Photo container */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-[var(--color-card)] shadow-2xl shadow-[var(--color-primary)]/10">
                <img
                  src="/images/profile.png"
                  alt="Chalie Melkamu Wagnew"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Small badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] shadow-lg">
                <p className="text-xs font-medium text-[var(--color-secondary)] whitespace-nowrap">
                  Software Engineering Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}