import { useState, type FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }

    // Build mailto link since no backend is configured
    const mailto = `mailto:chaliemelkamu6@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
    setStatus('ready');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Get In Touch
          </h2>
          <p className="text-[var(--color-secondary)] max-w-2xl mx-auto">
            Interested in discussing internship opportunities or collaborating on a
            project? I’d be happy to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)]">
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:chaliemelkamu6@gmail.com"
                  className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-secondary)]">Email</p>
                    <p className="text-sm font-medium text-[var(--color-text)]">
                      chaliemelkamu6@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/chalie705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-secondary)]">GitHub</p>
                    <p className="text-sm font-medium text-[var(--color-text)]">
                      github.com/chalie705
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[var(--color-secondary)] opacity-60">
                  <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-xs">LinkedIn</p>
                    <p className="text-sm font-medium text-[var(--color-text)]">
                      Profile coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
              <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Note:</strong> The form
                opens your email client with a pre-filled message. No data is stored
                on a server until a backend integration is added.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[var(--color-background)] border text-[var(--color-text)] placeholder:text-[var(--color-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-[var(--color-border)]'
                    }`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[var(--color-background)] border text-[var(--color-text)] placeholder:text-[var(--color-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-[var(--color-border)]'
                    }`}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg bg-[var(--color-background)] border text-[var(--color-text)] placeholder:text-[var(--color-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 transition-colors ${
                    errors.subject
                      ? 'border-red-500'
                      : 'border-[var(--color-border)]'
                  }`}
                  placeholder="Internship opportunity / Collaboration"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg bg-[var(--color-background)] border text-[var(--color-text)] placeholder:text-[var(--color-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 transition-colors resize-y ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-[var(--color-border)]'
                  }`}
                  placeholder="Tell me about the opportunity or your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {status === 'ready' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  Your email client should open. Please send the message from there.
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 rounded-lg transition-all shadow-lg shadow-[var(--color-primary)]/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
