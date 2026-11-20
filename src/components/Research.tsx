import { FileText, ExternalLink } from 'lucide-react';
import { PROFILE, ACADEMIC_LINKS } from '../data/profile';
import { Reveal, SectionHeader } from './Reveal';
import { useState } from 'react';
import { Modal } from './Modal';

const publications = [
  { title: "Blockchain-Enabled Edge Computing with MEMAC: An Adaptive Clustering Framework for Secure and Energy-Efficient UWSNs in Marine Environment Monitoring", journal: "Franklin Open (Elsevier)", year: "2026" },
  { title: "An energy efficient routing protocol with fuzzy neural networks in wireless sensor network", journal: "Ain Shams Engineering Journal", year: "2024" },
  { title: "Enhancing IoT Security: A Blockchain-Based Mitigation Framework for Deauthentication Attacks", journal: "International Journal of Networked and Distributed Computing (Springer)", year: "2024" },
  { title: "Cognitive radio spectrum allocation using Nash equilibrium with multiple scheduling resource selection algorithm", journal: "Ain Shams Engineering Journal", year: "2024" },
  { title: "Fuzzified swarm intelligence framework using FPSOR algorithm for high-speed MANET- Internet of Things (IoT)", journal: "Measurement: Sensors", year: "2024" },
  { title: "Implementation of industrial security systems through the Internet of Things", journal: "AIP Conference Proceedings", year: "2023" },
  { title: "Data dissemination protocol for VANETs to optimize the routing path using hybrid particle swarm optimization", journal: "Telecommunication Systems", year: "2023" },
  { title: "ZHRP-DCSEI, a novel hybrid routing protocol for mobile ad-hoc networks to optimize energy using dynamic cuckoo search", journal: "Wireless Personal Communications", year: "2021" },
  { title: "Certain Investigation on IOT Based Smart Pill Carafe in Health Care", journal: "Journal of Physics: Conf.Series", year: "2021" },
  { title: "A Quantum-Based Blockchain Approach to Voting Protocol Using Hyperledger Sawtooth", journal: "Journal of Physics: Conf. Series", year: "2021" },
  { title: "Dynamic Clinical Trials Management in an unreliable Environment using Blockchain", journal: "Design Engineering", year: "2021" },
  { title: "A Novel Artificial Intelligence based Autonomous E- Cycle", journal: "Design Engineering", year: "2021" },
  { title: "The Efficient Data Security In Medical Health Report Using Block Chain Technology", journal: "Dogo Rangsang Research Journal", year: "2020" },
  { title: "Digital Forensics Using Blockchain", journal: "International Journal of Recent Technology and Engineering", year: "2019" },
  { title: "An Efficient License Plate Recognition System", journal: "International Journal of Scientific Research in Computer Science", year: "2019" },
  { title: "EMOTICON PROGNOSIS USING MACHINE LEARNING", journal: "International Journal of Advance Engineering and Research", year: "2018" },
  { title: "Hash Table-based Node Identification and M-Detection in MANETS", journal: "IJAEET", year: "2017" },
  { title: "Internet Data Traffic Analysis Using TRAP GL-VQ Algorithm", journal: "Internet Data Traffic Analysis", year: "2017" },
  { title: "Trust Based Fuzzy Aided ACO for Optimal Routing with Security in Manet", journal: "Asian Journal of Research in Social Sciences", year: "2016" },
  { title: "Improved Cuckoo Search Optimization Based Energy-Delay Aware Routing Algorithm in MANET", journal: "International Journal of Control Theory", year: "2016" },
  { title: "A Survey On Various Traffic Management Schemes For Traffic Clearance", journal: "IJETCSE", year: "2016" },
  { title: "RFID And GSM Based Smart Traffic Light Control System", journal: "Journal of Applied Sciences Research", year: "2015" },
  { title: "Probability Based Optimized Energy Efficient Routing Algorithm for Mobile AD-HOC Network", journal: "Middle-East Journal of Scientific Research", year: "2014" },
  { title: "Bio-Inspired Metaheuristic Algorithm for Network Intrusion Detection System of Architecture", journal: "IGI Global", year: "2024" },
  { title: "Deep Reinforcement Learning for Resource Allocation in Wireless Communication Systems", journal: "ICONSTEM / IEEE", year: "2024" }
];

export const Research = () => {
  const [selectedPub, setSelectedPub] = useState<typeof publications[0] | null>(null);
  const latest = publications[0];

  return (
    <section id="research" className="section bg-slate-50 border-t border-slate-200">
      <div className="container-exec">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Research, Patents & Academic Foundation"
              title="Applied security research"
              intro="Peer-reviewed work in IoT security, blockchain, federated learning and wireless networks. Selected publications below; full record and citations on my research profiles."
            />
          </div>
          <Reveal className="lg:col-span-5 card p-6 self-start">
            <p className="eyebrow mb-4">Scholarly profiles</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ACADEMIC_LINKS.map((l) => (
                <li key={l.title}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 hover:border-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <img src={l.image} alt="" width={22} height={22} loading="lazy" className="h-[22px] w-[22px] object-contain" />
                    {l.title}
                    <ExternalLink size={13} className="ml-auto text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mb-6 rounded-2xl bg-navy-950 p-7 md:p-8 text-white flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-teal-300">Latest publication · Aug 2026</p>
            <h3 className="mt-3 text-lg md:text-xl font-semibold leading-snug max-w-3xl">{latest.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{latest.journal}</p>
          </div>
          <a
            href={PROFILE.scholarWorks}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Google Scholar <ExternalLink size={14} />
          </a>
        </Reveal>

        <div className="card p-2">
          <ul className="max-h-[560px] overflow-y-auto divide-y divide-slate-100">
            {publications.slice(1).map((pub) => (
              <li key={pub.title}>
                <button
                  type="button"
                  onClick={() => setSelectedPub(pub)}
                  className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 px-4 py-4 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <span className="flex gap-3 items-start">
                    <FileText className="text-slate-300 group-hover:text-teal-700 shrink-0 mt-0.5" size={18} />
                    <span>
                      <span className="block text-navy-950 font-medium text-[15px] leading-snug group-hover:text-teal-800">
                        {pub.title}
                      </span>
                      <span className="block text-slate-500 text-sm mt-1">{pub.journal}</span>
                    </span>
                  </span>
                  <span className="text-xs font-semibold text-slate-500 tabular-nums md:shrink-0 pl-7 md:pl-0">{pub.year}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal isOpen={!!selectedPub} onClose={() => setSelectedPub(null)} title="Research Publication">
        {selectedPub && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-navy-950 leading-tight">{selectedPub.title}</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm py-2">
              <span className="text-slate-700">{selectedPub.journal}</span>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{selectedPub.year}</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              Full details, co-authors and citations are listed on my Google Scholar profile.
            </p>
            <div className="flex gap-4 pt-4 mt-6 border-t border-slate-100">
              <a
                href={PROFILE.scholarWorks}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-navy-950 text-white hover:bg-navy-800 rounded-lg transition-colors font-medium text-sm"
              >
                <ExternalLink size={16} /> View on Google Scholar
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
