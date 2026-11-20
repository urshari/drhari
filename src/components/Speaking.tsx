import { CalendarDays, MapPin, Mic, Presentation, Quote, Users, Building2, Handshake } from 'lucide-react';
import { INDUSTRY_EVENTS, SPEAKING, EARLIER_SPEAKING, RECOMMENDATIONS, type EventRole } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';

const roleStyle: Record<EventRole, { cls: string; icon: typeof Mic }> = {
  Speaker: { cls: 'bg-teal-400/15 text-teal-200 ring-teal-300/30', icon: Mic },
  'Industry Representative': { cls: 'bg-steel-400/15 text-sky-200 ring-sky-300/30', icon: Building2 },
  'Industry Delegate': { cls: 'bg-steel-400/15 text-sky-200 ring-sky-300/30', icon: Users },
  'Operations Leadership': { cls: 'bg-amber-300/10 text-amber-200 ring-amber-200/30', icon: Handshake },
};

const RoleBadge = ({ role }: { role: EventRole }) => {
  const { cls, icon: Icon } = roleStyle[role];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${cls}`}>
      <Icon size={13} /> {role}
    </span>
  );
};

export const Speaking = () => {
  const photoEvent = INDUSTRY_EVENTS.find((e) => e.photo);
  const others = INDUSTRY_EVENTS.filter((e) => e !== photoEvent);

  return (
    <section id="speaking" className="section bg-navy-950 text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-teal-600/10 blur-[120px]" />
      <div className="container-exec relative">
        <SectionHeader
          dark
          eyebrow="2026 · Summits, Conclaves & Executive Forums"
          title="Industry Events & Speaking"
          intro="Summits, conclaves and executive forums across India's cybersecurity ecosystem in 2026, with each role shown exactly as it was."
        />

        {/* Featured: event with stage photo */}
        {photoEvent?.photo && (
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
            <figure className="lg:col-span-7">
              <img
                src={photoEvent.photo.src}
                alt={photoEvent.photo.alt}
                width={photoEvent.photo.width}
                height={photoEvent.photo.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="lg:col-span-5 p-7 md:p-9 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <RoleBadge role={photoEvent.role} />
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <CalendarDays size={13} /> {photoEvent.date}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-snug">{photoEvent.name}</h3>
              {photoEvent.topic && <p className="mt-3 text-lg text-teal-200 leading-snug">“{photoEvent.topic}”</p>}
              <p className="mt-4 inline-flex items-start gap-1.5 text-sm text-slate-400">
                <MapPin size={14} className="mt-0.5 shrink-0" /> {photoEvent.host}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{photoEvent.summary}</p>
            </div>
          </Reveal>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((ev, i) => (
            <Reveal
              key={ev.name}
              as="article"
              delay={(i % 2) * 0.06}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-teal-400/30 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <RoleBadge role={ev.role} />
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <CalendarDays size={13} /> {ev.date}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug">{ev.name}</h3>
              {ev.topic && <p className="mt-2 text-teal-200">“{ev.topic}”</p>}
              <p className="mt-3 inline-flex items-start gap-1.5 text-sm text-slate-400">
                <MapPin size={14} className="mt-0.5 shrink-0" /> {ev.host}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{ev.summary}</p>
              {ev.roleDetail !== ev.role && <p className="mt-4 text-xs text-slate-500">Role: {ev.roleDetail}</p>}
            </Reveal>
          ))}
        </div>

        {/* Secondary tier */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-slate-400">
                Workshops, academic forums & community sessions
              </p>
            </Reveal>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {SPEAKING.map((talk, i) => (
                <Reveal key={talk.event} as="li" delay={i * 0.04} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-xs font-semibold text-teal-300 sm:w-28 shrink-0">{talk.date}</span>
                  <div>
                    <p className="font-medium text-white">{talk.event}</p>
                    <p className="text-sm text-slate-300 mt-1">{talk.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{talk.host}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-5">
              <p className="text-xs text-slate-500 mb-2">Earlier sessions</p>
              <div className="flex flex-wrap gap-2">
                {EARLIER_SPEAKING.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <Reveal className="rounded-2xl bg-white text-navy-950 p-7">
              <p className="eyebrow">Startup & Industry Advisory</p>
              <div className="mt-4 flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-teal-300">
                  <Presentation size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">TNStartup Mentor</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    Recognised as a mentor under the TNStartup initiative, advising early-stage cybersecurity startups on
                    product strategy, technical direction and market readiness.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-slate-400 mb-4">
                LinkedIn recommendations · former SREC students
              </p>
              <div className="space-y-5">
                {RECOMMENDATIONS.map((r) => (
                  <figure key={r.author} className="flex gap-3">
                    <Quote size={16} className="mt-1 shrink-0 text-teal-400" />
                    <div>
                      <blockquote className="text-sm text-slate-300 leading-relaxed">“{r.quote}”</blockquote>
                      <figcaption className="mt-1.5 text-xs text-slate-500">
                        <span className="font-medium text-slate-300">{r.author}</span> · {r.relation}
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
