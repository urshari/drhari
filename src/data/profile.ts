// Single source of truth for profile content.
// Facts verified against Dr. Hari's LinkedIn profile and 2026 LinkedIn activity (Nov 2026). Update here, not in components.

export const PROFILE = {
  name: 'Dr. Harihara Gopalan S',
  shortName: 'Hari',
  location: 'Coimbatore, India',
  headline: 'Cybersecurity Strategy, GRC & Digital Trust Leader',
  currentRole: 'Senior Manager, TechGuard Labs Foundation',
  yearsExperience: '18+',
  email: 'urshari@gmail.com',
  // Exact URLs as published on the live site (Nov 2026).
  linkedin: 'https://www.linkedin.com/in/harisuryanarayanan/',
  linkedinCertifications: 'https://www.linkedin.com/in/harisuryanarayanan/details/certifications/',
  facebook: 'https://www.facebook.com/harisuryanarayanan',
  sciprofiles: 'https://sciprofiles.com/profile/1579844',
  github: 'https://github.com/urshari',
  scholar: 'https://scholar.google.com/citations?user=DsMW6P0AAAAJ&hl=en',
  scholarWorks: 'https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=DsMW6P0AAAAJ',
  orcid: 'https://orcid.org/0000-0003-0830-9742',
  scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57194520134',
  webOfScience: 'https://www.webofscience.com/wos/author/record/AAJ-9817-2021',
  techguard: 'https://www.techguardlabs.com/',
} as const;

// Profile links shown as icons (research + contact + footer). Icons ported from the live site's /badges/.
export const SOCIAL_LINKS = [
  { title: 'LinkedIn', href: PROFILE.linkedin, image: '/badges/linkedin.svg' },
  { title: 'Google Scholar', href: PROFILE.scholar, image: '/badges/google-scholar.svg' },
  { title: 'ORCID', href: PROFILE.orcid, image: '/badges/orcid.svg' },
  { title: 'Scopus', href: PROFILE.scopus, image: '/badges/scopus.svg' },
  { title: 'Web of Science', href: PROFILE.webOfScience, image: '/badges/web-of-science.svg' },
  { title: 'SciProfiles', href: PROFILE.sciprofiles, image: '/badges/sciprofiles.svg' },
  { title: 'Facebook', href: PROFILE.facebook, image: '/badges/facebook.svg' },
];

// Scholarly profiles, shown in the Research section (kept out of the hero).
export const ACADEMIC_LINKS = SOCIAL_LINKS.filter((l) =>
  ['Google Scholar', 'ORCID', 'Scopus', 'Web of Science', 'SciProfiles'].includes(l.title),
);

export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  period: string;
  current?: boolean;
  /** Visual emphasis on the timeline: industry roles are highlighted. */
  track: 'industry' | 'it-leadership' | 'academic' | 'research' | 'community';
  description: string;
  bullets?: string[];
  website?: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Manager',
    organization: 'TechGuard Labs Foundation',
    location: 'Coimbatore · Indo-Israeli cybersecurity company',
    period: 'Apr 2026 – Present',
    current: true,
    track: 'industry',
    website: 'https://www.techguardlabs.com/',
    description:
      'Leads business strategy, client engagement, strategic partnerships and solution delivery across enterprise and consumer markets.',
    bullets: [
      'Translates cyber risk, compliance and business priorities into practical security roadmaps',
      'Leads enterprise security, GRC, digital-trust and cyber-resilience engagements',
      'Builds India–Israel technology and cybersecurity partnerships',
      'Drives market expansion for B2B and B2C cybersecurity services',
      'Aligns technical and business teams around delivery',
      'Represents the organisation in industry, academic and community forums',
    ],
  },
  {
    role: 'Founder & CEO',
    organization: 'Zyphron Technologies Pvt. Ltd.',
    location: 'Bengaluru',
    period: 'Jul 2024 – Jun 2026',
    track: 'industry',
    description:
      'Founded and led a cybersecurity-focused technology venture incubated under the National Innovation and Startup Policy (NISP) at SREC SPARK.',
  },
  {
    role: 'Head of Information Technology Services',
    organization: 'Sri Ramakrishna Engineering College',
    location: 'Coimbatore',
    period: 'Jun 2008 – Nov 2024',
    track: 'it-leadership',
    description:
      'Led campus IT services and large-scale infrastructure: fibre backbone and core switching, enterprise wireless, security operations, centralised CCTV surveillance, access control and operational continuity.',
  },
  {
    role: 'Associate Professor · Assistant Professor',
    organization: 'Sri Ramakrishna Engineering College',
    location: 'Coimbatore',
    period: 'Jun 2008 – Jun 2026',
    track: 'academic',
    description:
      'Associate Professor (Dec 2018 – Jun 2026) and Assistant Professor (Jun 2008 – Dec 2018). Taught computer science, networks and cybersecurity; set up cybersecurity research labs, led the Network Research Group and coordinated Smart India Hackathon participation.',
  },
  {
    role: 'IASc Summer Research Fellow',
    organization: 'CSIR-Central Mechanical Engineering Research Institute (CMERI)',
    location: 'Durgapur',
    period: 'Jun – Aug 2025',
    track: 'research',
    description:
      'Researched secure blockchain-enabled federated learning for Industrial IoT predictive maintenance, using digital-twin data across 100 simulated clients.',
  },
  {
    role: 'Vice President',
    organization: 'SREC Alumni Association',
    period: 'Oct 2022 – Present',
    current: true,
    track: 'community',
    description: 'Alumni association leadership role at Sri Ramakrishna Engineering College.',
  },
];

export const MEMBERSHIPS = [
  { name: 'ISACA Coimbatore Chapter', since: 'Member since Jul 2025' },
  { name: 'IEEE & IEEE Computer Society', since: 'Member since Jan 2024' },
  { name: 'EC-Council', since: 'Volunteer consultant (education)' },
  { name: 'CertFirst', since: 'Volunteer consultant (education)' },
];

export const EXPERTISE = [
  {
    title: 'Cybersecurity Strategy & GRC',
    description:
      'Turning cyber risk, regulation and business priorities into security roadmaps, governance and audit-ready compliance programmes.',
  },
  {
    title: 'Digital Trust & Enterprise Resilience',
    description:
      'Enterprise and consumer cyber protection, resilience planning and practical cybersecurity awareness that leadership teams can act on.',
  },
  {
    title: 'Indo-Israel Partnerships & Advisory',
    description:
      'Building India–Israel technology and cybersecurity partnerships at TechGuard Labs Foundation, with Cyber Range training at Ariel University and startup mentoring under the TNStartup initiative.',
  },
  {
    title: 'Enterprise IT Operations & Applied Security Research',
    description:
      'Headed campus IT services at SREC (2008 – 2024): fibre backbone, enterprise wireless, security operations, CCTV and access control. Backed by peer-reviewed research in blockchain, federated learning and IIoT security, and a published patent.',
  },
];

// Notable credentials only. Status is shown honestly: only CISA is presented as current.
// `verify` links and badge images are ported from the live site.
export interface Certification {
  name: string;
  issuer: string;
  year: string;
  current: boolean;
  badge?: string;
  badgeWide?: boolean;
  verify?: string;
  verifyLabel?: string;
}

export const CERTIFICATIONS: Certification[] = [
  { name: 'Certified Information Systems Auditor (CISA)', issuer: 'ISACA', year: '2026', current: true },
  {
    name: 'Certified Chief Information Security Officer (C|CISO)',
    issuer: 'EC-Council',
    year: '2024',
    current: false,
    badge: '/badges/cciso.svg',
    badgeWide: true,
    verify: PROFILE.linkedinCertifications,
    verifyLabel: 'View on LinkedIn',
  },
  {
    name: 'Certified Ethical Hacker (C|EH)',
    issuer: 'EC-Council',
    year: '2023',
    current: false,
    badge: '/badges/ceh-badge.png',
    verify: 'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=8pn0vFdle07YbNJY0FAjNfK0UV98ncfHwyzLA8jZTDY=',
    verifyLabel: 'Verify with EC-Council',
  },
  { name: 'Certified Blockchain Associate', issuer: 'Kerala Blockchain Academy', year: '', current: false },
];

// Recognition (not a certification).
export const RECOGNITION = {
  name: 'Cybersecurity Career Mentor',
  issuer: 'EC-Council',
  badge: '/badges/career-mentor-badge.png',
  verify: 'https://aspen.eccouncil.org/VerifyBadge?type=mentor&a=8pn0vFdle07YbNJY0FAjNfK0UV98ncfHwyzLA8jZTDY=',
};

export const EDUCATION = [
  { degree: 'Ph.D.', specialization: 'Mobile Ad hoc Networks', institution: 'Anna University, Chennai', years: '2011 – 2017' },
  { degree: 'M.E., Computer Science & Engineering', specialization: 'Computer Science', institution: 'Anna University', years: '2008 – 2010' },
  { degree: 'Master of Computer Applications (MCA)', specialization: 'Computer Applications', institution: 'PSG College of Arts and Science', years: '2005 – 2008' },
  { degree: 'B.Tech, Information Technology', specialization: 'Information Technology', institution: 'Sri Ramakrishna Engineering College', years: '2001 – 2004' },
];

export type EventRole = 'Valedictory Guest' | 'Industry Representative' | 'Industry Delegate' | 'Speaker' | 'Operations Leadership' | 'Host Team';

export interface IndustryEvent {
  name: string;
  date: string;
  host: string;
  role: EventRole;
  /** Exact role wording as described on LinkedIn. */
  roleDetail: string;
  topic?: string;
  summary: string;
  photo?: { src: string; alt: string; width: number; height: number };
}

// Featured tier: industry summits, conclaves and executive forums (2026), verified from LinkedIn.
// Roles are stated exactly — attendee/representative roles are never presented as keynotes.
export const INDUSTRY_EVENTS: IndustryEvent[] = [
  {
    name: 'SREC Cyber Week Valedictory — OWASP SREC Chapter',
    date: 'Oct 2026',
    host: 'Sri Ramakrishna Engineering College · OWASP SREC Chapter',
    role: 'Valedictory Guest',
    roleDetail: 'Invited Guest — Valedictory Ceremony (3rd consecutive year)',
    summary:
      'Returned as invited guest for the Cyber Week valedictory ceremony for the third consecutive year — this time from industry — celebrating student-led cybersecurity initiatives alongside chapter members and faculty coordinators.',
    photo: {
      src: '/speaking-owasp-cyberweek-2026.jpg',
      alt: 'Dr. Harihara Gopalan S as invited guest at the OWASP SREC Chapter Cyber Week valedictory ceremony, Oct 2026',
      width: 1146,
      height: 777,
    },
  },
  {
    name: 'Sudarshana Executive Forum (49th Fortnightly Meeting)',
    date: 'Sep 2026',
    host: 'BBB Trust, Coimbatore',
    role: 'Speaker',
    roleDetail: 'Speaker (Knowledge Sharing Session)',
    topic: 'MSME Cyber Threat Landscape',
    summary: 'Practical cyber resilience and the evolving threat landscape for business leaders and entrepreneurs.',
  },
  {
    name: 'CII Check Post ’26 — Cyber Security Conclave (3rd Edition)',
    date: 'Jul 2026',
    host: 'Confederation of Indian Industry (CII), Coimbatore',
    role: 'Industry Delegate',
    roleDetail: 'Industry Delegate (TechGuard Labs Foundation)',
    summary:
      'Represented TechGuard Labs Foundation at CII’s regional cybersecurity conclave themed “The Cyber Divide: Turning Digital Risk into Business Resilience”, featuring keynotes from the Director General of CERT-In and Reliance Industries’ Group CISO.',
  },
  {
    name: 'TechGuard Labs Foundation Open Day',
    date: '23 Jun 2026',
    host: 'SREC SPARK, Coimbatore · TechGuard Labs Foundation',
    role: 'Host Team',
    roleDetail: 'Organising Leadership Team (TechGuard Labs Foundation)',
    summary:
      'Hosted an open day connecting aspiring security professionals with cybersecurity career pathways, practitioner insights and the Ariel University Master’s programme.',
  },
  {
    name: 'TechGuard Labs Coimbatore Office Inauguration',
    date: '15 May 2026',
    host: 'SREC SPARK, Coimbatore · SNR Board of Trustees & Ariel University',
    role: 'Operations Leadership',
    roleDetail: 'Invested as Senior Manager leading Coimbatore operations',
    summary:
      'Formally invested as Senior Manager to lead Coimbatore office operations at the launch presided over by the SNR Board of Trustees, marking the first project agreement with SRH Coimbatore with addresses from the Israel Economic Mission to South India and Ariel University.',
  },
  {
    name: 'Israel Cyber Day @ Bangalore',
    date: '7 May 2026',
    host: 'Four Seasons Embassy One, Bangalore · Israel Economic & Trade Mission to South India',
    role: 'Industry Representative',
    roleDetail: 'Industry Representative (TechGuard Labs Foundation)',
    summary:
      'Represented TechGuard Labs Foundation in B2B sessions and roundtables alongside global Israeli cybersecurity leaders and Indian industry stakeholders, including engagements with the Consul General of Israel (Ms. Orit Weitzman) and the Economic Attaché of Israel.',
  },
  {
    name: 'ISEA–CISO Leadership Meet 2026',
    date: 'Mar 2026',
    host: 'Chennai · C-DAC, ISEA Project, Ministry of Electronics & IT (MeitY)',
    role: 'Speaker',
    roleDetail: 'Speaker',
    topic: 'Cyber Resilience in the Era of AI-Driven Threats for CISOs',
    summary: 'Session for CISOs and security leaders on building cyber resilience against AI-driven threats.',
  },
];

// Secondary tier: workshops, academic forums and community sessions.
export const SPEAKING = [
  {
    title: 'Inauguration & opening session: “Inside the Hacker’s Mind: Understanding Cyber Threats and Digital Attacks”',
    event: 'AICTE VAANI Workshop on Cyber Security, Ethical AI & Smart Digital Defense',
    host: 'KPR Institute of Engineering and Technology',
    date: '28–30 Sep 2026',
  },
  {
    title: 'AI and Cybersecurity',
    event: 'AICTE ATAL Faculty Development Programme',
    host: 'Dr. B. R. Ambedkar Institute of Technology, Port Blair',
    date: 'Jan 2025',
  },
];

export const EARLIER_SPEAKING = ['VIT', 'KGISL (ATAL FDP)', '9th Global Education Summit, IIC Delhi', 'Hackers Community Coimbatore'];

export const RECOMMENDATIONS = [
  {
    quote:
      'His classes were never just theoretical; they were practical, experimental, and centered around hands-on learning.',
    author: 'Archana B',
    relation: 'Former student, SREC',
  },
  {
    quote:
      'His dedication to teaching, approachable nature, and commitment to student development made a significant impact on my academic journey.',
    author: 'Tharanika Naveen',
    relation: 'Former student, SREC',
  },
];

/**
 * Impact metrics. Only entries with a non-null `value` are rendered.
 * NEVER fill these with estimates — each value must be one Dr. Hari can stand behind.
 * Shown values are taken from the live site (Nov 2026): Rs. 30 Lakhs (CDAC-Chennai), 10+ talks, 5+ years mentorship.
 */
export interface ImpactMetric {
  value: string | null;
  label: string;
  context: string;
}

export const IMPACT: ImpactMetric[] = [
  {
    value: '₹30 Lakhs',
    label: 'Technology deployment',
    context: 'Collaborative R&D with CDAC-Chennai: cybersecurity consulting, workforce training and online assessment systems.',
  },
  // The next two figures are published on the live site (Speaking & Mentorship section).
  { value: '10+', label: 'Executive talks & keynotes', context: 'Leadership forums, cybersecurity communities and professional training programmes.' },
  { value: '5+ years', label: 'Innovation mentorship', context: 'Mentoring student innovation teams, including Smart India Hackathon participation.' },
  // TODO(Hari): supply real numbers, then set `value` to display them.
  { value: null, label: 'Organisations advised', context: 'TechGuard Labs Foundation engagements (security, GRC, digital trust)' },
  { value: null, label: 'Assessments / audits delivered', context: 'Risk assessments, compliance or IS audit engagements' },
  { value: null, label: 'Team size led', context: 'Largest team / function led (e.g. SREC IT Services)' },
  { value: null, label: 'Endpoints & network scale managed', context: 'SREC campus IT (computers, access points, backbone) — confirm current figures' },
  { value: null, label: 'Partnerships established', context: 'India–Israel and academic/industry partnerships' },
  { value: null, label: 'Professionals & students trained', context: 'Workforce training, FDPs, workshops' },
];

export const PARTNERSHIPS = [
  {
    title: 'India–Israel Cybersecurity',
    location: 'TechGuard Labs Foundation · Ariel University, Israel',
    description:
      'Indo-Israel technology partnerships at TechGuard, launched in 2026 as an Indo-Israeli cybersecurity consulting, auditing and training centre serving South India, with addresses from the Head of the Israel Economic Mission to South India and the Rector of Ariel University. Completed hands-on training in Cyber Range-based simulation environments at Ariel University, strengthening practical incident response and enterprise security readiness.',
  },
  {
    title: 'Collaborative R&D',
    location: 'CDAC-Chennai',
    description:
      'Drove strategic collaboration on cybersecurity consulting, workforce training, online assessment systems and a Rs. 30 Lakhs technology deployment.',
  },
  {
    title: 'International Partnerships',
    location: 'Swinburne University & APU, Malaysia',
    description:
      'Built cross-border partnerships focused on cybersecurity knowledge exchange, applied programmes, professional training, joint research and faculty exchange.',
  },
];
