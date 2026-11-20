import { ShieldCheck, Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { CERTIFICATIONS, RECOGNITION, MEMBERSHIPS } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';

export const Certifications = () => {
  return (
    <section id="certifications" className="section bg-white">
      <div className="container-exec">
        <SectionHeader
          eyebrow="Credentials & Professional Affiliations"
          title="Certifications, recognition and memberships"
          intro="Status is shown as it stands: CISA is current; other credentials are listed with the year they were earned."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal
              key={cert.name}
              delay={index * 0.05}
              className={`rounded-2xl border p-6 flex flex-col ${
                cert.current ? 'border-teal-600 bg-white shadow-[0_12px_32px_-16px_rgba(13,148,136,0.45)]' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div className="h-20 flex items-center">
                {cert.badge ? (
                  <img
                    src={cert.badge}
                    alt={`${cert.name} badge`}
                    loading="lazy"
                    className={`h-16 ${cert.badgeWide ? 'w-36' : 'w-16'} object-contain object-left`}
                  />
                ) : cert.current ? (
                  <ShieldCheck size={44} className="text-teal-700" />
                ) : (
                  <Award size={40} className="text-slate-400" />
                )}
              </div>
              <div className="mt-2">
                {cert.current ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
                    <BadgeCheck size={13} /> Current{cert.year && ` · ${cert.year}`}
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                    {cert.year ? `Earned ${cert.year}` : 'Earned'}
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-semibold text-navy-950 leading-snug">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:text-teal-900"
                >
                  {cert.verifyLabel} <ExternalLink size={14} />
                </a>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <a
              href={RECOGNITION.verify}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover h-full p-6 flex items-center gap-5"
            >
              <img src={RECOGNITION.badge} alt={`${RECOGNITION.name} badge`} width={72} height={74} loading="lazy" className="w-16 h-16 object-contain shrink-0" />
              <div>
                <p className="eyebrow">Recognition</p>
                <p className="mt-1 font-semibold text-navy-950">
                  {RECOGNITION.name} · {RECOGNITION.issuer}
                </p>
                <p className="mt-1 text-sm text-teal-700 inline-flex items-center gap-1">
                  Verify with EC-Council <ExternalLink size={14} />
                </p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.06} className="card p-6">
            <p className="eyebrow mb-3">Professional memberships</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MEMBERSHIPS.map((m) => (
                <li key={m.name}>
                  <p className="text-sm font-semibold text-navy-950">{m.name}</p>
                  <p className="text-xs text-slate-500">{m.since}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
