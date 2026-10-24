import { BookOpen, Code2, Database, Users, Lightbulb, Target } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Fourth-year Software Engineering student at Injibara University, focused on practical application of software principles.',
  },
  {
    icon: Code2,
    title: 'Frontend & Backend',
    description: 'Building interfaces with React and TypeScript while working with PHP, Java, and REST fundamentals on the backend.',
  },
  {
    icon: Database,
    title: 'Database Systems',
    description: 'Designing and managing data with MySQL and PostgreSQL, emphasizing integrity and efficient queries.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Valuing teamwork, clear communication, and learning from peers and mentors on every project.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Approaching challenges methodically—understanding requirements, designing solutions, and iterating.',
  },
  {
    icon: Target,
    title: 'Internship Goal',
    description: 'Seeking hands-on industry experience to contribute meaningfully while accelerating professional growth.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            About Me
          </h2>
          <p className="text-[var(--color-secondary)] max-w-2xl mx-auto leading-relaxed">
            A motivated Software Engineering student who enjoys learning by building,
            refining technical skills through real projects, and preparing for a career
            in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)]">
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                Who I Am
              </h3>
              <div className="space-y-4 text-[var(--color-secondary)] leading-relaxed text-sm sm:text-base">
                <p>
                  I’m currently in my fourth year of Software Engineering at Injibara
                  University. My academic journey has given me a solid foundation in
                  software engineering principles, data structures, and system design.
                </p>
                <p>
                  Outside of coursework, I build practical applications—management
                  systems, registration workflows, and desktop tools—to turn theory into
                  working software. I’m especially drawn to web development and database
                  design.
                </p>
                <p>
                  I’m looking for an internship where I can contribute to real products,
                  learn from experienced engineers, and grow into a reliable junior
                  developer.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
