export interface About {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
  hackthebox?: string;
  tryhackme?: string;
  website?: string;
  profileImage?: string;
  skills: string[];
}

export const about: About = {
  name: "Ivan Iroslavov",
  title: "Cybersecurity Auditor & AI Researcher",
  bio: "Cybersecurity professional and AI researcher with hands-on experience in security auditing, penetration testing, and federated learning. Passionate about ethical hacking, vulnerability assessment, and developing innovative AI solutions. Continuously advancing through real-world cybersecurity challenges while contributing to cutting-edge research in privacy-preserving machine learning.",
  location: "Málaga, Spain",
  email: "ivaniroslavov@proton.me",
  github: "https://github.com/LinceAzul",
  linkedin: "https://www.linkedin.com/in/ivan-iroslavov-petkov-80b960236/",
  hackthebox: "https://app.hackthebox.com/profile/169876",
  tryhackme: "https://tryhackme.com/p/LinceAzul",
  /*website: "https://yourwebsite.com",*/
  profileImage: "/profile.png",
  skills: [
    "Cybersecurity",
    "Penetration Testing",
    "Security Auditing",
    "Artificial Intelligence",
    "Federated Learning",
    "Machine Learning",
    "Graph Neural Networks",
    "Python",
    "Bash",
    "C++",
    "Common Criteria",
    "Active Directory",
    "Web Exploitation",
    "Reverse Engineering",
    "Network Security",
    "Ethical Hacking",
  ],
};

