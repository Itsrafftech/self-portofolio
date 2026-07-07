import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "fintrack",
    title: "FinTrack — Personal Finance Dashboard",
    description: {
      id: "Dasbor keuangan pribadi untuk melacak pemasukan, pengeluaran, dan target tabungan dengan visualisasi interaktif.",
      en: "A personal finance dashboard for tracking income, expenses, and savings goals with interactive visualizations.",
    },
    techStack: ["React", "Node.js", "PostgreSQL", "Express", "Chart.js"],
    category: "fullstack",
    githubUrl: "https://github.com/Itsrafftech/fintrack-personal-finance.git",
    liveUrl: "https://fintrack-personal-finance-lvbejs2cd-itsrafftechs-projects.vercel.app/",
    featured: true,
  },
  {
    id: "market-sentiment-analyzer",
    title: "Market Sentiment Analyzer",
    description: {
      id: "Menganalisis sentimen berita dan media sosial untuk mengukur persepsi pasar terhadap saham tertentu menggunakan NLP.",
      en: "Analyzes news and social media sentiment to gauge market perception of specific stocks using NLP.",
    },
    techStack: ["Python", "NLP", "Streamlit", "Pandas", "Hugging Face"],
    category: "data-science",
    githubUrl: "https://github.com/Itsrafftech/market-sentiment.git",
    liveUrl: "https://huggingface.co/spaces/itsrafftech/market-sentiment",
    featured: true,
  },
  {
    id: "agileboard",
    title: "AgileBoard — Kanban PM Tool",
    description: {
      id: "Alat manajemen proyek bergaya Kanban dengan sprint planning, tracking beban kerja tim, dan pelaporan real-time.",
      en: "A Kanban-style project management tool with sprint planning, team workload tracking, and real-time reporting.",
    },
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "tRPC"],
    category: "pm-tool",
    githubUrl: "https://github.com/Itsrafftech/agilrboard",
    liveUrl: "https://agilrboard.vercel.app",
    featured: true,
  },
  {
    id: "stockpulse-api",
    title: "StockPulse API",
    description: {
      id: "API berperforma tinggi untuk data pasar saham real-time dengan caching dan rate limiting bawaan.",
      en: "A high-performance API for real-time stock market data with built-in caching and rate limiting.",
    },
    techStack: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    category: "finance",
    githubUrl: "https://github.com/yourusername/stockpulse-api",
    featured: false,
  },
  {
    id: "loan-risk-predictor",
    title: "Loan Risk Predictor",
    description: {
      id: "Model machine learning untuk memprediksi risiko gagal bayar pinjaman berdasarkan data historis peminjam.",
      en: "A machine learning model that predicts loan default risk based on historical borrower data.",
    },
    techStack: ["Scikit-learn", "FastAPI", "Docker", "Pandas"],
    category: "data-science",
    githubUrl: "https://github.com/yourusername/loan-risk-predictor",
    featured: false,
  },
  {
    id: "expenseflow",
    title: "ExpenseFlow — Team Budget Tracker",
    description: {
      id: "Aplikasi pelacakan anggaran tim dengan alur persetujuan, kategori pengeluaran, dan ekspor laporan.",
      en: "A team budget tracking app with approval workflows, expense categories, and report exports.",
    },
    techStack: ["React", "Express", "MongoDB", "JWT"],
    category: "fullstack",
    githubUrl: "https://github.com/yourusername/expenseflow",
    liveUrl: "https://expenseflow.example.com",
    featured: false,
  },
];
