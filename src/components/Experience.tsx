import { ExternalLink } from 'lucide-react';
import { EXPERIENCE, PROFILE, type ExperienceItem } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';

const trackLabel: Record<ExperienceItem['track'], string> = {
  industry: 'Industry',
  'it-leadership': 'IT Leadership',
  academic: 'Academia',
  research: 'Research',
  community: 'Community',
};

export const Experience = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container-exec">
        <SectionHeader
          eyebrow="Career"
          title="Leadership & experience"
          intro={`${PROFILE.yearsExperience} years across cybersecurity, IT leadership, research and academia, now focused on industry.`}
        />

        <ol className="relative border-l border-slate-200 ml-3 md:ml-0 md:border-l-0">
          {EXPERIENCE.map((exp, index) => {
            const industry = exp.track === 'industry';
            return (
              <li key={`${exp.role}-${exp.organization}`} className="md:grid md:grid-cols-12 md:gap-8 relative pl-8 md:pl-0 pb-8 last:pb-0">
                {/* timeline dot (mobile) */}
                <span
                  aria-hidden="true"
                  className={`md:hidden absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full ring-4 ring-white ${industry ? 'bg-teal-600' : 'bg-slate-300'}`}
                />
                <div className="hidden md:flex md:col-span-3 flex-col items-end pt-7 text-right">
                  <span className={`text-sm font-semibold ${industry ? 'text-navy-950' : 'text-slate-500'}`}>{exp.period}</span>
                  <span className={`mt-1 text-xs font-semibold uppercase tracking-eyebrow ${industry ? 'text-teal-700' : 'text-slate-400'}`}>
                    {trackLabel[exp.track]}
                  </span>
                </div>
                <Reveal
                  delay={Math.min(index, 3) * 0.05}
                  className={`md:col-span-9 rounded-2xl border p-6 md:p-7 ${
                    industry
                      ? 'border-slate-200 bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.25)] border-l-4 border-l-teal-600'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="md:hidden flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-slate-600">{exp.period}</span>
                    <span className={`text-[11px] font-semibold uppercase tracking-eyebrow ${industry ? 'text-teal-700' : 'text-slate-400'}`}>
                      · {trackLabel[exp.track]}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className={`font-semibold text-navy-950 ${industry ? 'text-xl md:text-2xl' : 'text-lg'}`}>{exp.role}</h3>
                      <p className="mt-1 text-base font-medium text-slate-700">{exp.organization}</p>
                      {exp.location && <p className="text-sm text-slate-500">{exp.location}</p>}
                    </div>
                    {exp.current && (
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed">{exp.description}</p>
                  {exp.bullets && (
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
                    >
                      Company website <ExternalLink size={14} />
                    </a>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
