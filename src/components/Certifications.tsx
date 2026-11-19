import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Award, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../data/profile';

const icons = [ShieldCheck, Lock, Award, CheckCircle];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional <span className="text-neon-blue glow-text">Certifications</span>
          </h2>
          <p className="text-slate-600 text-base">Notable credentials, with the year each was earned.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-panel p-6 rounded-xl flex flex-col items-center text-center ${cert.current ? 'border-t-4 border-matrix-green' : ''}`}
              >
                <Icon size={40} className={`${cert.current ? 'text-matrix-green' : 'text-neon-blue'} mb-4`} />
                <h3 className="text-slate-900 font-semibold leading-tight">{cert.name}</h3>
                <p className="text-sm text-slate-600 mt-2">{cert.issuer}</p>
                {(cert.year || cert.current) && (
                  <p className="text-xs font-mono text-slate-500 mt-3">
                    {cert.year && `Earned ${cert.year}`}
                    {cert.current && (
                      <span className="ml-2 text-emerald-700 bg-matrix-green/10 px-2 py-0.5 rounded-full">Current</span>
                    )}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
