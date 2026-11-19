import { motion } from 'framer-motion';
import { PROFILE, MEMBERSHIPS } from '../data/profile';

const priorities = [
  'Scaling enterprise security and compliance services',
  'Consumer cyber protection',
  'Indo-Israel technology partnerships',
  'Practical cybersecurity awareness',
  'Translating complex cyber risks into business decisions',
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 flex items-center gap-4">
            <span className="text-neon-blue font-mono text-xl sm:text-3xl">&lt;01/&gt;</span>
            About
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel neon-border p-8 rounded-xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-3xl rounded-full pb-10"></div>

            <div className="w-full aspect-[4/3] rounded-lg mb-6 relative overflow-hidden border-2 border-slate-200 group-hover:border-neon-blue/50 transition-colors shadow-lg bg-slate-100">
              <img
                src="/profile-photo.jpg"
                alt="Dr. Harihara Gopalan S speaking at a podium"
                width={1200}
                height={798}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="text-xl font-bold text-slate-900">{PROFILE.name}</h3>
            <p className="text-slate-600 text-sm mt-1">{PROFILE.currentRole}</p>
            <p className="text-slate-500 text-sm font-mono mt-1">{PROFILE.location}</p>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Memberships & volunteering</p>
              <ul className="space-y-2">
                {MEMBERSHIPS.map((m) => (
                  <li key={m.name} className="text-sm text-slate-700">
                    <span className="font-semibold">{m.name}</span>
                    <span className="text-slate-500"> · {m.since}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-lg"
          >
            <p>
              I help organisations turn cybersecurity from a technical requirement into a business capability.
            </p>
            <p>
              As Senior Manager at TechGuard Labs Foundation, an Indo-Israeli cybersecurity company, I lead business
              strategy, client engagement, strategic partnerships and solution delivery across enterprise and consumer
              markets.
            </p>
            <p>
              My {PROFILE.yearsExperience} years span cybersecurity, IT leadership, research and academia: heading
              information technology services and teaching at Sri Ramakrishna Engineering College, founding Zyphron
              Technologies, and publishing research on blockchain, IoT security and wireless networks.
            </p>

            <div className="glass-panel rounded-xl p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">Current priorities</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {priorities.map((p) => (
                  <li key={p} className="flex gap-3 text-base text-slate-700">
                    <span className="mt-2 w-2 h-2 rounded-full bg-matrix-green shrink-0"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
