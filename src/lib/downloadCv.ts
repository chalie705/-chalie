export const DOWNLOAD_CV_EVENT = 'download-cv'

// Any button can call this. Resume.tsx listens for it.
export function requestCvDownload() {
  window.dispatchEvent(new Event(DOWNLOAD_CV_EVENT))
}