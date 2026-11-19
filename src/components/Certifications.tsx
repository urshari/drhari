import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, RECOGNITION } from '../data/profile';

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
                <div className="h-24 flex items-center justify-center mb-4">
                  {cert.badge ? (
                    <img
                      src={cert.badge}
                      alt={`${cert.name} badge`}
                      className={`h-20 sm:h-24 ${cert.badgeWide ? 'w-40 sm:w-48' : 'w-20 sm:w-24'} object-contain rounded-lg`}
                    />
                  ) : (
                    <Icon size={48} className={cert.current ? 'text-matrix-green' : 'text-neon-blue'} />
                  )}
                </div>
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
                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline"
                  >
                    {cert.verifyLabel} <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.a
          href={RECOGNITION.verify}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 mx-auto max-w-xl glass-panel rounded-xl p-5 flex items-center gap-5 hover:border-neon-blue/40 transition-colors"
        >
          <img src={RECOGNITION.badge} alt={`${RECOGNITION.name} badge`} width={72} height={74} className="w-16 h-16 object-contain shrink-0" />
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Recognition</p>
            <p className="font-semibold text-slate-900">
              {RECOGNITION.name} · {RECOGNITION.issuer}
            </p>
            <p className="text-sm text-slate-600 inline-flex items-center gap-1">
              Verify with EC-Council <ExternalLink size={14} />
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
