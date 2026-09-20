import { 
  MetricItem, 
  CareerRole, 
  ExpertiseCategory, 
  ImpactCard, 
  PhilosophyPillar, 
  InsightTopic, 
  CredentialItem 
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "NURUL NAZLEEN SUHAIRI",
  title: "Senior Manager, Asset Integrity",
  company: "Brunei Fertilizer Industries Sdn Bhd",
  location: "Brunei Darussalam & Malaysia",
  region: "Malaysia • Brunei • Southeast Asia",
  experienceYears: "19+",
  email: "nurul.nazleen.suhairi@gmail.com",
  phone: "+60 11-1922 7031",
  linkedin: "https://www.linkedin.com/in/nurul-nazleen-suhairi/",
  linkedinDisplay: "linkedin.com/in/nurul-nazleen-suhairi",
  heroHeadline: "Engineering Safer, More Reliable Industrial Operations.",
  heroSubheadline: "Where Asset Integrity, Process Safety and Operational Excellence Meet.",
  narrativeLead: "Senior engineering authority with 19+ years of progressive leadership across oil & gas, petrochemical, and fertilizer environments. Combines high-consequence risk governance with enterprise asset performance to protect capital, safeguard people, and ensure operational resilience.",
  cvDownloadLink: "/Nurul_Nazleen_Suhairi_CV.pdf",
  atsResumeLink: "/Nurul_Nazleen_Suhairi_ATS_Resume.pdf"
};

export const EXECUTIVE_METRICS: MetricItem[] = [
  {
    id: "metric-years",
    value: "19+",
    label: "YEARS LEADERSHIP",
    descriptor: "High-Consequence Industrial Operations",
    context: "Spanning oil & gas, petrochemical, and mega-scale fertilizer complexes across Malaysia and Brunei.",
    sourceRef: "PETRONAS • Brunei Fertilizer Industries • ASEAN Bintulu Fertilizer"
  },
  {
    id: "metric-oee",
    value: "+12%",
    label: "OEE IMPROVEMENT",
    descriptor: "Asset Performance Architecture",
    context: "Achieved double-digit Overall Equipment Effectiveness gain within six months of APM framework implementation.",
    sourceRef: "Brunei Fertilizer Industries (BFI) Sdn Bhd"
  },
  {
    id: "metric-fires",
    value: "0",
    label: "MAJOR FIRE INCIDENTS",
    descriptor: "Multi-Year Barrier Integrity",
    context: "Established rigorous fire prevention and proactive mitigation frameworks across operating units over multi-year tenure.",
    sourceRef: "PETRONAS Enterprise Process Safety Risk Management"
  },
  {
    id: "metric-mentees",
    value: "3+",
    label: "CIMAH COMPETENT PERSONS",
    descriptor: "Statutory Capability Development",
    context: "Engineers mentored to achieve DOSH Malaysia CIMAH Competent Person status and Technical Professional Career Progression (TPCP) Staff level.",
    sourceRef: "DOSH Malaysia Competency & PETRONAS TPCP"
  }
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: "asset-integrity",
    number: "01",
    title: "Asset Integrity & APM",
    tagline: "Preserving Physical Assets & Maximizing Lifecycle Availability",
    summary: "Institutionalizing risk-based inspection (RBI), mechanical integrity assurance, and asset performance management (APM) ecosystems to balance capital expenditure with prolonged mechanical reliability.",
    competencies: [
      "Asset Integrity Management (AIM)",
      "Asset Performance Management (APM)",
      "Reliability Centered Maintenance (RCM)",
      "Risk-Based Inspection (RBI)",
      "Plant Turnaround Strategy & QA/QC",
      "Mechanical Integrity & Asset Lifecycle Extension"
    ],
    deliverables: [
      "Enterprise APM frameworks delivering double-digit OEE gains",
      "Comprehensive turnaround joint-integrity protocols (zero-leak start-ups)",
      "Statutory baseline asset preservation assessments"
    ],
    standards: ["API 580/581", "ISO 55001", "ASME", "DOSH Statutory Inspection"]
  },
  {
    id: "process-safety",
    number: "02",
    title: "Process Safety Management",
    tagline: "Preventing High-Consequence Major Hazard Incidents",
    summary: "Directing enterprise PSM frameworks, executing rigorous hazard evaluations, and establishing robust physical and operational barriers to eliminate Loss of Primary Containment (LOPC).",
    competencies: [
      "Process Safety Management (PSM)",
      "Process Hazard Analysis (PHA) & HAZOP",
      "Quantitative Risk Assessment (QRA)",
      "ALARP Demonstration & Barrier Governance",
      "Loss of Primary Containment (LOPC) Mitigation",
      "Fire Prevention & Incident Root Cause Analysis (RCA)"
    ],
    deliverables: [
      "Zero major fire incident record across operating portfolios",
      "HAZOP leadership for high-risk ammonia and gas processing units",
      "Standardized barrier health verification audits"
    ],
    standards: ["PETRONAS PTS", "CCPS Guidelines", "DOSH CIMAH 1996", "IEC 61511"]
  },
  {
    id: "technical-governance",
    number: "03",
    title: "Technical Governance & Authority",
    tagline: "Definitive Engineering Assurance & Management of Change",
    summary: "Serving as designated Technical Authority for high-stakes engineering modifications, statutory dispensations, and ALARP validations across multinational plant environments.",
    competencies: [
      "Technical Authority Sign-off",
      "Management of Change (MOC) Governance",
      "Engineering Assurance & Design Verification",
      "Statutory Regulatory Compliance",
      "Operational Risk Dispensations",
      "Audit & Quality Management (OSHMS & QEMS)"
    ],
    deliverables: [
      "Definitive engineering change approvals safeguarding structural plant limits",
      "Facility-wide MOC protocol governance",
      "Regulatory liaison with DOSH Malaysia and Department of Environment"
    ],
    standards: ["ISO 9001", "ISO 14001", "ISO 45001", "OSHA 1994"]
  },
  {
    id: "operational-excellence",
    number: "04",
    title: "Operational Excellence & OEE",
    tagline: "Synchronizing Production Reliability, Maintenance & Safety",
    summary: "Creating structured Operational Excellence architectures that break plant silos, aligning technical maintenance workflows with executive production and commercial mandates.",
    competencies: [
      "Overall Equipment Effectiveness (OEE) Optimization",
      "Continuous Improvement Systems",
      "Cross-Functional Reliability Synchronization",
      "Defect Elimination & Bottleneck Analysis",
      "Operational Readiness & Commissioning",
      "Plant Availability & Throughput Preservation"
    ],
    deliverables: [
      "Integrated Operational Excellence frameworks spanning operations, maintenance, and safety",
      "Turnaround post-mortem and uptime reliability roadmaps",
      "Standard operating discipline across shifts"
    ],
    standards: ["Lean Reliability", "TPM", "Asset Lifecycle Monetization"]
  },
  {
    id: "digital-risk",
    number: "05",
    title: "Digital Risk & Safety Telemetry",
    tagline: "Connecting Frontline Telemetry to C-Suite & Boardroom Visibility",
    summary: "Architecting real-time digital risk dashboards and telemetry systems that demystify process safety indicators, enabling predictive decision-making for executive leadership and boards.",
    competencies: [
      "Enterprise Safety Dashboards",
      "Process Safety Incident Database (PSID) Steering",
      "Real-Time Barrier Degradation Tracking",
      "Digital Maintenance Workflow Integration",
      "Data-Driven Risk Profiling",
      "HSE Culture Maturity Telemetry"
    ],
    deliverables: [
      "Unified executive safety dashboards from frontline to Board of Directors",
      "Incident database analytics to eliminate repeat operational anomalies",
      "Automated barrier status telemetry during critical turnarounds"
    ],
    standards: ["Global Energy Benchmarking", "API RP 754", "Digital HSE Frameworks"]
  },
  {
    id: "leadership",
    number: "06",
    title: "Executive Leadership & Talent",
    tagline: "Cultivating High-Reliability Cultures & Next-Generation Engineers",
    summary: "Advising senior executive teams on complex enterprise risk, chairing international loss prevention forums, and accelerating the technical progression of rising engineers.",
    competencies: [
      "Executive & Board Risk Advisory",
      "Cross-Functional & Multinational Leadership",
      "CIMAH & TPCP Technical Mentorship",
      "Global Conference Co-Chairmanship",
      "Organizational Safety Culture Benchmarking",
      "High-Reliability Organizing (HRO)"
    ],
    deliverables: [
      "Co-Chairman for Loss Prevention Asia Conference 2025",
      "3+ engineers qualified as DOSH CIMAH Competent Persons",
      "Multiple engineers advanced to Staff Level via TPCP",
      "Enterprise-wide safety culture transformation across global energy units"
    ],
    standards: ["AMIChemE", "BEM", "Global Energy Safety Culture Standards"]
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "bfi-sr-manager",
    company: "Brunei Fertilizer Industries Sdn Bhd",
    location: "Brunei Darussalam",
    role: "Senior Manager, Asset Integrity",
    period: "June 2026 – Present",
    startYear: 2026,
    endYear: 'Present',
    category: 'executive',
    mandate: "Direct total asset integrity strategy, risk governance, and technical reliability across a world-scale mega fertilizer complex, ensuring maximum plant availability and sustainable asset lifecycle extension.",
    impactPoints: [
      "Lead asset integrity priorities across a complex industrial operating environment, supporting safe, reliable and sustainable asset performance.",
      "Provide senior technical leadership on asset integrity, risk and engineering governance matters.",
      "Align asset performance initiatives with operational priorities, organisational objectives and long-term mechanical reliability.",
      "Lead and develop multidisciplinary engineering teams to strengthen technical capability, collaboration and performance."
    ],
    technologies: ["Asset Performance Management (APM)", "Risk-Based Inspection (RBI)", "Structural Integrity", "Statutory Compliance"]
  },
  {
    id: "bfi-tech-manager",
    company: "Brunei Fertilizer Industries Sdn Bhd",
    location: "Brunei Darussalam",
    role: "Technical Manager — Operational Excellence & Asset Performance",
    period: "December 2025 – June 2026",
    startYear: 2025,
    endYear: 2026,
    category: 'operations',
    mandate: "Established enterprise Operational Excellence and Asset Performance Management frameworks, serving as definitive Technical Authority across engineering modifications and operational risk.",
    impactPoints: [
      "Developed a structured Operational Excellence framework spanning technical, maintenance, operations and asset performance priorities.",
      "Led development of an Asset Performance Management system, integrating risk management practices and technology to elevate Overall Equipment Effectiveness (OEE) by 12% within six months.",
      "Served as Technical Authority for engineering changes, Management of Change (MOC), operational risk and asset integrity decisions.",
      "Supported Operations internal audit activities and verified strict alignment with OSHMS and QEMS requirements across complex manufacturing lines.",
      "Directed asset integrity improvement initiatives and facilitated knowledge sharing across multidisciplinary and multinational teams."
    ],
    technologies: ["+12% OEE Optimization", "Technical Authority", "MOC Architecture", "OSHMS / QEMS Audits"]
  },
  {
    id: "petronas-culture-manager",
    company: "PETRONAS",
    location: "Kuala Lumpur, Malaysia (Global Scope)",
    role: "Manager, Process Safety Leadership & Culture",
    period: "January 2023 – December 2025",
    startYear: 2023,
    endYear: 2025,
    category: 'executive',
    mandate: "Steered enterprise-wide Process Safety Culture, governance frameworks, and technical competence across global energy operations, advising senior leadership on high-hazard risk decisions.",
    impactPoints: [
      "Led development and enhancement of the organisation's Process Safety Culture framework, integrating risk management and digital technology.",
      "Served as Process Safety Subject Matter Expert for critical decisions involving process, technology, design and operational risk.",
      "Headed the Process Safety Incident Database (PSID) Steering Committee, strengthening organisational learning from global incidents and operational best practices.",
      "Represented PETRONAS at international conferences, technical forums and professional engagements; served as Co-Chairman for the Loss Prevention Asia Conference 2025.",
      "Mentored emerging leaders and technical professionals, with at least three mentees achieving certification as CIMAH Competent Persons with DOSH Malaysia and multiple personnel progressing to Staff Level via TPCP."
    ],
    technologies: ["PSID Steering Committee", "Loss Prevention Asia Co-Chair", "Culture Maturity Measurement", "TPCP / CIMAH Mentorship"]
  },
  {
    id: "petronas-risk-manager",
    company: "PETRONAS",
    location: "Malaysia (Downstream & Upstream)",
    role: "Manager, Process Safety Risk Management",
    period: "January 2019 – December 2022",
    startYear: 2019,
    endYear: 2022,
    category: 'operations',
    mandate: "Governed quantitative risk assessment, barrier integrity verification, and fire prevention strategies across major downstream and upstream operating assets to achieve zero catastrophic loss events.",
    impactPoints: [
      "Led risk assessment and mitigation strategies across operational units, strengthening risk visibility and incident prevention.",
      "Established comprehensive fire prevention and mitigation frameworks that achieved zero major fire incidents over a multi-year period.",
      "Developed real-time safety dashboards to improve risk identification, monitoring and incident management from frontline operations to the Executive Leadership Team and Board of Directors.",
      "Led the Process Safety Focused Enhancement Programme to strengthen management systems and leadership accountability.",
      "Designed and delivered targeted programmes covering risk management, incident prevention and fire safety preparedness."
    ],
    technologies: ["Zero Major Fire Framework", "C-Suite Risk Dashboards", "Barrier Integrity", "Focused Enhancement Programme"]
  },
  {
    id: "abf-env-exec",
    company: "ASEAN Bintulu Fertilizer Sdn Bhd",
    location: "Bintulu, Sarawak, Malaysia",
    role: "Executive, Environmental Management",
    period: "August 2017 – December 2018",
    startYear: 2017,
    endYear: 2018,
    category: 'engineering',
    mandate: "Led statutory environmental compliance, scheduled waste governance, and regulatory liaison with the Department of Environment (DOE) across chemical manufacturing operations.",
    impactPoints: [
      "Led environmental compliance and management initiatives across plant operations.",
      "Managed environmental assessments, scheduled waste (CePSWaM) and statutory regulatory requirements.",
      "Supported sustainability and environmental performance improvements without compromising plant operational throughput.",
      "Collaborated closely with the Department of Environment (DOE) to resolve regulatory compliance matters."
    ],
    technologies: ["CePSWaM Certified", "Scheduled Waste Management", "DOE Liaison", "Environmental Audits"]
  },
  {
    id: "abf-psm-exec",
    company: "ASEAN Bintulu Fertilizer Sdn Bhd",
    location: "Bintulu, Sarawak, Malaysia",
    role: "Executive, Process Safety",
    period: "April 2010 – July 2017",
    startYear: 2010,
    endYear: 2017,
    category: 'engineering',
    mandate: "Commanded process safety studies, hazard evaluations, and incident investigations across world-scale ammonia and urea fertilizer plant operations.",
    impactPoints: [
      "Led process safety activities across plant operations, covering hazard identification, quantitative risk assessment and incident prevention.",
      "Conducted detailed process safety studies across ammonia plant operations and high-risk process activities.",
      "Applied root cause analysis (RCA) to incidents and translated findings into practical operational improvements.",
      "Supported systematic improvement of the organisation's HSE performance and process safety maturity.",
      "Delivered technical training and engagement initiatives to strengthen frontline risk awareness and safety culture."
    ],
    technologies: ["HAZOP / PHA", "Ammonia Plant Safety", "Root Cause Analysis (RCA)", "Process Safety Maturity"]
  },
  {
    id: "abf-process-exec",
    company: "ASEAN Bintulu Fertilizer Sdn Bhd",
    location: "Bintulu, Sarawak, Malaysia",
    role: "Executive, Process Engineering & Operations — Ammonia Plant",
    period: "July 2007 – December 2008",
    startYear: 2007,
    endYear: 2008,
    category: 'engineering',
    mandate: "Provided core chemical engineering analysis and operational support across ammonia plant synthesis loops, reforming, and purification units.",
    impactPoints: [
      "Supported process engineering and operational improvement initiatives across ammonia plant systems.",
      "Conducted equipment performance studies and supported optimisation of critical plant systems.",
      "Contributed to safe and reliable plant operations through engineering analysis and technical support."
    ],
    technologies: ["Ammonia Synthesis Loops", "Thermodynamic Studies", "Equipment Performance Optimization"]
  },
  {
    id: "pgb-qa-qc",
    company: "PETRONAS Gas Berhad",
    location: "Kerteh, Terengganu, Malaysia",
    role: "QA/QC Engineer — Joint Integrity Team",
    period: "April 2007 – June 2007",
    startYear: 2007,
    endYear: 2007,
    category: 'engineering',
    mandate: "Governed quality assurance, flange management, and joint integrity during major gas processing plant start-up following turnaround activities.",
    impactPoints: [
      "Supported quality assurance and joint integrity activities during gas plant start-up.",
      "Contributed directly to achieving zero leaks following major turnaround activities.",
      "Coordinated quality control procedures for critical high-pressure equipment and plant systems."
    ],
    technologies: ["Joint Integrity Management", "Turnaround Flange QA/QC", "Zero-Leak Milestone", "Gas Processing"]
  }
];

export const IMPACT_CARDS: ImpactCard[] = [
  {
    id: "impact-oee",
    category: "OPERATIONAL PERFORMANCE",
    metric: "+12%",
    title: "Double-Digit OEE Expansion",
    narrative: "Architected and deployed an integrated Asset Performance Management (APM) system fusing maintenance strategy, risk analytics, and operational technology across mega-scale fertilizer production.",
    context: "12% improvement in Overall Equipment Effectiveness achieved within six months of implementation.",
    scope: "Brunei Fertilizer Industries Sdn Bhd",
    tag: "APM & Reliability"
  },
  {
    id: "impact-fires",
    category: "MAJOR HAZARD MITIGATION",
    metric: "ZERO",
    title: "Zero Major Fire Incidents",
    narrative: "Established proactive fire prevention and barrier mitigation frameworks across operating units, reinforcing hardware safeguards, human reliability, and operating envelope discipline.",
    context: "Maintained zero major fire incidents over a multi-year tenure across complex energy processing assets.",
    scope: "PETRONAS Enterprise Risk Management",
    tag: "Loss Prevention"
  },
  {
    id: "impact-dashboards",
    category: "DIGITAL RISK TRANSFORMATION",
    metric: "C-SUITE",
    title: "Frontline-to-Boardroom Risk Dashboards",
    narrative: "Engineered real-time process safety dashboards that democratized barrier health visibility, transforming complex plant telemetry into actionable risk metrics for executive leadership and Boards of Directors.",
    context: "Enabled predictive barrier monitoring, accelerating operational risk interventions before incidents materialize.",
    scope: "Enterprise Operations Governance",
    tag: "Digital Telemetry"
  },
  {
    id: "impact-authority",
    category: "ENGINEERING ASSURANCE",
    metric: "MOC",
    title: "Definitive Technical Authority Mandate",
    narrative: "Served as designated Technical Authority for critical engineering changes, Management of Change (MOC) evaluations, statutory dispensations, and ALARP validations across multinational plant teams.",
    context: "Governed engineering change rigor, preventing barrier degradation and ensuring total structural asset integrity.",
    scope: "Multi-Plant Technical Governance",
    tag: "Technical Authority"
  },
  {
    id: "impact-mentorship",
    category: "TALENT & CAPABILITY ACCELERATION",
    metric: "3+ DOSH",
    title: "Statutory Competency Mentorship",
    narrative: "Cultivated and mentored rising engineering talent, personally guiding at least three engineers to achieve statutory certification as CIMAH Competent Persons with DOSH Malaysia and multiple personnel to Staff Level via TPCP.",
    context: "Institutionalized technical capability frameworks that established enduring organizational competency.",
    scope: "PETRONAS & BFI Capability Ecosystems",
    tag: "Leadership Development"
  }
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: "pillar-rigour",
    number: "01",
    title: "ENGINEERING RIGOUR",
    headline: "Combine deep engineering understanding with disciplined risk governance.",
    description: "In high-hazard energy and chemical operations, world-class asset integrity is never a passive safeguard—it is the primary catalyst for operational reliability, capital preservation, and commercial outperformance. Every operational decision must be grounded in physical fundamentals and strict ALARP barrier assurance.",
    quote: "True integrity begins with respecting the physics of the plant."
  },
  {
    id: "pillar-visibility",
    number: "02",
    title: "RISK VISIBILITY",
    headline: "Make critical risk understandable from frontline operations to executive leadership.",
    description: "Barriers degrade silently. Unless telemetry and operational indicators are translated into clear, real-time risk intelligence, catastrophic hazards remain invisible to executive decision-makers until primary containment is lost. Digital dashboards bridge this critical gap.",
    quote: "If the Board cannot see barrier health, the enterprise is operating blind."
  },
  {
    id: "pillar-performance",
    number: "03",
    title: "ASSET PERFORMANCE",
    headline: "Connect reliability, safety, maintenance, and business priorities.",
    description: "Asset integrity and operational uptime are not opposing forces. By synchronizing Risk-Based Inspection, Asset Performance Management, and turnaround QA/QC, organizations eliminate chronic downtime while elevating plant safety and double-digit OEE.",
    quote: "Reliability is the natural byproduct of uncompromising integrity."
  },
  {
    id: "pillar-capability",
    number: "04",
    title: "ORGANISATIONAL CAPABILITY",
    headline: "Develop people and systems, not only technical solutions.",
    description: "Hardware barriers are only as resilient as the human systems that inspect, operate, and govern them. Sustained excellence requires mentoring future leaders, formalizing statutory competence (CIMAH/TPCP), and fostering an inquisitive, learning-oriented culture.",
    quote: "Systems establish standards; competent leaders sustain them."
  },
  {
    id: "pillar-improvement",
    number: "05",
    title: "CONTINUOUS IMPROVEMENT",
    headline: "Move organisations from compliance-oriented practices toward structured operational excellence.",
    description: "Compliance is the legal baseline, not the destination. World-class industrial operators benchmark against global energy leaders, capture institutional lessons from near-miss telemetry, and pursue relentless operational refinement across all shifts.",
    quote: "Moving beyond regulatory compliance into sovereign operational excellence."
  }
];

export const FEATURED_INSIGHTS: InsightTopic[] = [
  {
    id: "insight-apm",
    code: "WP-01",
    title: "The Asset Performance Architecture",
    subtitle: "Driving +12% OEE via Integrated Risk & Reliability Systems",
    description: "A strategic executive framework illustrating how capital-intensive petrochemical and fertilizer complexes synchronize Asset Integrity, Management of Change, and predictive maintenance technologies to eliminate unplanned downtime and achieve rapid double-digit OEE expansion.",
    status: "Strategic Blueprint",
    badge: "Executive Insight",
    takeaways: [
      "Fusing Asset Integrity Management (AIM) with dynamic maintenance execution",
      "De-risking turnaround milestones through disciplined flange joint integrity",
      "Quantifiable OEE acceleration within a six-month operational horizon"
    ]
  },
  {
    id: "insight-barrier",
    code: "FW-02",
    title: "The Dynamic Barrier Governance Matrix",
    subtitle: "From Frontline Telemetry to Boardroom Risk Transparency",
    description: "A methodology detailing how executive risk committees establish unified process safety dashboards, monitoring Loss of Primary Containment (LOPC) indicators and barrier degradation in real time to prevent high-consequence industrial catastrophic events.",
    status: "Featured Topic",
    badge: "Executive Framework",
    takeaways: [
      "Eliminating the information divide between control rooms and Board Audit Committees",
      "Real-time tracking of Safety-Critical Elements (SCE) and operational bypasses",
      "Leading indicators versus lagging metrics for catastrophic risk mitigation"
    ]
  },
  {
    id: "insight-authority",
    code: "TL-03",
    title: "Technical Authority & Energy Capital Governance",
    subtitle: "The Strategic Role of the Technical Authority in Major Industrial Decisions",
    description: "An executive analysis on how empowered Technical Authorities protect corporate enterprise value, manage catastrophic liability, and enforce ALARP engineering standards during major brownfield transformations and operational turnarounds.",
    status: "Executive Insight",
    badge: "Coming Soon",
    takeaways: [
      "The engineering authority mandate: Balancing commercial urgency with ALARP bounds",
      "Management of Change (MOC) as a sovereign safeguard against catastrophic drift",
      "Statutory compliance under DOSH Malaysia and international chemical codes"
    ]
  },
  {
    id: "insight-lpa2025",
    code: "KN-04",
    title: "Loss Prevention Asia Conference 2025",
    subtitle: "Institutionalizing Global Energy Safety Culture Benchmarks",
    description: "Keynote proceedings and strategic synthesis from Loss Prevention Asia 2025 (Co-Chaired by Nurul Nazleen Suhairi), focusing on global energy safety maturity measurement, incident database telemetry (PSID), and next-generation technical capability development.",
    status: "Keynote Proceedings",
    badge: "Industry Landmark",
    takeaways: [
      "Organisational HSE Culture Maturity Measurement benchmarked to the Global Energy Industry",
      "Translating cross-operator incident databases (PSID) into preventative barriers",
      "Developing certified Major Hazards Competent Persons (DOSH CIMAH) at scale"
    ]
  }
];

export const CREDENTIALS_LIST: CredentialItem[] = [
  // Education
  {
    id: "edu-upm",
    title: "Master of Process Safety & Loss Prevention",
    institution: "Universiti Putra Malaysia (UPM)",
    year: "2019",
    category: "education",
    badge: "Postgraduate Degree",
    description: "Advanced quantitative risk assessment, major hazard containment, loss prevention engineering and industrial disaster modeling."
  },
  {
    id: "edu-uq",
    title: "Bachelor of Engineering (Chemical Engineering)",
    institution: "The University of Queensland, Australia",
    year: "2006",
    category: "education",
    badge: "Undergraduate Degree",
    description: "Comprehensive chemical reaction engineering, process design, thermodynamics, transport phenomena and plant operations."
  },
  // Statutory Certifications
  {
    id: "cert-dosh",
    title: "Major Hazards Competent Person",
    institution: "Department of Occupational Safety & Health (DOSH), Malaysia",
    category: "statutory",
    badge: "Statutory License",
    description: "Legally recognized competent authority under CIMAH (Control of Industrial Major Accident Hazards) Regulations for major hazard installations."
  },
  {
    id: "cert-cepswam",
    title: "Certified Environmental Professional in Scheduled Waste Management (CePSWaM)",
    institution: "Department of Environment (DOE), Malaysia",
    category: "statutory",
    badge: "Statutory Certification",
    description: "Accredited environmental manager authorized to govern statutory scheduled waste storage, handling, transport and disposal compliance."
  },
  {
    id: "cert-tpcp",
    title: "PETRONAS Technical Professional Career Progression (TPCP) Assessment",
    institution: "PETRONAS Enterprise",
    category: "statutory",
    badge: "Staff Engineer (Process Safety)",
    description: "Recognized as Staff Engineer level through rigorous enterprise technical evaluation panels assessing sovereign subject-matter competence."
  },
  // Technical Qualifications
  {
    id: "cert-hazop",
    title: "PETRONAS Certified HAZOP Leader — Level 1",
    institution: "PETRONAS",
    category: "technical",
    badge: "HAZOP Leader L1",
    description: "Certified to lead formal Hazard and Operability studies for complex upstream, downstream, and petrochemical synthesis facilities."
  },
  {
    id: "cert-nebosh",
    title: "NEBOSH International General Certificate (IGC)",
    institution: "NEBOSH (UK)",
    category: "technical",
    badge: "International HSE Standard",
    description: "Globally accredited qualification in occupational health, safety management, hazard identification and risk control."
  },
  {
    id: "cert-iso",
    title: "Qualified Auditor — ISO 9001, ISO 14001, ISO 45001 & ISO 18001",
    institution: "International Standards Organization / Accredited Bodies",
    category: "technical",
    badge: "Integrated Management Systems",
    description: "Certified auditor for Quality Management (9001), Environmental Management (14001), and Occupational Health & Safety Management (45001/18001)."
  },
  // Affiliations
  {
    id: "affil-icheme",
    title: "Associate Member (AMIChemE)",
    institution: "Institution of Chemical Engineers (IChemE)",
    category: "affiliation",
    badge: "Global Professional Body",
    description: "Active associate membership in the premier international professional engineering institution for chemical and process engineers."
  },
  {
    id: "affil-bem",
    title: "Graduate Engineer",
    institution: "Board of Engineers Malaysia (BEM)",
    category: "affiliation",
    badge: "Statutory Engineering Board",
    description: "Registered professional chemical engineer under the statutory regulatory body governing engineering practice in Malaysia."
  },
  {
    id: "affil-lpa",
    title: "Co-Chairman — Loss Prevention Asia Conference 2025",
    institution: "Loss Prevention Asia Technical Committee",
    year: "2025",
    category: "affiliation",
    badge: "Conference Leadership",
    description: "Selected to co-chair the premier Asia-Pacific industrial loss prevention and process safety leadership symposium."
  }
];

export const REGIONAL_NODES = [
  {
    id: "brunei-bfi",
    name: "Brunei Fertilizer Industries (BFI)",
    location: "Sungai Liang Industrial Park (SPARK), Brunei Darussalam",
    type: "Current Senior Mandate",
    description: "Mega-scale ammonia and urea fertilizer complex. Directing total Asset Integrity & Operational Excellence.",
    coordinates: { x: 74, y: 38 },
    active: true
  },
  {
    id: "malaysia-kl",
    name: "PETRONAS Corporate Headquarters",
    location: "Kuala Lumpur, Malaysia",
    type: "Enterprise Leadership",
    description: "Group-wide Process Safety Leadership & Culture, PSID Steering Committee, Enterprise Barrier Risk Management.",
    coordinates: { x: 30, y: 72 },
    active: false
  },
  {
    id: "malaysia-bintulu",
    name: "ASEAN Bintulu Fertilizer (ABF)",
    location: "Bintulu, Sarawak, Malaysia",
    type: "Petrochemical Complex",
    description: "Over 8 years commanding Process Safety, Ammonia Plant Engineering, and Environmental Management (CePSWaM).",
    coordinates: { x: 68, y: 55 },
    active: false
  },
  {
    id: "malaysia-kerteh",
    name: "PETRONAS Gas Berhad",
    location: "Kerteh, Terengganu, Malaysia",
    type: "Gas Processing Infrastructure",
    description: "Joint integrity QA/QC turnaround engineering achieving zero-leak plant start-up milestone.",
    coordinates: { x: 34, y: 50 },
    active: false
  }
];
