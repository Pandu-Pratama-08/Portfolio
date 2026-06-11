import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

import Quran from "../../assets/images/project/quran.png";
import Rental from "../../assets/images/project/lapangan.png";
import Bakar from "../../assets/images/project/shellform.png";
import Motor from "../../assets/images/project/rentalmember.png";
import Siswa from "../../assets/images/project/datastudent.png";
import Nilai from "../../assets/images/project/nilai.png";
import Hitung from "../../assets/images/project/calcform.png";
import Weather from "../../assets/images/project/weather.png";
import Hris from "../../assets/images/project/hris.png";
import Inventaris from "../../assets/images/project/inventory.png";

// Pastel tech badge colors (bg + text from same color family)
const techColors = {
  HTML: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  CSS: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  PHP: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  Dart: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  Flutter: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
  Laravel: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  Vue: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  React: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  Tailwind: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  MySQL: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  PostgreSQL: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  Firebase: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  GitHub: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
};

// Filter categories
const FILTERS = [
  { key: "all", label: "Semua" },
  { key: "fullstack", label: "Full Stack" },
  { key: "mobile", label: "Mobile" },
  { key: "web", label: "Web" },
];

// Icon pill config per category
const CATEGORY_PILL = {
  fullstack: { label: "Full stack app" },
  mobile: { label: "Mobile app" },
  web: { label: "Web app" },
};

const TypePill = ({ category }) => {
  const icons = {
    fullstack: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    mobile: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" />
      </svg>
    ),
    web: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  };
  const pill = CATEGORY_PILL[category];
  if (!pill) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2.5 py-1 rounded-full">
      {icons[category]}
      {pill.label}
    </span>
  );
};

const projects = [
  {
    title: "Human Resource Information System (HRIS)",
    category: "fullstack",
    description:
      "Aplikasi berbasis web untuk mengelola data karyawan, divisi, jabatan, dan administrasi SDM secara terpusat.",
    details: `Human Resource Information System (HRIS) merupakan aplikasi berbasis web yang dirancang untuk membantu pengelolaan sumber daya manusia dalam sebuah perusahaan.

Aplikasi ini menyediakan fitur manajemen data karyawan, divisi, jabatan, kontrak kerja, pengajuan pinjaman, serta pengelolaan informasi administrasi lainnya secara terpusat.

Dibangun menggunakan Laravel sebagai backend API, Vue.js untuk antarmuka pengguna, PostgreSQL sebagai database, dan Tailwind CSS untuk desain responsif. Proyek ini memberikan pengalaman dalam pengembangan aplikasi enterprise dengan arsitektur service layer dan REST API.`,
    image: Hris,
    tech: ["Laravel", "Vue", "JavaScript", "PHP", "PostgreSQL", "Tailwind", "GitHub"],
  },
  {
    title: "Inventaris Barang",
    category: "fullstack",
    description:
      "Aplikasi untuk mengelola inventaris barang, kategori, supplier, dan laporan stok secara real-time.",
    details: `Aplikasi Inventaris Barang dirancang untuk membantu pengelolaan inventaris barang dalam sebuah perusahaan.

Aplikasi ini menyediakan fitur manajemen data barang, kategori, supplier, stok, dan laporan inventaris secara real-time dalam satu platform terpusat.

Dibangun menggunakan Laravel sebagai backend API, PHP untuk logika server-side, MySQL sebagai database, dan Tailwind CSS untuk desain UI yang responsif. Proyek ini memberikan pengalaman dalam pengembangan aplikasi inventory management dengan REST API dan integrasi GitHub untuk version control.`,
    image: Inventaris,
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "GitHub"],
  },
  {
    title: "Al-Quran Digital",
    category: "mobile",
    description:
      "Aplikasi mobile Al-Qur'an digital dengan fitur pencarian surat, detail ayat, dan integrasi API Quran.",
    details: `Aplikasi Al-Qur'an Digital dikembangkan untuk memudahkan pengguna dalam membaca dan mencari surat Al-Qur'an secara praktis melalui perangkat mobile.

Aplikasi menampilkan daftar surat, detail ayat, terjemahan, serta informasi tambahan yang diperoleh melalui integrasi API Quran.

Dibangun menggunakan Flutter dan Dart dengan pendekatan konsumsi REST API. Melalui proyek ini saya mempelajari pengelolaan state, integrasi API, serta pengembangan antarmuka mobile yang responsif.`,
    image: Quran,
    tech: ["Flutter", "Dart", "Firebase"],
    demo: "https://quran-digital-fb709.web.app/",
    github: "https://github.com/Pandu-Pratama-08/Al-Quran_app",
  },
  {
    title: "Cuaca Hari Ini",
    category: "mobile",
    description:
      "Aplikasi mobile untuk menampilkan informasi cuaca real-time berdasarkan lokasi pengguna.",
    details: `Aplikasi Cuaca Hari Ini menyediakan informasi cuaca terkini seperti suhu, kelembapan, kondisi cuaca, dan prakiraan harian.

Data cuaca diperoleh dari layanan API cuaca sehingga pengguna dapat memperoleh informasi yang selalu diperbarui.

Proyek ini dibangun menggunakan Flutter dan Dart untuk memperdalam pemahaman mengenai integrasi API, asynchronous programming, dan pengelolaan data pada aplikasi mobile.`,
    image: Weather,
    tech: ["Flutter", "Dart", "Firebase"],
    demo: "https://infocuaca-app.web.app/",
    github: "https://github.com/Pandu-Pratama-08/weather_app",
  },
  {
    title: "Rental Lapangan Olahraga",
    category: "mobile",
    description:
      "Aplikasi mobile pemesanan lapangan olahraga dengan antarmuka modern dan navigasi interaktif.",
    details: `Aplikasi ini dirancang sebagai solusi pemesanan lapangan olahraga secara digital.

Pengguna dapat melihat daftar lapangan, informasi harga, jadwal, dan melakukan simulasi proses pemesanan melalui antarmuka yang intuitif.

Dikembangkan menggunakan Flutter berdasarkan desain Figma dengan fokus pada implementasi UI/UX, responsive layout, dan navigasi antar halaman.`,
    image: Rental,
    tech: ["Flutter", "Dart", "Firebase"],
    demo: "https://flutter-fieldrent.web.app/",
    github: "https://github.com/Pandu-Pratama-08/SewaLapangan",
  },
  {
    title: "Rental Motor",
    category: "web",
    description:
      "Aplikasi web untuk mengelola transaksi penyewaan motor dan data pelanggan.",
    details: `Aplikasi Rental Motor membantu proses pencatatan data pelanggan, kendaraan, durasi sewa, serta perhitungan biaya penyewaan.

Sistem memungkinkan pengelolaan data transaksi secara lebih terstruktur dibandingkan pencatatan manual.

Dikembangkan menggunakan PHP Native dengan fokus pada implementasi CRUD, relasi data sederhana, dan logika perhitungan transaksi.`,
    image: Motor,
    tech: ["HTML", "CSS", "PHP"],
  },
  {
    title: "Data Siswa Sekolah",
    category: "web",
    description:
      "Aplikasi web untuk mengelola data siswa dengan fitur CRUD sederhana.",
    details: `Aplikasi ini digunakan untuk mencatat dan mengelola data siswa dalam satu sistem terpusat.

Fitur utama meliputi penambahan, pengubahan, penghapusan, dan pencarian data siswa secara mudah melalui antarmuka web sederhana.

Dikembangkan menggunakan PHP Native, HTML, dan CSS sebagai sarana pembelajaran konsep CRUD, validasi data, dan pengelolaan database dasar.`,
    image: Siswa,
    tech: ["HTML", "CSS", "PHP"],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selected]);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 sm:px-6 lg:px-16 py-20 transition-colors duration-300"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3"
        >
          Proyek Saya
        </motion.h2>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-500 dark:text-gray-400">
          Beberapa proyek yang telah saya kerjakan dalam perjalanan pengembangan
          web dan mobile menggunakan teknologi modern.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
              ${activeFilter === f.key
                ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                : "bg-transparent text-gray-500 border-gray-300 hover:border-gray-400 hover:text-gray-700 dark:text-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:text-gray-200"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout="position"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 group cursor-pointer hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
              onClick={() => setSelected(project)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white text-sm font-medium border border-white/40 px-4 py-2 rounded-lg">
                    Lihat Detail
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2.5">
                  <TypePill category={project.category} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${techColors[tech] ||
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400 dark:text-gray-600 text-sm">
          Tidak ada proyek untuk kategori ini.
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row border border-gray-200 dark:border-gray-700"
            >
              {/* Close button — mobile */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 md:hidden z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
              >
                <FaTimes size={14} />
              </button>

              {/* Image panel */}
              <div className="w-full md:w-[45%] bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-56 sm:h-64 md:h-full object-contain"
                />
              </div>

              {/* Content panel */}
              <div className="w-full md:w-[55%] p-6 flex flex-col overflow-y-auto">
                {/* Category + links row */}
                <div className="flex items-center justify-between mb-3">
                  <TypePill category={selected.category} />
                  <div className="flex gap-2">
                    {selected.demo && (
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                      >
                        <FaExternalLinkAlt size={11} />
                        Demo
                      </a>
                    )}
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                      >
                        <FaGithub size={11} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  {selected.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line mb-5 flex-1">
                  {selected.details}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selected.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${techColors[tech] ||
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-400 dark:text-gray-600">
                    {projects.indexOf(selected) + 1} / {projects.length}
                  </span>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-4 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;