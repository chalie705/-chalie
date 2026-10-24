import { useState, type FormEvent } from 'react'
import { Check, Copy, Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

type Status = 'idle' | 'loading' | 'success' | 'error'
const FORM_ID = (import.meta.env.VITE_FORMSPREE_ID as string | undefined) || 'xgaavgpg'
const input = 'w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [msg, setMsg] = useState('')
  const [copied, setCopied] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const errs: Record<string, string> = {}
    if (!name) errs.name = 'Please enter your name.'
    if (!email) errs.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.'
    if (!message) errs.message = 'Please enter a message.'

    setErrors(errs)
    if (Object.keys(errs).length) return

    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      setMsg('Thank you! Your message was sent successfully to my email.')
      form.reset()
    } catch {
      setStatus('error')
      setMsg(`Something went wrong. Please try again or email directly at ${profile.email}.`)
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard unavailable */ }
  }

  const err = (k: string) => errors[k] && <p role="alert" className="mt-1 text-xs text-red-500">{errors[k]}</p>

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Contact" title="Let's talk" />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Left Side: Info Cards */}
        <div className="space-y-4">
          <p className="text-sm text-muted">
            I'm open to internships, collaborations, and learning opportunities. Send me a message and I'll get back to you.
          </p>

          <div className="card flex items-center justify-between rounded-2xl border border-line bg-card/40 p-4 transition duration-300 hover:border-accent">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail size={18} />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">Direct Email</span>
                <a href={`mailto:${profile.email}`} className="truncate text-xs font-medium text-fg hover:text-accent sm:text-sm">
                  {profile.email}
                </a>
              </div>
            </div>
            <button onClick={copyEmail} className="btn btn-ghost shrink-0 !p-2.5" aria-label="Copy email address">
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            </button>
          </div>

          <a href={profile.github} target="_blank" rel="noreferrer" className="card flex items-center gap-3 rounded-2xl border border-line bg-card/40 p-4 transition duration-300 hover:border-accent">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Github size={18} />
            </div>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">GitHub Profile</span>
              <span className="text-xs font-medium text-fg sm:text-sm">github.com/chalie705</span>
            </div>
          </a>

          <a href={profile.linkedin || 'https://linkedin.com'} target="_blank" rel="noreferrer" className="card flex items-center gap-3 rounded-2xl border border-line bg-card/40 p-4 transition duration-300 hover:border-accent">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Linkedin size={18} />
            </div>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">LinkedIn Profile</span>
              <span className="text-xs font-medium text-fg sm:text-sm">
                {profile.linkedin ? profile.linkedin.replace('https://', '') : 'linkedin.com/in/chalie-melkamu'}
              </span>
            </div>
          </a>

          <div className="card flex items-center gap-3 rounded-2xl border border-line bg-card/40 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <MapPin size={18} />
            </div>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">Location & Availability</span>
              <span className="text-xs font-medium text-fg sm:text-sm">Injibara, Ethiopia (Open to Remote)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Formspree Contact Form */}
        <form onSubmit={onSubmit} noValidate className="card space-y-4 rounded-2xl border border-line bg-card/40 p-6 shadow-xl">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Your Name</label>
            <input id="name" name="name" placeholder="e.g. John Doe" className={input} />
            {err('name')}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Email Address</label>
            <input id="email" name="email" type="email" placeholder="e.g. recruiter@example.com" className={input} />
            {err('email')}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Subject</label>
            <input id="subject" name="subject" placeholder="e.g. Full Stack Internship Opportunity" className={input} />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Describe your project, team opportunity, or inquiry..." className={input} />
            {err('message')}
          </div>

          <button type="submit" disabled={status === 'loading'} className="btn btn-primary w-full !py-3 disabled:opacity-60">
            {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send Message</>}
          </button>

          <div aria-live="polite">
            {status === 'success' && <p className="text-sm text-emerald-500">{msg}</p>}
            {status === 'error' && <p className="text-sm text-red-500">{msg}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}