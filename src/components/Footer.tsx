import { ArrowUp, Github } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold text-white ring-1 ring-white/15">
              HG
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
              <p className="text-xs">Cybersecurity Strategy, GRC &amp; Digital Trust · {PROFILE.location}</p>
            </div>
          </div>

          <nav aria-label="Profiles" className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            {SOCIAL_LINKS.map((l) => (
              <a key={l.title} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {l.title}
              </a>
            ))}
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Github size={12} /> GitHub
            </a>
          </nav>

          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-lg border border-white/15 flex items-center justify-center hover:text-white hover:border-teal-400 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</p>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            linkedin.com/in/harisuryanarayanan
          </a>
        </div>
      </div>
    </footer>
  );
};
