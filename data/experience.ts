export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  current?: boolean;
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "DEKRA Testing and Certification",
    position: "Cybersecurity Auditor",
    location: "Spain",
    startDate: "2025-03",
    endDate: "2025-09",
    current: false,
    url: "https://www.dekra.es/es/home/",
    description: [
      "Participated in audits under Common Criteria (ISO/IEC 15408), CPSTIC, and LINCE schemes",
      "Developed Bash, Python, and C++ scripts to automate and accelerate functional security tests during on-site audits",
      "Designed and implemented a real-time proxy to capture and modify packets on the fly, including a custom TLS 1.3 module capable of intercepting, decrypting, modifying, and re-encrypting traffic mid-handshake to modify ciphered fields such as Certificate parameters",
      "Drafted and reviewed Evaluation Technical Reports (ETRs) and other technical deliverables",
      "Conducted vulnerability assessments and penetration testing for LINCE projects",
    ],
    technologies: ["Bash", "Python", "C++", "TLS 1.3", "Common Criteria", "CPSTIC", "LINCE", "Penetration Testing"],
  },
  {
    id: "2",
    company: "University of Málaga (SCEnIC Group, ITIS)",
    position: "AI Researcher",
    location: "Málaga, Spain",
    startDate: "2025-03",
    endDate: "2025-10",
    current: false,
    url: "https://www.scenic.uma.es/",
    description: [
      "Designed simulated infrastructures for Federated Learning to benchmark multiple algorithms and evaluate privacy-preserving performance versus centralized approaches",
      "Executed large-scale experiments on Picasso Supercomputer (Spanish Supercomputing Network, 2nd most powerful in Spain)",
      "Co-authored a Q1 draft paper for IEEE Transactions on Emerging Topics in Computing, written in LaTeX",
      "Implemented P2P pipelines for federated learning optimization and distributed experimentation",
      "Collaborated on a project to optimize BPMN diagrams using Graph Neural Networks (GNNs) for time-based efficiency improvements",
    ],
    technologies: ["Federated Learning", "Machine Learning", "Graph Neural Networks", "Python", "LaTeX", "Supercomputing", "Distributed Systems"],
  },
  {
    id: "3",
    company: "Hack The Box / TryHackMe",
    position: "Independent Cybersecurity Practice",
    location: "Remote",
    startDate: "2021-01",
    endDate: null,
    current: true,
    url: "https://www.hackthebox.com/",
    description: [
      "Pwned first machine (Archetype) on January 31st, 2021, beginning an ongoing journey of hands-on ethical hacking",
      "Continuously advanced through real-world simulated networks, focusing on Active Directory exploitation, privilege escalation, lateral movement, and post-exploitation techniques",
      "Acquired extensive experience in Windows and Linux privilege escalation, web vulnerabilities (RCE, SQLi, LFI, command injection, deserialization), and network enumeration (SMB, RPC, SNMP, LDAP, FTP, SSH)",
      "Practiced reverse engineering, password cracking, and binary exploitation through multiple CTF-style challenges",
      "Developed skills in pivoting and tunneling within segmented environments using SSH, Chisel, and Socat",
      "Applied real pentesting methodologies (reconnaissance, exploitation, privilege escalation, and reporting) following OSCP-style workflows",
      "Reached Hacker rank on TryHackMe and Script Kiddie rank on Hack The Box — 9 user owns and 8 root owns, reflecting solid foundational expertise in offensive security",
    ],
    technologies: ["Penetration Testing", "Active Directory", "Privilege Escalation", "Web Exploitation", "Reverse Engineering", "Network Enumeration", "OSCP", "CTF"],
  },
];

