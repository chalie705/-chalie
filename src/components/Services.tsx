import { 
  Smartphone, 
  Code2, 
  Server, 
  Database, 
  Briefcase, 
  Wrench 
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export const services = [
  {
    title: 'Responsive Website Development',
    icon: Smartphone,
    description:
      'Building fluid, mobile-first websites that render with precision across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    description:
      'Writing clean, accessible HTML5, modern CSS3, and strongly-typed TypeScript for dynamic, intuitive user interfaces and interactions.',
  },
  {
    title: 'PHP Backend Development',
    icon: Server,
    description:
      'Constructing secure server-side logic, session management, authenticated workflows, and RESTful API endpoints for web applications.',
  },
  {
    title: 'MySQL Database Design',
    icon: Database,
    description:
      'Architecting normalized relational schemas, defining table relationships, writing optimized SQL queries, and maintaining data integrity.',
  },
  {
    title: 'Business Management Systems',
    icon: Briefcase,
    description:
      'Developing custom administrative systems for employee directories, student enrollments, clinical intake, and workflow tracking.',
  },
  {
    title: 'Website Maintenance',
    icon: Wrench,
    description:
      'Debugging code issues, updating existing PHP scripts, refactoring CSS layouts, improving performance, and keeping web properties reliable.',
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Services" title="What I offer and build" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Reveal key={service.title}>
              <div className="card group flex h-full flex-col rounded-2xl border border-line bg-card/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-fg">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}