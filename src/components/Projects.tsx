import { motion } from 'framer-motion';
import { Cpu, Settings, Zap, Map } from 'lucide-react';

const projects = [
  {
    title: "Smart Electric Cycle with PAS and ADAS",
    domain: "AI with IoT and Mobile Application",
    description: "Patent (Published): Features pedal assisting modes, smart summon, self-driving, and remote control, managed through an application or manual switch.",
    tags: ["Patent", "AI", "IoT", "React Native"],
    icon: <Zap size={24} className="text-matrix-green" />
  },
  {
    title: "Plug and Play System Security Audit Tool",
    domain: "Cyber Security · Hackathon build",
    description: "An agent-based security audit tool for Windows and Linux with a centralized dashboard. Developed during the Kavach Hackathon at Centurion University.",
    tags: ["Security", "Linux", "Windows", "Audit"],
    icon: <Settings size={24} className="text-neon-blue" />
  },
  {
    title: "Prognosis of Forest Encroachment (Evergreen Watchdog)",
    domain: "AI with Image Processing · Student project",
    description: "A real-time forest monitoring system integrating satellite technology, image processing, web technology, and data sharing.",
    tags: ["Image Processing", "Satellite Tech", "AI"],
    icon: <Map size={24} className="text-purple-glow" />
  },
  {
    title: "Prevention of Forest Encroachment",
    domain: "AI & IoT · Smart India Hackathon 2019",
    description: "Developed as a student project for the Assam Forest Department during the Smart India Hackathon 2019 to detect and prevent encroachment.",
    tags: ["IoT", "AI", "Smart India Hackathon"],
    icon: <Cpu size={24} className="text-neon-blue" />
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Research & <span className="text-neon-blue glow-text">Builds</span>
          </h2>
          <p className="text-slate-600 text-base max-w-3xl mb-6">
            A published patent and mentored hackathon and student projects from my time at SREC.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl group relative overflow-hidden"
            >
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 glass-panel rounded-lg shrink-0">{project.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight">{project.title}</h3>
                  <p className="text-xs font-mono text-purple-glow tracking-wider mb-3">{project.domain}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-slate-700 bg-black/5 border border-slate-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
