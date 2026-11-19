import { motion } from 'framer-motion';
import { Mic, Presentation, Quote } from 'lucide-react';
import { SPEAKING, EARLIER_SPEAKING, RECOMMENDATIONS } from '../data/profile';

export const Speaking = () => {
  return (
    <section id="speaking" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Speaking & <span className="text-matrix-green glow-text">Thought Leadership</span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Keynote and expert sessions for leadership forums, cybersecurity communities and professional training programmes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            {SPEAKING.map((talk, index) => (
              <motion.div
                key={talk.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 items-start glass-panel p-6 rounded-xl hover:border-matrix-green/40 transition-colors"
              >
                <Mic className="text-matrix-green shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{talk.title}</h3>
                    {talk.date && (
                      <span className="text-xs font-mono text-slate-500 bg-black/5 px-2 py-1 rounded shrink-0">{talk.date}</span>
                    )}
                  </div>
                  <p className="text-slate-700 text-sm mt-1">{talk.event}</p>
                  <p className="text-slate-500 text-sm">{talk.host}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Earlier sessions</p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                {EARLIER_SPEAKING.map((s) => (
                  <span key={s} className="bg-black/5 px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-xl overflow-hidden"
            >
              <img
                src="/speaking-isea-ciso-2026.jpg"
                alt="Dr. Harihara Gopalan S speaking at the ISEA–CISO Leadership Meet 2026"
                width={1200}
                height={798}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <figcaption className="px-4 py-3 text-sm text-slate-600">ISEA–CISO Leadership Meet 2026, Chennai</figcaption>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 items-start bg-black/5 p-6 rounded-xl border border-black/5"
            >
              <Presentation className="text-neon-blue shrink-0 mt-1" size={26} />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">TNStartup Mentor</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Recognised as a mentor under the TNStartup initiative, advising early-stage cybersecurity startups on
                  product strategy, technical direction and market readiness.
                </p>
              </div>
            </motion.div>

            <p className="text-xs font-mono uppercase tracking-wider text-slate-500">From former students</p>
            {RECOMMENDATIONS.map((r, index) => (
              <motion.figure
                key={r.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-xl border-l-4 border-matrix-green"
              >
                <Quote className="text-matrix-green mb-3" size={22} />
                <blockquote className="text-slate-700 leading-relaxed">“{r.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{r.author}</span> · {r.relation} (LinkedIn recommendation)
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
