import type { ReactNode } from 'react'
import { cv } from '../data/cv'
import CvSidebar from './CvSidebar'

const MainHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-2 mt-7 border-b border-[#1E3A8A] pb-1 text-[15px] font-bold uppercase text-[#1E3A8A]">
    {children}
  </h3>
)

export default function CvDocument() {
  return (
    <div className="cv-print flex h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-white font-sans text-[#1F2937] shadow-lg">
      <CvSidebar />

      <div className="flex-1 p-8">
        <h2 className="text-[32px] font-bold leading-tight text-[#1E3A8A]">{cv.name}</h2>
        <p className="text-[15px] font-bold">{cv.role}</p>

        <MainHeading>Professional Summary</MainHeading>
        <p className="text-[12.5px] leading-relaxed">{cv.summary}</p>

        <MainHeading>Key Projects</MainHeading>
        {cv.projects.map((p) => (
          <div key={p.name} className="mb-3">
            <p className="text-[13.5px] font-bold">{p.name}</p>
            <p className="text-[11.5px] text-[#4B5563]">{p.stack}</p>
            <p className="text-[12.5px] leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}