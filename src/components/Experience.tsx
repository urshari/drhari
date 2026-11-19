import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../data/profile';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Leadership & <span className="text-neon-blue glow-text">Experience</span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            18+ years across cybersecurity, IT leadership, research and academia.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-purple-glow to-transparent transform -translate-x-1/2 opacity-30"></div>

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.organization}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.1 }}
              className={`relative flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-5/12"></div>

              <div className="absolute left-6 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-12 h-12 rounded-full glass-panel border-2 border-neon-blue flex items-center justify-center z-10 bg-slate-50">
                <Briefcase className={exp.current ? 'text-matrix-green' : 'text-neon-blue'} size={22} />
              </div>

              <div className="w-full pl-16 md:pl-0 md:w-5/12">
                <div className="glass-panel neon-border p-6 rounded-xl hover:bg-black/5 transition-all">
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full mb-4 inline-block ${exp.current ? 'text-emerald-700 bg-matrix-green/10' : 'text-neon-blue bg-neon-blue/10'}`}
                  >
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-slate-700 font-semibold">{exp.organization}</h4>
                  {exp.location && <p className="text-sm text-slate-500 mb-4">{exp.location}</p>}
                  <p className={`text-slate-600 text-sm leading-relaxed ${exp.location ? '' : 'mt-4'}`}>{exp.description}</p>
                  {exp.bullets && (
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-matrix-green shrink-0"></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
