export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    hackthebox?: string;
    tryhackme?: string;
    website?: string;
  };
}

export const contactInfo: ContactInfo = {
  email: "ivaniroslavov@proton.me",
  /*phone: "+1 (555) 123-4567",*/
  location: "Málaga, Spain",
  social: {
    github: "https://github.com/LinceAzul",
    linkedin: "https://www.linkedin.com/in/ivan-iroslavov-petkov-80b960236/",
    hackthebox: "https://app.hackthebox.com/profile/169876",
    tryhackme: "https://tryhackme.com/p/LinceAzul",
    /*website: "https://yourwebsite.com",*/
  },
};

