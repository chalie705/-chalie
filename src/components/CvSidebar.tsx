import type { ReactNode } from 'react'
import { Github, GraduationCap, Link2, Mail, MapPin, Phone, Settings, Star, User, type LucideIcon } from 'lucide-react'
import { cv } from '../data/cv'

const contactIcons: Record<string, LucideIcon> = {
  pin: MapPin,
  phone: Phone,
  mail: Mail,
  github: Github,
  link: Link2,
}

const Heading = ({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) => (
  <h3 className="mb-2 mt-5 flex items-center gap-2 border-b border-[#1E3A8A] pb-1 text-[13px] font-bold uppercase text-[#1E3A8A]">
    <Icon size={14} /> {children}
  </h3>
)

export default function CvSidebar() {
  return (
    <aside className="h-full w-[64mm] shrink-0 bg-[#E4EEF8] p-6">
      <img
        src={cv.photo}
        alt={`Portrait of ${cv.name}`}
        className="aspect-[4/5] w-full border-2 border-[#1E3A8A] object-cover object-top"
      />

      <Heading icon={User}>Contact</Heading>
      <ul className="space-y-1.5 text-[11px] leading-snug">
        {cv.contact.map((c) => {
          const Icon = contactIcons[c.icon]
          return (
            <li key={c.label} className="flex items-start gap-2 break-all">
              <Icon size={12} className="mt-0.5 shrink-0 text-[#1E3A8A]" />
              {c.href ? <a href={c.href} className="text-[#1E3A8A]">{c.label}</a> : <span>{c.label}</span>}
            </li>
          )
        })}
      </ul>

      <Heading icon={GraduationCap}>Education</Heading>
      <p className="text-[12px] font-bold">{cv.education.degree}</p>
      <p className="text-[11px]">{cv.education.school}</p>
      <p className="text-[11px]">{cv.education.period}</p>

      <Heading icon={Settings}>Skills</Heading>
      {cv.skills.map((s) => (
        <div key={s.category} className="mb-2">
          <p className="text-[11px] font-bold">{s.category}</p>
          <p className="text-[10.5px] leading-snug">{s.items}</p>
        </div>
      ))}

      <Heading icon={Star}>Strengths</Heading>
      <ul className="space-y-0.5 text-[11px]">
        {cv.strengths.map((s) => (
          <li key={s}>• {s}</li>
        ))}
      </ul>
    </aside>
  )
}