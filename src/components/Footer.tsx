import { useState, useEffect } from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              Chalie Melkamu Wagnew
            </a>
            <p className="mt-3 text-sm text-[var(--color-secondary)] leading-relaxed max-w-xs">
              Fourth-year Software Engineering student building practical solutions
              and seeking internship opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/chalie705"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)] transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:chaliemelkamu6@gmail.com"
                className="p-2.5 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)] transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-secondary)]">
            © {year} Chalie Melkamu Wagnew. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/90 transition-all z-40 animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
