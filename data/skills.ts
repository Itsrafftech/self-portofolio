import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: { id: "Frontend", en: "Frontend" },
    icon: "Code2",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    label: { id: "Backend", en: "Backend" },
    icon: "Server",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "REST",
      "GraphQL",
    ],
  },
  {
    id: "data-science",
    label: { id: "Data Science", en: "Data Science" },
    icon: "LineChart",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "SQL",
      "Tableau",
      "Power BI",
    ],
  },
  {
    id: "pm-finance",
    label: { id: "PM & Finance", en: "PM & Finance" },
    icon: "Briefcase",
    skills: [
      "Agile/Scrum",
      "JIRA",
      "Confluence",
      "Risk Management",
      "Financial Analysis",
      "Excel/Sheets",
    ],
  },
];
