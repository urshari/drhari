import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'figure';
}

/**
 * Subtle scroll reveal. `once: true` + `amount: 'some'` means an element is revealed as soon as
 * any part of it enters the viewport, so nothing stays invisible on tall layouts or small screens.
 */
export const Reveal = ({ children, delay = 0, className, as = 'div' }: RevealProps) => {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some', margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Comp>
  );
};

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ eyebrow, title, intro, dark = false, align = 'left' }: SectionHeaderProps) => (
  <Reveal className={`mb-12 md:mb-14 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <p className={`text-xs font-semibold uppercase tracking-eyebrow ${dark ? 'text-teal-300' : 'text-teal-700'}`}>
      {eyebrow}
    </p>
    <h2 className={`mt-3 text-3xl md:text-4xl font-semibold ${dark ? 'text-white' : 'text-navy-950'}`}>{title}</h2>
    {intro && (
      <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>
    )}
  </Reveal>
);
