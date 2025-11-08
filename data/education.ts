export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description?: string[];
  gpa?: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    id: "1",
    institution: "International University of La Rioja (UNIR)",
    degree: "M.Sc. in Cybersecurity",
    field: "Cybersecurity",
    location: "Spain (remote)",
    startDate: "2025",
    endDate: "2026",
    current: true,
    description: [
      "Focused on advanced cybersecurity, threat analysis, and digital forensics",
      "Combining practical offensive security approaches with defensive and regulatory frameworks",
      "Expected completion: June 2026",
    ],
  },
  {
    id: "2",
    institution: "Self-Directed Learning",
    degree: "Independent CTF Participation & Home Lab Practice",
    field: "Cybersecurity",
    location: "Remote",
    startDate: "2021",
    endDate: "2025",
    current: true,
    description: [
      "Independent CTF participation on TryHackMe, HackTheBox, and TCM Security",
      "Developed home Active Directory labs for controlled pentesting practice and technical documentation",
    ],
  },
  {
    id: "3",
    institution: "University of Málaga",
    degree: "B.Sc. in Computer Engineering",
    field: "Computer Engineering (Bilingual Program)",
    location: "Málaga, Spain",
    startDate: "2021",
    endDate: "2025",
    current: false,
    description: [
      "Thesis: Web Attack Detection System – Integrating Classical ML and Generative AI in Cybersecurity",
    ],
  },

];

