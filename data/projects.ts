import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "kantongku",
    title: "KantongKu — Aplikasi Akuntansi UMKM",
    description: {
    id: "Aplikasi akuntansi lengkap untuk UMKM Indonesia dengan laporan keuangan standar SAK EMKM, jurnal double-entry, dan mode input sederhana.",
    en: "A complete accounting app for Indonesian SMEs with SAK EMKM standard financial reports, double-entry journal, and simplified input mode.",
  },
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "tRPC"],
    category: "fullstack",
    githubUrl: "https://github.com/Itsrafftech/kantongku",
    liveUrl: "https://kantongku-eight.vercel.app",
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
    id: "devan-balon",
    title: "Devan Balon — Company Profile Website",
    description: {
    id: "Website company profile untuk jasa dekorasi balon profesional dengan katalog layanan, paket harga, portofolio, dan form pemesanan via WhatsApp.",
    en: "Company profile website for a professional balloon decoration service, featuring service catalog, pricing packages, portfolio gallery, and WhatsApp order form.",
  },
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    githubUrl: "https://github.com/Itsrafftech/balon",
    liveUrl: "https://balon-ten.vercel.app/",
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
    githubUrl: "https://github.com/itsrafftech/loan-risk",
    liveUrl: "https://loan-risk-4cdpby7xuccqzjbmbuzxdn.streamlit.app/",
    featured: false,
  },

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
    featured: false,
  },
];
