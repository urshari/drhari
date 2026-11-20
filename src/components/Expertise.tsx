import { ShieldCheck, Fingerprint, Handshake, Server } from 'lucide-react';
import { EXPERTISE } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';

const icons = [ShieldCheck, Fingerprint, Handshake, Server];

export const Expertise = () => {
  return (
    <section id="expertise" className="section bg-slate-50 border-y border-slate-200">
      <div className="container-exec">
        <SectionHeader
          eyebrow="Practice Areas"
          title="Where business priorities and security engineering meet"
          intro="Four practice pillars that connect cyber risk, compliance and operations to the decisions leadership teams have to make."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERTISE.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={index * 0.06} className="card card-hover p-8 relative overflow-hidden">
                <span className="absolute right-6 top-6 text-sm font-semibold text-slate-300 tabular-nums">
                  0{index + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
