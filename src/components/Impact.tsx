import { Globe, Handshake, Plane } from 'lucide-react';
import { IMPACT, PARTNERSHIPS } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';

const partnershipIcons = [Globe, Handshake, Plane];

export const Impact = () => {
  // Only metrics with a confirmed value are shown; TODO entries in IMPACT render nothing.
  const metrics = IMPACT.filter((m) => m.value !== null);

  return (
    <section id="impact" className="section bg-slate-50 border-b border-slate-200">
      <div className="container-exec">
        <SectionHeader
          eyebrow="Impact & Strategic Partnerships"
          title="Building cybersecurity capability across borders, institutions and industry"
        />

        {metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-slate-200 bg-white divide-y sm:divide-y-0 sm:divide-x divide-slate-200 mb-10">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="p-8">
                <div className="text-4xl md:text-5xl font-semibold text-navy-950 tabular-nums">{m.value}</div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-eyebrow text-teal-700">{m.label}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{m.context}</p>
              </Reveal>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNERSHIPS.map((p, index) => {
            const Icon = partnershipIcons[index % partnershipIcons.length];
            return (
              <Reveal key={p.title} delay={index * 0.06} className="card card-hover p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-teal-300">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-950">{p.title}</h3>
                <p className="mt-1 text-xs font-medium text-teal-700">{p.location}</p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
