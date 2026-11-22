import { cv, letter } from '../data/cv'
import CvSidebar from './CvSidebar'

export default function CvDocument() {
  const date =
    letter.date ||
    new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="cv-print flex h-[297mm] w-[210mm] shrink-0 flex-col overflow-hidden bg-white font-sans text-[#334155] shadow-lg">
      <div className="flex flex-1 px-[18mm] pb-[5mm] pt-[16mm]">
        <CvSidebar />

        <div className="flex-1 pl-[8mm]">
          <h2 className="text-[29px] font-bold leading-tight text-[#0F172A]">{cv.name}</h2>
          <p className="mt-1 text-[15px] font-bold text-[#0284C7]">{cv.role}</p>
          <div className="mt-3 h-[3px] bg-[#0284C7]" />

          <div className="mt-5 border-l-4 border-[#0284C7] bg-[#F1F5F9] px-4 py-3 text-[11.5px] leading-relaxed">
            <p><b className="text-[#0F172A]">To:</b> {letter.to}</p>
            <p><b className="text-[#0F172A]">Date:</b> {date}</p>
            <p><b className="text-[#0F172A]">Subject:</b> {letter.subject}</p>
          </div>

          <div className="mt-5 text-justify text-[12.5px] leading-[1.7]">
            <p>{letter.greeting}</p>
            {letter.paragraphs.map((p) => (
              <p key={p} className="mt-3">{p}</p>
            ))}
            <p className="mt-5">{letter.closing}</p>
            <p className="mt-3 font-bold text-[#0F172A]">{cv.name}</p>
            {letter.signoff.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-[18mm] mb-[10mm] flex justify-between border-t border-slate-200 pt-[3mm] text-[10px] text-slate-400">
        <span>{cv.name} - Resume &amp; Cover Letter</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  )
}