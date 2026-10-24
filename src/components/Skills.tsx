type IconName = 'frontend' | 'backend' | 'tools';

interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Crafting responsive, accessible, and standards-compliant user interfaces across all viewports.',
    icon: 'frontend',
    items: [
      'HTML5 (Semantic Markup)',
      'CSS3 (Flexbox & Grid)',
      'JavaScript (ES6+)',
      'TypeScript (Strict Typing)',
      'Responsive Web Design',
      'Bootstrap Framework',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    description:
      'Building server-side logic, data validation, and relational database schemas for dynamic systems.',
    icon: 'backend',
    items: [
      'PHP (Object-Oriented & Procedural)',
      'MySQL Database Design',
      'SQL Queries & Optimization',
      'REST API Fundamentals',
      'Authentication & Sessions',
      'Form Validation & Sanitization',
       'Command Line / Bash',
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description:
      'Version control, local stack virtualization, and developer environments for efficient workflows.',
    icon: 'tools',
    items: [
      'Git Version Control',
      'GitHub Collaboration',
      'Visual Studio Code',
      'XAMPP / Apache Environment',
      'Chrome DevTools',
      'Command Line / Bash',
    ],
  },
];

const svgProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function GroupIcon({ name }: { name: IconName }) {
  if (name === 'frontend') {
    return (
      <svg {...svgProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  if (name === 'backend') {
    return (
      <svg {...svgProps}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    );
  }
  return (
    <svg {...svgProps}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SkillCard({ group, featured }: { group: SkillGroup; featured?: boolean }) {
  return (
    <div
      className={`flex flex-col p-7 rounded-[28px] bg-[#0d1424] border transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6] ${
        featured
          ? 'border-[#3b82f6] -translate-y-1 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.35)]'
          : 'border-[#1c2640]'
      }`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#14224a] text-[#3b82f6] mb-6">
        <GroupIcon name={group.icon} />
      </div>

      <h3 className="text-[22px] font-bold text-white mb-3 leading-tight">
        {group.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-[#8b98b3] min-h-[72px] mb-6">
        {group.description}
      </p>

      <ul className="space-y-3 mt-auto">
        {group.items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-between gap-3 px-3.5 h-[45px] rounded-xl bg-[#172036] border border-[#25304c] text-[15px] font-semibold text-white"
          >
            <span className="truncate">{item}</span>
            <span className="text-emerald-400 shrink-0">
              <CheckIcon />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-[#070b14]"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-sm font-mono uppercase tracking-widest text-[#3b82f6] mb-3">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            What I work with
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.id} group={group} featured={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}