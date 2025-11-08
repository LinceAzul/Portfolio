export type CertificationCategory = "cybersecurity" | "ai" | "languages";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string | null;
  credentialId?: string;
  credentialUrl?: string;
  technologies?: string[];
  category: CertificationCategory;
}

export const certifications: Certification[] = [
  // Cybersecurity Certifications
  {
    id: "1",
    name: "Pentesting",
    issuer: "IT Masters (Charles Sturt University)",
    issueDate: "2025-04",
    expirationDate: null,
    category: "cybersecurity",
    technologies: ["Ethical Hacking", "Security Assessment"],
  },
  {
    id: "2",
    name: "Practical Ethical Hacking (PEH)",
    issuer: "TCM Security",
    issueDate: "2024-09",
    expirationDate: null,
    category: "cybersecurity",
    technologies: ["Active Directory", "Web App Hacking", "SQL Injection", "MITM Attacks"],
  },
  {
    id: "3",
    name: "Cyber Threat Management",
    issuer: "European Union Agency for Cybersecurity (ENISA)",
    issueDate: "2024-08",
    expirationDate: null,
    category: "cybersecurity",
    technologies: ["Threat Management", "Incident Response", "Phishing Analysis", "OPSEC"],
  },
  {
    id: "4",
    name: "Network Ethical Hacking",
    issuer: "Udemy",
    issueDate: "2024-06",
    expirationDate: null,
    category: "cybersecurity",
    technologies: ["Networking", "Aircrack-ng", "Metasploit", "Penetration Testing"],
  },
  {
    id: "5",
    name: "Basic Cybersecurity Knowledge and Experience",
    issuer: "TryHackMe",
    issueDate: "2021-02",
    expirationDate: null,
    credentialId: "THM-HYHP4LVCTT",
    category: "cybersecurity",
    technologies: ["Networking", "Malware Analysis", "Reverse Engineering", "OSINT"],
  },
  {
    id: "6",
    name: "OPSEC Awareness for Military Members and DoD Employees",
    issuer: "Center for Development of Security Excellence",
    issueDate: "2021-02",
    expirationDate: null,
    category: "cybersecurity",
    technologies: ["OPSEC", "Threat & Risk Assessment"],
  },
  {
    id: "7",
    name: "Foundations of AI in Cybersecurity",
    issuer: "C1b3rWall",
    issueDate: "2024-08",
    expirationDate: null,
    category: "cybersecurity",
    technologies: ["Artificial Intelligence", "Cybersecurity", "Neural Networks"],
  },
  // AI Certifications
  {
    id: "8",
    name: "Oracle AI Vector Search Professional",
    issuer: "Oracle",
    issueDate: "2025-05",
    expirationDate: null,
    category: "ai",
    technologies: ["Vector Databases", "Embeddings", "AI Search Optimization"],
  },
  {
    id: "9",
    name: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    issueDate: "2024-07",
    expirationDate: null,
    category: "ai",
    technologies: ["LLMs", "RAG", "LangChain", "Fine-Tuning", "Oracle Cloud"],
  },
  {
    id: "10",
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    issueDate: "2024-10",
    expirationDate: null,
    credentialId: "5123681",
    category: "ai",
    technologies: ["AI Ethics", "Strategic Planning", "Data Quality"],
  },
  {
    id: "11",
    name: "Python Course",
    issuer: "Kaggle",
    issueDate: "2024-09",
    expirationDate: null,
    category: "ai",
    technologies: ["Python", "Machine Learning"],
  },
  // Language Certifications
  {
    id: "12",
    name: "Cambridge Advanced Exam (C1)",
    issuer: "Cambridge University Press & Assessment English",
    issueDate: "2021-09",
    expirationDate: null,
    category: "languages",
    technologies: ["English Proficiency", "C2 spoken level"],
  },
];

