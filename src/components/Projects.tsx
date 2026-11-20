import { Reveal } from './Reveal';
import { Cpu, Settings, Zap, Map } from 'lucide-react';

const projects = [
  {
    title: "Smart Electric Cycle with PAS and ADAS",
    domain: "AI with IoT and Mobile Application",
    description: "Patent (Published): Features pedal assisting modes, smart summon, self-driving, and remote control, managed through an application or manual switch.",
    tags: ["Patent", "AI", "IoT", "React Native"],
    icon: <Zap size={20} />
  },
  {
    title: "Plug and Play System Security Audit Tool",
    domain: "Cyber Security · Hackathon build",
    description: "An agent-based security audit tool for Windows and Linux with a centralized dashboard. Developed during the Kavach Hackathon at Centurion University.",
    tags: ["Security", "Linux", "Windows", "Audit"],
    icon: <Settings size={20} />
  },
  {
    title: "Prognosis of Forest Encroachment (Evergreen Watchdog)",
    domain: "AI with Image Processing · Student project",
    description: "A real-time forest monitoring system integrating satellite technology, image processing, web technology, and data sharing.",
    tags: ["Image Processing", "Satellite Tech", "AI"],
    icon: <Map size={20} />
  },
  {
    title: "Prevention of Forest Encroachment",
    domain: "AI & IoT · Smart India Hackathon 2019",
    description: "Developed as a student project for the Assam Forest Department during the Smart India Hackathon 2019 to detect and prevent encroachment.",
    tags: ["IoT", "AI", "Smart India Hackathon"],
    icon: <Cpu size={20} />
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="pb-20 md:pb-28 bg-slate-50">
      <div className="container-exec">
        <Reveal className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3 border-t border-slate-200 pt-12">
          <div>
            <p className="eyebrow">Patent & builds</p>
            <h3 className="mt-2 text-2xl font-semibold text-navy-950">Research &amp; builds</h3>
          </div>
          <p className="text-sm text-slate-600 max-w-xl">
            A published patent and mentored hackathon and student projects from my time at SREC.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.05} className="card card-hover p-6 flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-navy-800">
                {project.icon}
              </span>
              <div>
                <h4 className="text-lg font-semibold text-navy-950 leading-snug">{project.title}</h4>
                <p className="mt-1 text-xs font-medium text-teal-700">{project.domain}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
