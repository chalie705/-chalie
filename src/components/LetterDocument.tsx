import { cv, letter } from '../data/cv'
import CvSidebar from './CvSidebar'

const fill = (text: string) => text.split('{company}').join(letter.recipient.company)

export default function LetterDocument() {
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="cv-print flex h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-white font-sans text-[#1F2937] shadow-lg">
      <CvSidebar />

      <div className="relative flex-1 p-8 text-[11.5px] leading-relaxed">
        <p className="absolute right-8 top-8">{date}</p>

        <div className="mt-6">
          <p className="text-[13px] font-bold text-[#1E3A8A]">{cv.name}</p>
          <p>{cv.contact[0].label}</p>
          <p>{cv.contact[2].label}</p>
        </div>

        <div className="mt-6">
          <p className="font-bold">{letter.recipient.title}</p>
          <p>{letter.recipient.company}</p>
          <p>{letter.recipient.city}</p>
        </div>

        <p className="mt-6 border-l-[3px] border-[#1E3A8A] pl-3 text-[14px] font-bold text-[#1E3A8A]">
          Subject: {letter.subject}
        </p>

        <p className="mt-5">{letter.greeting}</p>

        {letter.paragraphs.map((p) => (
          <p key={p} className="mt-3">{fill(p)}</p>
        ))}

        <p className="mt-5">{letter.closing}</p>

        {letter.signature ? (
          <img src={letter.signature} alt={`${cv.name} signature`} className="my-1 h-12 object-contain object-left" />
        ) : (
          <div className="h-12" />
        )}

        <p className="font-bold text-[#1E3A8A]">{cv.name}</p>
        <p>Software Engineering Student</p>
        <p>Injibara University</p>
      </div>
    </div>
  )
}