import { motion } from 'framer-motion';
import { Globe, Handshake, Plane } from 'lucide-react';
import { IMPACT, PARTNERSHIPS } from '../data/profile';

const partnershipIcons = [
  <Globe key="il" size={28} className="text-neon-blue" />,
  <Handshake key="cdac" size={28} className="text-matrix-green" />,
  <Plane key="my" size={28} className="text-purple-glow" />,
];

export const Impact = () => {
  // Only metrics with a confirmed value are shown; TODO entries in IMPACT render nothing.
  const metrics = IMPACT.filter((m) => m.value !== null);

  return (
    <section id="impact" className="py-24 bg-slate-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Impact & <span className="text-neon-blue glow-text">Partnerships</span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Building cybersecurity capability across borders, institutions and industry.
          </p>
        </motion.div>

        {metrics.length > 0 && (
          <div className={`grid grid-cols-1 ${metrics.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''} gap-6 mb-12`}>
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-xl p-8 border-t-4 border-matrix-green flex flex-col gap-3"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900">{m.value}</div>
                <div>
                  <p className="text-sm font-mono uppercase tracking-wider text-slate-500">{m.label}</p>
                  <p className="text-slate-600 mt-1">{m.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNERSHIPS.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-slate-200 hover:border-neon-blue/40 transition-all duration-300"
            >
              <div className="mb-5">{partnershipIcons[index]}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-xs font-mono text-neon-blue mb-4">{p.location}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
