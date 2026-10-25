import { useState } from 'react'
import { Download, Printer } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CvDocument from '../components/CvDocument'
import LetterDocument from '../components/LetterDocument'
import { profile } from '../data/portfolio'

type Tab = 'cv' | 'letter'

export default function Resume() {
  const [tab, setTab] = useState<Tab>('cv')

  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Resume" title="My CV" />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex gap-2" role="group" aria-label="Choose document">
          <button
            onClick={() => setTab('cv')}
            aria-pressed={tab === 'cv'}
            className={`btn !rounded-full !py-2 ${tab === 'cv' ? 'btn-primary' : 'btn-ghost'}`}
          >
            CV
          </button>
          <button
            onClick={() => setTab('letter')}
            aria-pressed={tab === 'letter'}
            className={`btn !rounded-full !py-2 ${tab === 'letter' ? 'btn-primary' : 'btn-ghost'}`}
          >
            Cover letter
          </button>
        </div>

        <button className="btn btn-primary" onClick={() => window.print()}>
          <Printer size={16} /> Print / Save as PDF
        </button>
        <a className="btn btn-ghost" href={profile.cv} download>
          <Download size={16} /> Download CV
        </a>
      </div>

      {/* Scrolls sideways on small screens so the A4 sheet is never squashed */}
      <div className="overflow-x-auto pb-4">{tab === 'cv' ? <CvDocument /> : <LetterDocument />}</div>
    </section>
  )
}