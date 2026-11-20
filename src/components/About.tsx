import { Building2, Rocket, Layers } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';

const priorities = [
  'Scaling enterprise security and compliance services',
  'Consumer cyber protection',
  'Indo-Israel technology partnerships',
  'Practical cybersecurity awareness',
  'Translating complex cyber risks into business decisions',
];

const pillars = [
  {
    icon: Building2,
    label: 'TechGuard Labs Foundation',
    meta: 'Senior Manager · Apr 2026 – Present',
    text: 'Business strategy, client engagement, strategic partnerships and solution delivery for an Indo-Israeli cybersecurity company serving enterprise and consumer markets.',
  },
  {
    icon: Rocket,
    label: 'Zyphron Technologies',
    meta: 'Founder & CEO · Jul 2024 – Jun 2026',
    text: 'Founded and led a cybersecurity-focused technology venture incubated under NISP at SREC SPARK.',
  },
  {
    icon: Layers,
    label: `${PROFILE.yearsExperience} years of operational & advisory depth`,
    meta: 'IT leadership · research · academia',
    text: 'Headed campus IT services and infrastructure at SREC, taught computer science, networks and cybersecurity there from 2008 to 2026, and published peer-reviewed security research.',
  },
];

export const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-exec">
        <SectionHeader eyebrow="Executive Profile" title="Cybersecurity as a business capability" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-slate-700">
            <p className="text-xl md:text-2xl leading-snug text-navy-950 font-medium">
              I help organisations turn cybersecurity from a technical requirement into a business capability.
            </p>
            <p>
              As Senior Manager at TechGuard Labs Foundation, an Indo-Israeli cybersecurity company in Coimbatore, I lead
              business strategy, client engagement, strategic partnerships and solution delivery across enterprise and
              consumer markets.
            </p>
            <p>
              My {PROFILE.yearsExperience} years span cybersecurity, IT leadership, research and academia: founding
              Zyphron Technologies, heading information technology services at Sri Ramakrishna Engineering College, and
              publishing research on blockchain, IoT security and wireless networks.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 mt-8">
              <p className="eyebrow mb-4">Current priorities</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {priorities.map((p) => (
                  <li key={p} className="flex gap-3 text-base text-slate-700">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="lg:col-span-5 space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.06} className="card card-hover p-6 flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-teal-300">
                  <p.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-navy-950">{p.label}</h3>
                  <p className="text-xs font-medium text-teal-700 mt-0.5">{p.meta}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
