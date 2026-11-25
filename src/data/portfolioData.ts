export interface SkillItem {
  id: string;
  symbol: string;
  name: string;
  category: 'analytical' | 'pharmaceutics' | 'regulatory' | 'ai_digital';
  categoryLabel: string;
  atomicNumber: number;
  description: string;
  resumeSource: string;
  color: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  type: string;
  organization?: string;
  achievements: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  period: string;
  teamSize: string;
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  subtext: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Pathan Jabeen",
    role: "Pharmaceutical Scientist",
    subtitle: "B.Pharm & GenAI Pioneer",
    taglinePrimary: "Pioneering Pharmaceutical Formulations.",
    taglineSecondary: "Empowering Health-Tech with Applied AI.",
    speechIntroduction: [
      "Hello, I'm Pathan Jabeen.",
      "A Pharmaceutical Researcher passionate about sustainable formulations, green chemistry, and healthcare innovation.",
      "I bridge pharmaceutical sciences, industrial GMP workflows, and modern Generative AI.",
      "Welcome to my digital research portfolio."
    ],
    experienceYears: "B.Pharm 2026",
    contact: {
      email: "jabeenpathan2004@gmail.com",
      phone: "+91 9441246124",
      location: "Bhimavaram, Andhra Pradesh, India",
      linkedIn: "https://linkedin.com",
      gitHub: "https://github.com",
    }
  },

  about: {
    headline: "Advancing Pharmaceutical Chemistry, Green Formulations & Health-Tech",
    summary: "I am a Bachelor of Pharmacy researcher (CGPA 8.62) from Shri Vishnu College of Pharmacy. My passion lies in blending rigorous analytical chemistry, green solvent methodologies, and pharmaceutical formulation science with modern Generative AI and digital application development.",
    focusPillars: [
      {
        title: "Pharmaceutical Formulations",
        desc: "Designing palatable, stable herbo-synthetic formulations, tablet compression workflows, and oral healthcare solutions.",
        icon: "FlaskConical"
      },
      {
        title: "Green Chemistry & Titrations",
        desc: "Pioneering eco-friendly quantification of APIs (e.g. Ibuprofen) replacing hazardous organic solvents with natural green solvent extracts.",
        icon: "Leaf"
      },
      {
        title: "Spectrophotometry & Analytics",
        desc: "Executing high-precision UV-Visible Spectrophotometry assays, drug characterization, and quantitative standard curve modeling.",
        icon: "Activity"
      },
      {
        title: "GMP & Quality Assurance",
        desc: "Trained in industrial Good Manufacturing Practices (GMP) and laboratory quality control protocols at Teena Bio Laboratories.",
        icon: "ShieldCheck"
      },
      {
        title: "Generative AI in Healthcare",
        desc: "Certified GenAI Pioneer exploring LLM applications in pharmaceutical research, literature synthesis, and clinical data insights.",
        icon: "Bot"
      },
      {
        title: "App Development & Health-Tech",
        desc: "Rapid prototyping of modern healthcare apps using Lovable and no-code/low-code AI ecosystems for patient-centric care.",
        icon: "Smartphone"
      }
    ]
  },

  skills: [
    // 1. Analytical & Lab Techniques (Directly from Resume: Technical Skills & Projects)
    {
      id: "uvvis",
      symbol: "Uv",
      name: "UV-Visible Spectrophotometry",
      category: "analytical",
      categoryLabel: "Analytical Techniques",
      atomicNumber: 1,
      description: "Absorption spectra analysis, lambda max determination, and quantitative concentration assays for pharmaceuticals per standard protocols.",
      resumeSource: "Technical Skills",
      color: "#00f0ff"
    },
    {
      id: "greensolvent",
      symbol: "Gs",
      name: "Green Solvent Titrations",
      category: "analytical",
      categoryLabel: "Green Analytical Chemistry",
      atomicNumber: 2,
      description: "Eco-friendly quantification of Ibuprofen utilizing aqueous green tea extracts to replace toxic organic solvents (ethanol) in acid-base titrations.",
      resumeSource: "Project Work (Ibuprofen Titration)",
      color: "#10b981"
    },

    // 2. Pharmaceutics & Formulation (Directly from Resume: Projects & Technical Skills)
    {
      id: "herbosynth",
      symbol: "Hs",
      name: "Herbo-Synthetic Formulations",
      category: "pharmaceutics",
      categoryLabel: "Pharmaceutics & Formulation",
      atomicNumber: 3,
      description: "Design and compounding of oral mouthwash formulations combining antiseptic and soothing botanical ingredients to reduce oral microbial count.",
      resumeSource: "Project Work (Mouthwash Formulation)",
      color: "#a855f7"
    },
    {
      id: "tabletcomp",
      symbol: "Tc",
      name: "Tablet Compression Workflows",
      category: "pharmaceutics",
      categoryLabel: "Pharmaceutics & Formulation",
      atomicNumber: 4,
      description: "Basic industrial tablet compression workflows, granulation parameters, and physical evaluation checks (hardness, friability, disintegration).",
      resumeSource: "Technical Skills",
      color: "#c084fc"
    },

    // 3. Regulatory & Quality Standards (Directly from Resume: Technical Skills & Industrial Training)
    {
      id: "gmp",
      symbol: "Gm",
      name: "GMP Knowledge",
      category: "regulatory",
      categoryLabel: "Regulatory Compliance",
      atomicNumber: 5,
      description: "Good Manufacturing Practices compliance, batch manufacturing records (BMR), cleanroom operations, contamination prevention, and quality protocols.",
      resumeSource: "Technical Skills",
      color: "#f59e0b"
    },
    {
      id: "teenabio",
      symbol: "Tb",
      name: "Industrial QC Testing",
      category: "regulatory",
      categoryLabel: "Industrial Laboratory Practice",
      atomicNumber: 6,
      description: "Underwent intensive one-month industrial training at Teena Bio Laboratories (Hyderabad) covering commercial QC assays, testing protocols, and SOP compliance.",
      resumeSource: "Certifications & Training (May 2026)",
      color: "#fbbf24"
    },

    // 4. Digital & Generative AI (Directly from Resume: Certifications & Technical Skills)
    {
      id: "genai",
      symbol: "Ai",
      name: "Generative AI Excellence",
      category: "ai_digital",
      categoryLabel: "Digital & AI Healthcare",
      atomicNumber: 7,
      description: "Certified GenAI Pioneer (April 2026), applying Generative AI concepts, prompt engineering, and LLM synthesis to healthcare research and workflows.",
      resumeSource: "Certifications (April 2026)",
      color: "#ec4899"
    },
    {
      id: "lovable",
      symbol: "Lv",
      name: "App Development (Lovable)",
      category: "ai_digital",
      categoryLabel: "Digital Health-Tech",
      atomicNumber: 8,
      description: "Rapid prototyping and deployment of full-stack healthcare web applications, interactive medical calculators, and digital tools using Lovable.",
      resumeSource: "Technical Skills",
      color: "#f43f5e"
    }
  ] as SkillItem[],

  experience: [
    {
      title: "Industrial Trainee",
      period: "May 2026",
      type: "Industrial Training Experience",
      organization: "Teena Bio Laboratories, Hyderabad",
      achievements: [
        "Underwent intensive industrial training at Teena Bio Laboratories, Hyderabad, observing commercial pharmaceutical manufacturing and QC operations.",
        "Gained hands-on exposure to Good Manufacturing Practices (GMP) and Good Laboratory Practices (GLP) in a regulated testing facility.",
        "Observed quality control assays, spectrophotometric testing, and sample preparation protocols for commercial pharmaceutical batches.",
        "Studied standard operating procedures (SOPs), equipment validation logs, and documentation compliance standards."
      ],
      metrics: [
        { label: "Training Facility", value: "Bio Labs" },
        { label: "GMP Adherence", value: "100%" },
        { label: "Duration", value: "1 Month" },
        { label: "Focus", value: "QC & Testing" }
      ]
    },
    {
      title: "Academic Research & Project Lead",
      period: "2024 – 2026",
      type: "Pharmaceutical Research & Formulation",
      organization: "Shri Vishnu College of Pharmacy",
      achievements: [
        "Led 4-member research teams across two capstone pharmaceutical projects in green chemistry and formulation science.",
        "Formulated an innovative Herbo-Synthetic mouthwash combining natural soothing agents with synthetic antiseptics for enhanced antimicrobial efficacy.",
        "Pioneered a sustainable green solvent acid-base titration method for estimating Ibuprofen using green tea extract, cutting reliance on toxic organic solvents.",
        "Presented experimental findings, titration curves, and formulation stability results with academic rigor."
      ],
      metrics: [
        { label: "Team Size Led", value: "4 Members" },
        { label: "Research Projects", value: "2 Major" },
        { label: "Solvent Eco-Rating", value: "Green" },
        { label: "Academic CGPA", value: "8.62" }
      ]
    },
    {
      title: "Broadcast Media & Communication Trainee",
      period: "2024",
      type: "Professional Certification",
      organization: "Radio Vishnu 90.4 CR | Vishnu Audio Visual Academy",
      achievements: [
        "Completed comprehensive communication skills training at Radio Vishnu 90.4 CR.",
        "Mastered voice modulation, scientific public speaking, and community health broadcasting.",
        "Developed skills in articulate dialogue, script drafting, and engaging multi-disciplinary audiences."
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "herbo-synthetic-mouthwash",
      title: "Herbo-Synthetic Mouthwash Formulation for Enhanced Oral Hygiene",
      tagline: "Antimicrobial Herbal-Synthetic Hybrid Oral Hygiene Solution",
      period: "April 2025 – September 2025",
      teamSize: "Team of 4",
      description: "Formulated and evaluated an advanced herbo-synthetic oral rinse designed to maximize antimicrobial efficacy against oral pathogens while ensuring a soothing, palatable taste profile without harsh alcoholic burn.",
      highlights: [
        "Integrated potent natural antiseptic botanicals with validated pharmaceutical stabilizers",
        "Formulation optimization to reduce oral microbes while maintaining mucosal safety and long-term shelf-life stability",
        "Conducted organoleptic evaluation (taste, aroma, palatability) and pH optimization for optimal salivation balance",
        "Team-based formulation development adhering to experimental laboratory protocols",
        "Potential application as a daily preventative antimicrobial dental rinse"
      ],
      tags: ["Formulation Science", "Pharmaceutics", "Antimicrobial", "Herbo-Synthetic", "Oral Healthcare"],
      gradient: "from-emerald-500/20 via-cyan-600/10 to-teal-600/20"
    },
    {
      id: "eco-friendly-ibuprofen-titration",
      title: "Eco-friendly Quantification of Ibuprofen Using Green Solvents in Acid-Base Titrations",
      tagline: "Sustainable Green Chemistry Assay Substituting Hazardous Organic Solvents",
      period: "October 2024 – March 2025",
      teamSize: "Team of 4",
      description: "Developed and validated a green analytical titrimetric method for the precise quantitative estimation of Ibuprofen by replacing conventional volatile organic solvents (such as ethanol) with an aqueous green tea solvent system.",
      highlights: [
        "Eliminated toxic solvent waste by harnessing natural aqueous green tea extracts as green solvent media",
        "Achieved sharp, reproducible stoichiometric endpoints in acid-base titration curves for commercial Ibuprofen samples",
        "Benchmarked accuracy against standard pharmacopeial assay methodologies",
        "Reduced environmental footprint and hazardous lab vapor emissions during analytical procedures",
        "Published reproducible lab protocol supporting eco-friendly educational and industrial analytical workflows"
      ],
      tags: ["Green Chemistry", "Titrations", "Ibuprofen Assay", "Analytical Chemistry", "Sustainability"],
      gradient: "from-cyan-500/20 via-blue-600/10 to-emerald-600/20"
    }
  ] as ProjectItem[],

  certifications: [
    {
      title: "Generative AI Excellence - GenAI Pioneer",
      issuer: "GenAI Pioneer Certification",
      date: "April 2026",
      desc: "Certified in Generative AI concepts, prompt engineering, and LLM applications in modern workflows."
    },
    {
      title: "Industrial Training Certification",
      issuer: "Teena Bio Laboratories, Hyderabad",
      date: "May 2026",
      desc: "One-month comprehensive industrial exposure to pharmaceutical quality control, testing, and GMP."
    },
    {
      title: "Communication Skills Training",
      issuer: "Radio Vishnu 90.4 CR | Vishnu Audio Visual Academy",
      date: "2024",
      desc: "Professional radio broadcast training, voice modulation, and public communication."
    }
  ],

  impactStats: [
    { value: "8.62", label: "B.Pharm CGPA", subtext: "Through 6th semester at SVCP" },
    { value: "91.4%", label: "Intermediate Score", subtext: "Narayana Junior College (2022)" },
    { value: "100%", label: "Green Solvent", subtext: "Zero-ethanol Ibuprofen titration" },
    { value: "GenAI", label: "Certified Pioneer", subtext: "AI concepts & Health-tech tools" },
    { value: "3+", label: "Specialized Certs", subtext: "Bio-Labs, GenAI & Broadcast Media" }
  ] as ImpactStat[],

  education: [
    {
      institution: "Shri Vishnu College of Pharmacy",
      degree: "Bachelor of Pharmacy (B.Pharm)",
      period: "2022 – 2026 (Passing Year)",
      grade: "CGPA: 8.62 / 10 (till 6th semester)",
      location: "Bhimavaram, Andhra Pradesh",
      highlights: [
        "Specialized in pharmaceutics, analytical chemistry, pharmacology, and drug formulation technology.",
        "Active student researcher in green solvent titrations and herbo-synthetic formulation science."
      ]
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate (BiPC / Science)",
      period: "2020 – 2022",
      grade: "91.4%",
      location: "Andhra Pradesh",
      highlights: [
        "High academic distinction with mastery of biology, physics, and organic chemistry foundations."
      ]
    },
    {
      institution: "St. Mary's High School",
      degree: "Secondary School Certificate (SSC)",
      period: "Passed out in 2020",
      grade: "526 / 600 Marks",
      location: "Andhra Pradesh",
      highlights: [
        "Strong academic standing with excellence in science and mathematical sciences."
      ]
    }
  ]
};
