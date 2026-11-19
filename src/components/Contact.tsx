import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, GraduationCap } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/urshari@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Portfolio Contact from ${name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s <span className="text-neon-blue glow-text">Connect</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Work with me</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Open to conversations on cybersecurity strategy, GRC and digital-trust engagements, India–Israel technology partnerships, speaking invitations and advisory roles.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-slate-700 hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-neon-blue/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Email</p>
                  <p className="font-semibold">{PROFILE.email}</p>
                </div>
              </a>

              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border-slate-200 group-hover:border-neon-blue/50 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">LinkedIn</p>
                  <p className="font-semibold">linkedin.com/in/harisuryanarayanan</p>
                </div>
              </a>


            </div>

            <div className="flex gap-4 mt-8">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-neon-blue/20 hover:text-slate-900 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-neon-blue/20 hover:text-slate-900 transition-all">
                <Github size={20} />
              </a>
              <a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-neon-blue/20 hover:text-slate-900 transition-all">
                <GraduationCap size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-xl neon-border relative"
            onSubmit={handleSubmit}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

            <div className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-600 mb-2">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-100/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-neon-blue/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-100/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-neon-blue/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-100/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-neon-blue/10 border border-neon-blue text-slate-900 font-semibold rounded-lg hover:bg-neon-blue/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send message'}
                                {status !== 'loading' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center text-sm"
                >
                  Thank you. Your message has been sent.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center text-sm"
                >
                  Sorry, the message could not be sent. Please email me directly.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
