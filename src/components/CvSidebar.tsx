import type { ReactNode } from 'react'
import { cv } from '../data/cv'

const Heading = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-2 mt-5 border-b-2 border-[#0284C7] pb-1 text-[12px] font-bold uppercase tracking-wide text-[#0284C7]">
    {children}
  </h3>
)

export default function CvSidebar() {
  return (
    <aside className="w-[49mm] shrink-0 border-r border-slate-200 bg-[#F8FAFC] pr-[4mm]">
      <img
        src={cv.photo}
        alt={`Portrait of ${cv.name}`}
        className="aspect-[4/5] w-full rounded-[3px] border-2 border-[#0284C7] object-cover object-top"
      />

      <Heading>Contact</Heading>
      <div className="space-y-1 text-[11px] leading-snug">
        {cv.contact.map((c) => (
          <p key={c.label} className="break-words">
            {c.href ? <a href={c.href}>{c.label}</a> : c.label}
          </p>
        ))}
        {cv.links.map((l) => (
          <div key={l.title} className="pt-0.5">
            <p className="font-bold text-[#0F172A]">{l.title}:</p>
            <a href={l.href} className="break-words">{l.label}</a>
          </div>
        ))}
      </div>

      <Heading>Education</Heading>
      <p className="text-[11px] font-bold text-[#0F172A]">{cv.education.degree}</p>
      <p className="text-[11px]">{cv.education.school}</p>
      <p className="text-[11px]">{cv.education.period}</p>

      <Heading>Skills</Heading>
      {cv.skills.map((s) => (
        <div key={s.category} className="mb-1.5">
          <p className="text-[11px] font-bold text-[#0F172A]">{s.category}</p>
          <p className="text-[10.5px] leading-snug">{s.items}</p>
        </div>
      ))}

      <Heading>Strengths</Heading>
      <ul className="list-disc space-y-0.5 pl-4 text-[11px] marker:text-[#0284C7]">
        {cv.strengths.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </aside>
  )
}