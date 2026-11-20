import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Same approach as the live site: opens the visitor's email client with a pre-filled message.
  // No third-party form service, so no data leaves the browser until the visitor sends the email.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = name.trim();
    const r = email.trim();
    const m = message.trim();
    if (!n || !r || !m) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${n}`);
    const body = encodeURIComponent(`Name: ${n}\nEmail: ${r}\n\nMessage:\n${m}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };
  const input =
    'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:bg-white/10 transition-colors';

  return (
    <section id="contact" className="section bg-navy-950 text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-teal-600/10 blur-[120px]" />
      <div className="container-exec relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <SectionHeader
              dark
              eyebrow="Executive Engagement"
              title="Let's talk cyber risk, resilience and partnerships"
              intro="Open to conversations on cybersecurity strategy, GRC and digital-trust engagements, India–Israel technology partnerships, speaking invitations and advisory roles."
            />

            <Reveal className="space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 group">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-teal-300 group-hover:border-teal-400 transition-colors">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-eyebrow text-slate-400">Email</span>
                  <span className="block font-medium group-hover:text-teal-200 transition-colors">{PROFILE.email}</span>
                </span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-teal-300 group-hover:border-teal-400 transition-colors">
                  <Linkedin size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-eyebrow text-slate-400">LinkedIn</span>
                  <span className="block font-medium group-hover:text-teal-200 transition-colors">linkedin.com/in/harisuryanarayanan</span>
                </span>
              </a>
            </Reveal>

            <Reveal className="mt-10">
              <p className="text-xs uppercase tracking-eyebrow text-slate-400 mb-3">Profiles</p>
              <div className="flex flex-wrap gap-2.5">
                {SOCIAL_LINKS.map((l) => (
                  <a
                    key={l.title}
                    href={l.href}
                    title={l.title}
                    aria-label={l.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5 hover:-translate-y-0.5 transition-transform"
                  >
                    <img src={l.image} alt={l.title} width={28} height={28} loading="lazy" className="h-full w-full object-contain" />
                  </a>
                ))}
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-navy-950 hover:-translate-y-0.5 transition-transform"
                >
                  <Github size={20} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6">
            <form
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-9 space-y-5"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input id="contact-name" name="name" autoComplete="name" type="text" placeholder="Your name"
                  value={name} onChange={(e) => setName(e.target.value)} className={input} required />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input id="contact-email" name="email" autoComplete="email" type="email" placeholder="you@company.com"
                  value={email} onChange={(e) => setEmail(e.target.value)} className={input} required />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea id="contact-message" name="message" rows={5} placeholder="How can I help?"
                  value={message} onChange={(e) => setMessage(e.target.value)} className={`${input} resize-none`} required />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 py-3.5 font-semibold text-white hover:bg-teal-500 transition-colors"
              >
                Send via email
                <Send size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-xs text-slate-500 text-center">Opens your email app with the message pre-filled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
