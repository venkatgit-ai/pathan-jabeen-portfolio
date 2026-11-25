export interface SkillItem {
  id: string;
  symbol: string;
  name: string;
  category: 'languages' | 'backend' | 'databases' | 'messaging' | 'devops' | 'ai_tools';
  categoryLabel: string;
  atomicNumber: number;
  description: string;
  color: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  type: string;
  achievements: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  subtext: string;
  prefix?: string;
  suffix?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Lokendra Tyagi",
    role: "Software Engineer",
    subtitle: "Full Stack & GenAI",
    taglinePrimary: "Building scalable systems.",
    taglineSecondary: "Engineering intelligent solutions.",
    speechIntroduction: [
      "Hey, I'm Lokendra Tyagi.",
      "A Software Engineer passionate about building scalable systems, intelligent applications, and products that solve real-world problems.",
      "I work across backend engineering, distributed systems, and Generative AI.",
      "Welcome to my digital space."
    ],
    experienceYears: "3+",
    contact: {
      email: "lokendratyagi212@gmail.com",
      linkedIn: "https://linkedin.com/in/lokendra-tyagi",
      gitHub: "https://github.com/lokendratyagi601",
    }
  },

  about: {
    headline: "Engineering Scalable Distributed Systems & Applied AI",
    summary: "I am a Software Engineer with 3 years of experience designing and scaling microservices, distributed systems, and GenAI-powered applications. My engineering philosophy revolves around fault tolerance, performance tuning, and turning complex data streams into intuitive software.",
    focusPillars: [
      {
        title: "Backend Engineering",
        desc: "Designing robust, multi-tier services in Java, Python, and Go with resilient API contracts and clean modular architectures.",
        icon: "Server"
      },
      {
        title: "Distributed Systems",
        desc: "Building event-driven pipelines, consensus mechanisms, and high-throughput streams handling millions of daily operations.",
        icon: "Network"
      },
      {
        title: "Microservices Architecture",
        desc: "Decoupling monolithic platforms into independently scalable services with centralized telemetry and service discovery.",
        icon: "Cpu"
      },
      {
        title: "Generative AI & LLM Applications",
        desc: "Developing autonomous multi-agent pipelines, RAG systems, and semantic search converting natural language into verified queries.",
        icon: "Bot"
      },
      {
        title: "System Performance & Scalability",
        desc: "Profiling database workloads, optimizing cache hit rates with Redis, and tuning Elasticsearch indices for sub-second responses.",
        icon: "Gauge"
      },
      {
        title: "Automation & Infrastructure",
        desc: "Containerizing production workloads with Docker and Kubernetes, streamlining CI/CD pipelines, and slashing dev environment setup times.",
        icon: "Boxes"
      }
    ]
  },

  skills: [
    // Languages
    { id: "java", symbol: "Jv", name: "Java", category: "languages", categoryLabel: "Programming Languages", atomicNumber: 1, description: "Enterprise backend services, concurrency, Spring ecosystems", color: "#f89820" },
    { id: "python", symbol: "Py", name: "Python", category: "languages", categoryLabel: "Programming Languages", atomicNumber: 2, description: "FastAPI, LangChain, AI/ML agentic pipelines, automation", color: "#3776ab" },
    { id: "javascript", symbol: "Js", name: "JavaScript", category: "languages", categoryLabel: "Programming Languages", atomicNumber: 3, description: "Modern ES6+, full stack integration, async event loops", color: "#f7df1e" },
    { id: "golang", symbol: "Go", name: "Golang", category: "languages", categoryLabel: "Programming Languages", atomicNumber: 4, description: "High-concurrency microservices, lightweight network daemons", color: "#00add8" },
    { id: "nodejs", symbol: "Nd", name: "Node.js", category: "languages", categoryLabel: "Programming Languages", atomicNumber: 5, description: "Server-side JavaScript runtime, event-driven web services", color: "#339933" },

    // Backend & Frameworks
    { id: "springboot", symbol: "Sb", name: "Spring Boot", category: "backend", categoryLabel: "Backend & Frameworks", atomicNumber: 6, description: "Production microservices, dependency injection, JPA/Hibernate", color: "#6db33f" },
    { id: "microservices", symbol: "Ms", name: "Microservices", category: "backend", categoryLabel: "Backend & Frameworks", atomicNumber: 7, description: "Domain-driven design, API gateways, independent deployment", color: "#00f0ff" },
    { id: "langchain", symbol: "Lc", name: "LangChain", category: "backend", categoryLabel: "Backend & Frameworks", atomicNumber: 8, description: "Agent orchestration, retrieval augmented generation (RAG)", color: "#1c3c3c" },

    // Databases & Caching
    { id: "postgresql", symbol: "Pg", name: "PostgreSQL", category: "databases", categoryLabel: "Databases & Caching", atomicNumber: 9, description: "Relational modeling, indexing, query optimization, ACID compliance", color: "#336791" },
    { id: "redis", symbol: "Rd", name: "Redis", category: "databases", categoryLabel: "Databases & Caching", atomicNumber: 10, description: "In-memory caching, distributed locks, pub/sub, Redis Streams", color: "#dc382d" },
    { id: "elasticsearch", symbol: "Es", name: "Elasticsearch", category: "databases", categoryLabel: "Databases & Caching", atomicNumber: 11, description: "Distributed search, inverted indices, semantic aggregation", color: "#005571" },

    // Messaging & Distributed Systems
    { id: "kafka", symbol: "Kf", name: "Apache Kafka", category: "messaging", categoryLabel: "Messaging & Distributed Systems", atomicNumber: 12, description: "Fault-tolerant event streaming, partition balancing, log compaction", color: "#231f20" },
    { id: "redisstreams", symbol: "Rs", name: "Redis Streams", category: "messaging", categoryLabel: "Messaging & Distributed Systems", atomicNumber: 13, description: "Lightweight append-only messaging with consumer groups", color: "#ff4d4d" },

    // DevOps & Cloud
    { id: "docker", symbol: "Dk", name: "Docker", category: "devops", categoryLabel: "DevOps & Cloud", atomicNumber: 14, description: "Containerization, multi-stage builds, lightweight images", color: "#2496ed" },
    { id: "kubernetes", symbol: "K8", name: "Kubernetes", category: "devops", categoryLabel: "DevOps & Cloud", atomicNumber: 15, description: "Container orchestration, rolling deployments, horizontal pod autoscaling", color: "#326ce5" },
    { id: "aws", symbol: "Aw", name: "AWS", category: "devops", categoryLabel: "DevOps & Cloud", atomicNumber: 16, description: "Cloud computing, S3, EC2, IAM, cloud-native deployments", color: "#ff9900" },
    { id: "jenkins", symbol: "Jk", name: "Jenkins", category: "devops", categoryLabel: "DevOps & Cloud", atomicNumber: 17, description: "Automated test pipelines, declarative pipeline workflows", color: "#d24939" },
    { id: "ghactions", symbol: "Gh", name: "GitHub Actions", category: "devops", categoryLabel: "DevOps & Cloud", atomicNumber: 18, description: "Continuous integration, automated releases, lint and security gates", color: "#2088ff" },

    // AI & Developer Tools
    { id: "llms", symbol: "Lm", name: "LLMs", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 19, description: "Large Language Models prompt engineering, evaluation, embedding models", color: "#a855f7" },
    { id: "openai", symbol: "Oa", name: "OpenAI", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 20, description: "GPT-4 API integration, function calling, structured outputs", color: "#10a37f" },
    { id: "claudecode", symbol: "Cc", name: "Claude Code", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 21, description: "Advanced agentic coding, multi-step code synthesis and verification", color: "#d97706" },
    { id: "cursor", symbol: "Cr", name: "Cursor", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 22, description: "AI-augmented IDE workflows and codebase understanding", color: "#6366f1" },
    { id: "git", symbol: "Gt", name: "Git", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 23, description: "Version control, trunk-based development, atomic commits", color: "#f05032" },
    { id: "intellij", symbol: "Ij", name: "IntelliJ", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 24, description: "Java/Spring enterprise development environment", color: "#fe315d" },
    { id: "vscode", symbol: "Vs", name: "VS Code", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 25, description: "Lightweight polyglot development and debugging environment", color: "#007acc" },
    { id: "postman", symbol: "Pm", name: "Postman", category: "ai_tools", categoryLabel: "AI & Developer Tools", atomicNumber: 26, description: "REST API testing, automated collection runners, mock servers", color: "#ff6c37" }
  ] as SkillItem[],

  experience: [
    {
      title: "Software Engineer",
      period: "June 2023 – Present",
      type: "Full-Time Professional Experience",
      achievements: [
        "Architected and built a scalable, configuration-driven notification platform featuring dynamic template resolution and consent-aware multi-channel messaging.",
        "Engineered a one-click automated environment setup framework that slashed developer onboarding and environment initialization time from days to minutes.",
        "Designed and deployed an agentic GenAI assistant using Python, LLMs, and LangChain that translates natural language inquiries into optimized SQL and Elasticsearch queries, cutting manual data retrieval effort by 90%.",
        "Elevated platform reliability and zero-data-loss posture via Dead Letter Queue (DLQ) failure handling, dynamic payload validation, and automated reconciliation for complex billing issues.",
        "Optimized system performance using tiered Redis caching, index sharding, and Elasticsearch query tuning, resulting in a 30% reduction in database load, 25% lower latency, and 1.4x higher throughput.",
        "Spearheaded large-scale service migrations and framework upgrades across distributed microservices, ensuring backward compatibility, consistency, and clean telemetry."
      ],
      metrics: [
        { label: "Data Retrieval Reduction", value: "90%" },
        { label: "Database Load Cut", value: "30%" },
        { label: "Latency Reduction", value: "25%" },
        { label: "Throughput Boost", value: "1.4x" }
      ]
    },
    {
      title: "Software Engineering Intern",
      period: "May 2022 – July 2022",
      type: "Internship Experience",
      achievements: [
        "Modularized a standalone licensing component into an isolated service, increasing reuse and testability.",
        "Upgraded and streamlined backend integrations with modern RESTful patterns.",
        "Identified and replaced deprecated legacy APIs with high-performance modern services.",
        "Engineered environment-based service discovery mechanisms to enable friction-free cross-environment deployment."
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "ai-multiagent-platform",
      title: "AI-Powered Multi-Agent Data Query & Analytics Platform",
      tagline: "Natural Language to Federated Database Queries with Sub-Second Retrieval",
      description: "An AI-driven intelligence system utilizing a cooperative multi-agent architecture to allow business users and engineers to query heterogeneous data sources across PostgreSQL and Elasticsearch using conversational English.",
      highlights: [
        "Cooperative Multi-Agent architecture orchestrated with Python & LangChain",
        "Deterministic translation of complex natural language into verified SQL and Elasticsearch DSL queries",
        "Automated cross-database schema aggregation and unified response synthesis",
        "Consistent sub-second retrieval times through semantic query caching",
        "Fully containerized deployment on Docker & Kubernetes clusters with zero-downtime rolling updates"
      ],
      tags: ["Python", "LangChain", "LLMs", "PostgreSQL", "Elasticsearch", "Docker", "Kubernetes"],
      gradient: "from-cyan-500/20 via-blue-600/10 to-purple-600/20"
    },
    {
      id: "works-management-platform",
      title: "Works Management Platform",
      tagline: "End-to-End Enterprise Solution for Project, Vendor & Payment Lifecycle",
      description: "A comprehensive distributed works management solution designed to streamline capital projects, vendor agreements, automated milestone tracking, and compliance-driven payment releases.",
      highlights: [
        "Automated milestone tracking with granular state machine transitions and auditability",
        "End-to-end vendor payment workflows with multi-signature verification and anti-tamper ledgers",
        "Real-time operational visibility across project health, budget burn rates, and contractor performance",
        "Cross-system interoperability with accounting, taxation, and notification pipelines",
        "Hardened distributed locking and concurrency controls to prevent duplicate disbursement under high concurrent load"
      ],
      tags: ["Java", "Spring Boot", "Microservices", "Redis", "Kafka", "PostgreSQL", "Docker"],
      gradient: "from-purple-500/20 via-indigo-600/10 to-cyan-600/20"
    }
  ] as ProjectItem[],

  impactStats: [
    { value: "90%", label: "Manual Data Retrieval", subtext: "Reduction via Agentic GenAI Assistant" },
    { value: "30%", label: "Database Load", subtext: "Reduction via Redis Tiered Caching" },
    { value: "25%", label: "Latency", subtext: "Reduction via Query Tuning & Indices" },
    { value: "1.4x", label: "Query Throughput", subtext: "Improvement under peak traffic" },
    { value: "Days→Min", label: "Environment Setup", subtext: "Automated setup framework" }
  ] as ImpactStat[],

  education: {
    institution: "Indian Institute of Technology (BHU), Varanasi",
    degree: "Bachelor of Technology — Chemical Engineering",
    period: "July 2019 – May 2023",
    grade: "CGPA: 8.00 / 10",
    highlights: [
      "Rigorous grounding in engineering mathematics, computational modeling, and process optimization.",
      "Transitioned computational expertise to distributed software engineering and applied AI systems."
    ]
  }
};
