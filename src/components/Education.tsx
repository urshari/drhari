import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/profile';

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between border-b border-slate-200 pb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 flex items-center gap-3">
            <GraduationCap className="text-neon-blue" size={40} />
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl border-t-4 border-neon-blue relative overflow-hidden"
            >
              <span className="text-sm font-mono text-slate-500 mb-2 block">{edu.years}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
              <p className="text-slate-700 font-medium mb-4">{edu.specialization}</p>
              <p className="text-sm text-slate-600">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
