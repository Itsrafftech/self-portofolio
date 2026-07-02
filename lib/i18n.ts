import type { Lang } from "@/types";

export const translations = {
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      hireMe: "Hubungi Saya",
    },
    hero: {
      greeting: "Halo, saya Rafi Al Arifi",
      headline1: "Saya Membangun Produk.",
      headline2: "Saya Menulis Kode.",
      headline3: "Saya Memimpin Tim.",
      roles: [
        "Mahasiswa Ilmu Komputer",
        "Web Developer",
        "Calon Project Manager",
      ],
      viewWork: "Lihat Karya Saya",
      downloadCV: "Unduh CV",
    },
    about: {
      heading: "Tentang Saya",
      quote: "Ide sederhana. Eksekusi serius.",
      bio: "Saya seorang mahasiswa Ilmu Komputer yang tertarik pada pengembangan web, manajemen proyek, dan membangun solusi digital yang berdampak. Saya senang mengubah ide menjadi produk nyata — mulai dari antarmuka yang rapi dan fungsional hingga eksekusi proyek yang terorganisir. Berbasis di Indonesia, saya selalu mencari cara untuk belajar, membangun, dan memimpin.",
      statProjects: "Proyek",
      statTech: "Teknologi",
      statYears: "Tahun Pengalaman",
    },
    skills: {
      heading: "Arsenal",
      subheading: "Peralatan yang saya gunakan untuk membangun, menganalisis, dan memimpin.",
      filterAll: "Semua",
      filterFrontend: "Frontend",
      filterBackend: "Backend",
      filterData: "Data Science",
      filterPM: "PM & Finance",
    },
    projects: {
      heading: "Proyek",
      subheading: "Beberapa karya yang mencerminkan cara saya berpikir dan membangun.",
      filterAll: "Semua",
      filterFullstack: "Full Stack",
      filterData: "Data Science",
      filterFinance: "Finance",
      filterPM: "PM Tool",
      viewCode: "Kode",
      liveDemo: "Demo",
      featured: "Unggulan",
    },
    timeline: {
      heading: "Pengalaman",
      subheading: "Perjalanan profesional dan akademis saya sejauh ini.",
      work: "Kerja",
      education: "Pendidikan",
    },
    contact: {
      heading: "Kontak",
      subheading: "Punya proyek atau peluang? Mari mengobrol.",
      openToWork: "Terbuka untuk Peluang Baru",
      name: "Nama",
      namePlaceholder: "Nama lengkap Anda",
      email: "Email",
      emailPlaceholder: "email@contoh.com",
      subject: "Subjek",
      subjectPlaceholder: "Tentang apa ini?",
      message: "Pesan",
      messagePlaceholder: "Ceritakan lebih lanjut...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan terkirim! Saya akan segera membalas.",
      error: "Gagal mengirim pesan. Coba lagi.",
      errorName: "Nama minimal 2 karakter",
      errorEmail: "Masukkan alamat email yang valid",
      errorSubject: "Subjek minimal 5 karakter",
      errorMessage: "Pesan minimal 20 karakter",
    },
    footer: {
      rights: "Seluruh hak cipta dilindungi.",
      builtWith: "Dibangun dengan Next.js & Tailwind CSS.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    hero: {
      greeting: "Hi, I'm Rafi Al Arifi",
      headline1: "I Build Products.",
      headline2: "I Write Code.",
      headline3: "I Lead Teams.",
      roles: [
        "Computer Science Student",
        "Web Developer",
        "Aspiring Project Manager",
      ],
      viewWork: "View My Work",
      downloadCV: "Download CV",
    },
    about: {
      heading: "About Me",
      quote: "Simple ideas. Serious execution.",
      bio: "I'm a Computer Science student passionate about web development, project management, and building impactful digital solutions. I enjoy turning ideas into working products — from clean, functional interfaces to well-organized project execution. Based in Indonesia, I'm always looking for ways to learn, build, and lead.",
      statProjects: "Projects",
      statTech: "Technologies",
      statYears: "Years of Experience",
    },
    skills: {
      heading: "Arsenal",
      subheading: "The tools I use to build, analyze, and lead.",
      filterAll: "All",
      filterFrontend: "Frontend",
      filterBackend: "Backend",
      filterData: "Data Science",
      filterPM: "PM & Finance",
    },
    projects: {
      heading: "Projects",
      subheading: "A selection of work that reflects how I think and build.",
      filterAll: "All",
      filterFullstack: "Full Stack",
      filterData: "Data Science",
      filterFinance: "Finance",
      filterPM: "PM Tool",
      viewCode: "Code",
      liveDemo: "Live Demo",
      featured: "Featured",
    },
    timeline: {
      heading: "Experience",
      subheading: "My professional and academic journey so far.",
      work: "Work",
      education: "Education",
    },
    contact: {
      heading: "Contact",
      subheading: "Have a project or opportunity in mind? Let's talk.",
      openToWork: "Open to New Opportunities",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "email@example.com",
      subject: "Subject",
      subjectPlaceholder: "What's this about?",
      message: "Message",
      messagePlaceholder: "Tell me more...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Failed to send message. Please try again.",
      errorName: "Name must be at least 2 characters",
      errorEmail: "Enter a valid email address",
      errorSubject: "Subject must be at least 5 characters",
      errorMessage: "Message must be at least 20 characters",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS.",
    },
  },
} satisfies Record<Lang, Record<string, unknown>>;

export type TranslationKey = string;

function resolvePath(obj: unknown, path: string[]): unknown {
  return path.reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === "object" && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);
}

export function translate(lang: Lang, key: TranslationKey): string {
  const value = resolvePath(translations[lang], key.split("."));
  return typeof value === "string" ? value : key;
}

export function translateList(lang: Lang, key: TranslationKey): string[] {
  const value = resolvePath(translations[lang], key.split("."));
  return Array.isArray(value) ? (value as string[]) : [];
}
