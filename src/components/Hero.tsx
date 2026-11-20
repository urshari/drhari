import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Linkedin, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

const focus = ['Cybersecurity Strategy & GRC', 'Digital Trust', 'Enterprise Resilience', 'Indo-Israel Partnerships'];

export const Hero = () => {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } };

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Subtle architectural grid + teal glow, pure CSS (no external assets) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse at 70% 40%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, #000 30%, transparent 75%)',
        }}
      />
      <div aria-hidden="true" className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-teal-600/20 blur-[120px]" />
      <div aria-hidden="true" className="absolute bottom-[-30%] left-[-10%] h-[480px] w-[480px] rounded-full bg-steel-600/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-36 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.p {...fade(0)} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-teal-300">
              <span className="h-px w-10 bg-teal-400" />
              Cybersecurity Strategy · GRC · Digital Trust
            </motion.p>

            <motion.h1 {...fade(0.05)} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              {PROFILE.name}
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-2xl sm:text-3xl font-medium leading-snug text-slate-200">
              Turning cyber risk into <span className="text-teal-300">business resilience.</span>
            </motion.p>

            <motion.p {...fade(0.15)} className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
              Enterprise and B2B cybersecurity leadership at TechGuard Labs Foundation, building Indo-Israel
              technology partnerships. {PROFILE.yearsExperience} years bridging leadership, business teams and engineers
              to make cybersecurity a business capability.
            </motion.p>

            <motion.div
              {...fade(0.2)}
              className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300 border-y border-white/10 py-4"
            >
              <span className="font-medium text-white">{PROFILE.currentRole}</span>
              <span className="text-slate-600">·</span>
              <span>CISA</span>
              <span className="text-slate-600">·</span>
              <span>Ph.D.</span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-teal-300" /> {PROFILE.location}
              </span>
            </motion.div>

            <motion.ul {...fade(0.25)} className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
              {focus.map((f) => (
                <li key={f} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200">
                  {f}
                </li>
              ))}
            </motion.ul>

            <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/30 hover:bg-teal-500 transition-colors"
              >
                Get in touch
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 } })}
            className="lg:col-span-5"
          >
            <figure className="relative mx-auto w-full max-w-[420px]">
              {/* Architectural offset frame */}
              <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[26px] border border-teal-400/40" />
              <div className="relative overflow-hidden rounded-[24px] bg-slate-100 ring-1 ring-white/15 shadow-2xl shadow-black/40">
                <img
                  src="/profile-photo.jpg"
                  alt="Dr. Harihara Gopalan S in a charcoal blazer with an India–Israel lapel pin"
                  width={960}
                  height={1280}
                  fetchPriority="high"
                  decoding="async"
                  className="block aspect-[4/5] w-full object-cover object-top"
                />
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-steel-500 to-teal-500" />
              </div>
              <figcaption className="relative -mt-10 mx-5 rounded-xl border border-white/10 bg-navy-900/90 backdrop-blur px-5 py-4 shadow-xl">
                <p className="text-sm font-semibold text-white">Senior Manager · TechGuard Labs Foundation</p>
                <p className="mt-0.5 text-xs text-teal-300">Indo-Israel Cybersecurity Ecosystem</p>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
