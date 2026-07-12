export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  technologies: readonly string[];
}

export const experiences = [
  {
    role: "Vulnerability Researcher",
    organization: "Independent Learning & Projects",
    period: "Present",
    location: "India",
    description:
      "Finding and learning about vulnerabilities in various applications, understanding their impact, and exploring mitigation techniques.",
    technologies: ["Application Security", "AI", "Python"],
  },
] as const satisfies readonly Experience[];
