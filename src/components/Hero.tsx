import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronRight, Linkedin, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="h-[2px] w-12 bg-neon-blue inline-block"></span>
            <span className="text-neon-blue font-mono font-medium tracking-wider uppercase text-xs sm:text-sm">
              Cybersecurity Strategy · GRC · Digital Trust
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-4xl font-semibold text-slate-900 leading-snug"
          >
            Turning cyber risk into business resilience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl font-medium text-slate-700 min-h-[64px] md:min-h-0"
            aria-hidden="true"
          >
            <span className="mr-3 text-matrix-green">&gt;</span>
            <TypeAnimation
              sequence={[
                'Senior Manager, TechGuard Labs Foundation',
                2200,
                'Cybersecurity Strategy & GRC',
                2000,
                'Digital Trust & Cyber Resilience',
                2000,
                'Indo-Israel Technology Partnerships',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-xl text-slate-600 max-w-3xl leading-relaxed border-l-2 border-purple-glow pl-4"
          >
            {PROFILE.yearsExperience} years across cybersecurity, IT leadership, research and academia. I help
            organisations turn cybersecurity from a technical requirement into a business capability, bridging
            leadership, business teams and engineers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono text-slate-600"
          >
            <span>{PROFILE.currentRole}</span>
            <span className="text-slate-300">|</span>
            <span>CISA · Ph.D.</span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} /> {PROFILE.location}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded hover:bg-slate-700 transition-all group"
            >
              Get in touch
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-900 text-slate-900 font-semibold rounded hover:bg-slate-100 transition-all"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
