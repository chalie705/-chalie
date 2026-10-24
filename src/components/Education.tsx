import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[var(--color-card)]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Education
          </h2>
          <p className="text-[var(--color-secondary)] max-w-2xl mx-auto">
            Academic foundation in software engineering principles and practical development.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)]">
            {/* Timeline accent */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full" />

            <div className="pl-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--color-text)]">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="text-[var(--color-primary)] font-medium mt-1">
                    Injibara University
                  </p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-[var(--color-secondary)]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      Injibara, Ethiopia
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      Fourth-year student
                    </span>
                  </div>

                  <div className="mt-5 pt-5 border-t border-[var(--color-border)]">
                    <h4 className="text-sm font-semibold text-[var(--color-text)] mb-2">
                      Focus Areas
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[var(--color-secondary)]">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        Software Engineering Principles
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        Web Development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        Database Design & Management
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        Object-Oriented Programming
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
