import { Download, FileText } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-3xl px-5 py-20">
      <SectionHeading eyebrow="Resume" title="My CV" />
      <Reveal>
        <div className="card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center">
          <FileText size={40} className="text-accent" />
          <div className="flex-1">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">{profile.email}</p>
          </div>
          <div className="flex gap-3">
            <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noreferrer">View online</a>
            <a className="btn btn-primary" href={profile.cv} download><Download size={16} /> Download</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}