export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  codeUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Web Attack Detection System",
    description: "Bachelor's Thesis — Hybrid vulnerability scanner with XGBoost classification and LLaMA-3 explainability",
    longDescription: "Developed a hybrid vulnerability scanner that integrates XGBoost for web-attack classification with a fine-tuned LLaMA-3 generative model for explainability. The system not only detects potential threats but also provides reasoning behind each classification, improving analysts' understanding of vulnerabilities. Simulated real-world web attacks to generate training data and validated the model's performance through iterative testing.",
    image: "/projects/VulnerabilityScanner.png",
    technologies: ["Cybersecurity", "Machine Learning", "Generative AI", "Explainability", "XGBoost", "LLaMA-3", "Web Security", "Python"],
    codeUrl: "https://github.com/LinceAzul/VulnerabilityScanner",
    featured: true,
  },
  {
    id: "2",
    title: "Active Directory Home Lab",
    description: "Pentesting & Real-World Mitigation — Complete AD lab for enterprise attack chain simulation",
    longDescription: "Built a complete Active Directory lab in VMware to simulate enterprise attack chains and demonstrate domain exploitation techniques. Executed attacks such as SMB Relay, LLMNR Poisoning, and IPv6 exploitation, gaining controlled shell access to simulate real adversarial behavior. Documented each phase with defensive countermeasures to educate pentesters on identifying and mitigating common AD misconfigurations.",
    image: "/projects/AD-PentestingProject.png",
    technologies: ["VMware", "Windows Server 2019", "Kali Linux", "SMB", "LLMNR", "IPv6", "Responder", "Nmap", "Penetration Testing", "Security Hardening", "Active Directory"],
    docsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7234809587940417537/l",
    featured: true,
  },
  {
    id: "3",
    title: "Smart Spam Detection",
    description: "Fine-Tuning LLaMA-2 for Email Classification — Malicious email detection system with Flask interface",
    longDescription: "Created a malicious email detection system combining fine-tuned LLaMA-2 and classical ML to classify messages as safe or malicious. The project includes a Flask-based web interface for easy interaction and a Dockerized deployment for reproducibility and scalability. Fine-tuning was performed on a T4 GPU using Hugging Face, achieving high precision in threat classification.",
    image: "/projects/maliciousMailDetector.png",
    technologies: ["Python", "Flask", "Docker", "Hugging Face", "LLaMA-2", "Google Colab", "Email Security", "Machine Learning", "NLP"],
    codeUrl: "https://github.com/LinceAzul/malicious-mail-detector",
    featured: true,
  },
];

