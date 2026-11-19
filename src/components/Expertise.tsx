import { motion } from 'framer-motion';
import { ShieldCheck, Fingerprint, FlaskConical, GraduationCap } from 'lucide-react';
import { EXPERTISE } from '../data/profile';

const icons = [
  <ShieldCheck key="grc" className="text-neon-blue" size={32} />,
  <Fingerprint key="trust" className="text-matrix-green" size={32} />,
  <FlaskConical key="research" className="text-purple-glow" size={32} />,
  <GraduationCap key="academic" className="text-neon-blue" size={32} />,
];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-20 relative bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Areas of <span className="text-neon-blue glow-text">Expertise</span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Where business priorities and security engineering meet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 border border-transparent hover:border-neon-blue/30"
            >
              <div className="mb-4">{icons[index]}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
