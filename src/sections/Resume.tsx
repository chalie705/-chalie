import { useEffect, useState } from 'react'
import { Download, Printer } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CvDocument from '../components/CvDocument'
import LetterDocument from '../components/LetterDocument'
import { DOWNLOAD_CV_EVENT, requestCvDownload } from '../lib/downloadCv'

type Tab = 'cv' | 'letter'

// The browser uses the page title as the default PDF file name.
function printWithTitle(title: string) {
  const previous = document.title
  const restore = () => {
    document.title = previous
    window.removeEventListener('afterprint', restore)
  }
  window.addEventListener('afterprint', restore)
  document.title = title
  window.print()
}

export default function Resume() {
  const [tab, setTab] = useState<Tab>('cv')

  useEffect(() => {
    const run = () => {
      setTab('cv') // always print the CV, never the letter
      setTimeout(() => printWithTitle('Chalie-Melkamu-CV'), 150) // let the CV render first
    }
    window.addEventListener(DOWNLOAD_CV_EVENT, run)
    return () => window.removeEventListener(DOWNLOAD_CV_EVENT, run)
  }, [])

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

        <button
          className="btn btn-primary"
          onClick={() => printWithTitle(tab === 'cv' ? 'Chalie-Melkamu-CV' : 'Chalie-Melkamu-Cover-Letter')}
        >
          <Printer size={16} /> Print / Save as PDF
        </button>
        <button className="btn btn-ghost" onClick={requestCvDownload}>
          <Download size={16} /> Download CV
        </button>
      </div>

      {/* Scrolls sideways on small screens so the A4 sheet is never squashed */}
      <div className="overflow-x-auto pb-4">{tab === 'cv' ? <CvDocument /> : <LetterDocument />}</div>
    </section>
  )
}