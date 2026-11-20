import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/profile';
import { Reveal } from './Reveal';

export const Education = () => {
  return (
    <section id="education" className="pb-20 md:pb-28 bg-slate-50 border-b border-slate-200">
      <div className="container-exec">
        <Reveal className="mb-8 border-t border-slate-200 pt-12">
          <p className="eyebrow">Academic foundation</p>
          <h3 className="mt-2 text-2xl font-semibold text-navy-950 flex items-center gap-3">
            <GraduationCap className="text-teal-700" size={26} /> Education
          </h3>
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {EDUCATION.map((edu, index) => (
            <Reveal as="li" key={edu.degree} delay={index * 0.05} className="card p-6">
              <span className="text-xs font-semibold text-slate-500 tabular-nums">{edu.years}</span>
              <h4 className="mt-2 text-lg font-semibold text-navy-950">{edu.degree}</h4>
              <p className="mt-1 text-sm font-medium text-teal-700">{edu.specialization}</p>
              <p className="mt-3 text-sm text-slate-600">{edu.institution}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
