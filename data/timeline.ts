import type { TimelineEntry } from "@/types";

export const timeline: TimelineEntry[] = [
  // PENDIDIKAN
  {
    id: "ipb-university",
    year: "2025 — 2029",
    title: {
      id: "S1 Ilmu Komputer",
      en: "B.Sc. in Computer Science",
    },
    company: "IPB University",
    description: {
      id: "Program studi Ilmu Komputer dengan fokus pada pengembangan perangkat lunak, algoritma, dan teknologi informasi.",
      en: "Computer Science program focused on software development, algorithms, and information technology.",
    },
    type: "education",
  },
  {
    id: "sman1-jonggol",
    year: "2022 — 2025",
    title: {
      id: "SMA — IPA",
      en: "High School — Natural Sciences",
    },
    company: "SMAN 1 Jonggol",
    description: {
      id: "Jurusan Ilmu Pengetahuan Alam (IPA).",
      en: "Natural Sciences major.",
    },
    type: "education",
  },

  // ORGANISASI
  {
    id: "kepala-operasional-ristek",
    year: "2026",
    title: {
      id: "Kepala Divisi Operasional",
      en: "Head of Operational Division",
    },
    company: "Ristek 100 — Ormawa Eksekutif PKU IPB",
    description: {
      id: "Mengelola kegiatan operasional, koordinasi tim, dan pengadaan logistik agar tugas berjalan efektif sesuai target.",
      en: "Managing operational activities, coordinating teams, and handling logistics procurement to ensure tasks are carried out effectively.",
    },
    type: "organization",
  },
  {
    id: "staf-ristek-ormawa",
    year: "2026",
    title: {
      id: "Staf Riset dan Teknologi",
      en: "Staff of Research and Technology",
    },
    company: "Ormawa Eksekutif PKU IPB",
    description: {
      id: "Berkontribusi pada inisiatif riset dan teknologi dalam organisasi, mendukung pengembangan program berbasis inovasi.",
      en: "Contributed to research and technology initiatives, supporting the development of innovation-based programs.",
    },
    type: "organization",
  },
  {
    id: "staf-eksternal-ieee",
    year: "2026",
    title: {
      id: "Staf Hubungan Eksternal",
      en: "Staff of External Relations",
    },
    company: "IEEE SB IPB",
    description: {
      id: "Berkontribusi pada proses komunikasi dan koordinasi untuk memastikan implementasi program organisasi berjalan sukses.",
      en: "Contributed to communication and coordination processes to ensure successful implementation of organizational programs.",
    },
    type: "organization",
  },
  {
    id: "ketua-mpk-sman1",
    year: "2023 — 2024",
    title: {
      id: "Ketua MPK",
      en: "President of MPK",
    },
    company: "SMAN 1 Jonggol",
    description: {
      id: "Memimpin dan mengkoordinasi anggota MPK dalam pengawasan OSIS dan perencanaan program organisasi.",
      en: "Led and coordinated MPK members in supervising OSIS and planning organizational programs.",
    },
    type: "organization",
  },

  // KEPANITIAAN
  {
    id: "divisi-acara-stem2025",
    year: "2025",
    title: {
      id: "Divisi Acara — STEM 2025",
      en: "Event Division — STEM 2025",
    },
    company: "IEEE SB IPB Program",
    description: {
      id: "Mengelola proses administrasi, pendaftaran peserta, dan penyusunan Kerangka Acuan (ToR) untuk pembicara.",
      en: "Managed administrative processes, including participant registration and preparing Terms of Reference (ToR) for speakers.",
    },
    type: "committee",
  },
  {
    id: "divisi-acara-ipbcup",
    year: "2025",
    title: {
      id: "Divisi Acara — IPB CUP",
      en: "Event Division — IPB CUP",
    },
    company: "Kementerian Pemuda dan Olahraga, BEM KM IPB",
    description: {
      id: "Terlibat dalam penyusunan konsep, persiapan rundown, koordinasi lintas divisi, dan memastikan acara berjalan sesuai jadwal.",
      en: "Involved in concept development, rundown preparation, cross-division coordination, and ensuring events ran according to schedule.",
    },
    type: "committee",
  },
];