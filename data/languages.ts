export interface Language {
  id: string;
  name: string;
  level: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic";
  proficiency: number; // 0-100
}

export const languages: Language[] = [
  {
    id: "1",
    name: "Spanish",
    level: "Native",
    proficiency: 100,
  },
  {
    id: "2",
    name: "Bulgarian",
    level: "Native",
    proficiency: 100,
  },
  {
    id: "3",
    name: "English",
    level: "Advanced",
    proficiency: 90,
  },
  {
    id: "4",
    name: "French",
    level: "Basic",
    proficiency: 30,
  },
];

