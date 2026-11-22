import { useEffect } from 'react'
import { Download, Printer } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CvDocument from '../components/CvDocument'
import { DOWNLOAD_CV_EVENT, requestCvDownload } from '../lib/downloadCv'

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
  useEffect(() => {
    const run = () => setTimeout(() => printWithTitle('Chalie-Melkamu-CV'), 100)
    window.addEventListener(DOWNLOAD_CV_EVENT, run)
    return () => window.removeEventListener(DOWNLOAD_CV_EVENT, run)
  }, [])

  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Resume" title="Resume & cover letter" />

      <div className="mb-6 flex flex-wrap gap-3">
        <button className="btn btn-primary" onClick={() => printWithTitle('Chalie-Melkamu-CV')}>
          <Printer size={16} /> Print / Save as PDF
        </button>
        <button className="btn btn-ghost" onClick={requestCvDownload}>
          <Download size={16} /> Download CV
        </button>
      </div>

      {/* Scrolls sideways on small screens so the A4 sheet is never squashed */}
      <div className="overflow-x-auto pb-4">
        <CvDocument />
      </div>
    </section>
  )
}