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

const techColors = {
   HTML: "bg-orange-600 text-white",
   CSS: "bg-blue-500 text-white",
   JavaScript: "bg-yellow-400 text-black",
   PHP: "bg-purple-700 text-white",
   Dart: "bg-sky-600 text-white",
   Flutter: "bg-cyan-500 text-white",
   Laravel: "bg-red-600 text-white",
   Vue: "bg-green-500 text-white",
   React: "bg-sky-400 text-white",
   Tailwind: "bg-cyan-400 text-white",
   MySQL: "bg-blue-400 text-white",
   PostgreSQL: "bg-sky-700 text-white",
   Firebase: "bg-yellow-500 text-black",
   GitHub: "bg-gray-800 text-white",
};

const projects = [
   {
      title: "Al-Quran Digital",
      description: "Aplikasi Al-Qur'an digital berbasis mobile dengan integrasi API Quran.",
      details: `Aplikasi ini menampilkan daftar surat dan ayat Al-Qur'an secara lengkap, dilengkapi dengan fitur pencarian surat dan tampilan tafsir.
Dibuat menggunakan Flutter dan Dart, aplikasi ini mengambil data langsung dari API Al-Qur'an sehingga informasi selalu up-to-date.
Proyek ini jadi pengalaman berharga buat saya dalam memahami cara kerja API dan mengelola data di Flutter.`,
      image: Quran,
      tech: ["Flutter", "Dart"],
      demo: "https://quran-digital-fb709.web.app/",
      github: "https://github.com/Pandu-Pratama-08/Al-Quran_app",
   },
   {
      title: "Rental Lapangan Olahraga",
      description: "Aplikasi mobile sederhana untuk pemesanan lapangan olahraga.",
      details: `Aplikasi ini dibuat menggunakan Flutter dan Dart dengan fokus utama pada tampilan antarmuka dan navigasi antar halaman.
Proyek ini merupakan hasil slicing dari desain Figma, jadi belum terhubung ke database atau API.
Meskipun sederhana, aplikasi ini menunjukkan pemahaman saya tentang pembuatan layout yang rapi dan navigasi yang lancar di Flutter.`,
      image: Rental,
      tech: ["Flutter", "Dart"],
      demo: "https://flutter-fieldrent.web.app/",
      github: "https://github.com/Pandu-Pratama-08/SewaLapangan",
   },
   {
      title: "Data Siswa Sekolah",
      description: "Aplikasi web sederhana untuk mencatat dan mengelola data siswa.",
      details: `Aplikasi ini dibuat menggunakan HTML, CSS, dan PHP untuk mencatat data siswa secara lokal.
Pengguna bisa menambah, mengedit, dan menghapus data siswa dengan mudah tanpa sistem login.
Proyek ini saya buat untuk latihan dasar CRUD dan pengelolaan data sederhana menggunakan PHP.`,
      image: Siswa,
      tech: ["HTML", "CSS", "PHP"],
   },
   {
      title: "Bahan Bakar Shell",
      description: "Website simulasi pembelian bahan bakar dengan perhitungan otomatis.",
      details: `Website ini mensimulasikan proses pembelian bahan bakar seperti di SPBU.
Dibuat dengan HTML, CSS, dan PHP, pengguna bisa memilih jenis bahan bakar dan jumlah liter, lalu sistem otomatis menghitung total harga.
Tampilannya dibuat dengan warna khas Shell supaya terlihat profesional dan menarik.`,
      image: Bakar,
      tech: ["HTML", "CSS", "PHP"],
   },
   {
      title: "Rental Motor",
      description: "Aplikasi web sederhana untuk mengelola penyewaan motor.",
      details: `Aplikasi ini dibuat untuk membantu mengelola data penyewaan motor.
Menggunakan HTML, CSS, dan PHP tanpa framework, pengguna bisa menambah data pelanggan, motor, lama sewa, dan sistem otomatis menghitung total biaya.
Desainnya dibuat sederhana dan mudah dipahami supaya bisa digunakan dengan nyaman.`,
      image: Motor,
      tech: ["HTML", "CSS", "PHP"],
   },
   {
      title: "Cek Keterangan Nilai",
      description: "Aplikasi web sederhana untuk menampilkan hasil keterangan nilai siswa.",
      details: `Aplikasi ini berfungsi untuk menentukan apakah siswa lulus atau tidak berdasarkan nilai yang dimasukkan.
Dibuat menggunakan HTML, CSS, dan PHP tanpa framework agar ringan dan mudah dijalankan.
Tampilannya dibuat sederhana supaya mudah digunakan siapa pun tanpa pengaturan tambahan.`,
      image: Nilai,
      tech: ["HTML", "CSS", "PHP"],
      demo: "https://cek-nilai.wuaze.com/",
      github: "https://github.com/Pandu-Pratama-08/Cek_Nilai",
   },
   {
      title: "Kalkulator Bunga Majemuk & Bunga Tunggal",
      description: "Aplikasi web untuk menghitung bunga tunggal dan majemuk secara otomatis.",
      details: `Aplikasi ini dibuat untuk menghitung bunga tunggal dan bunga majemuk dengan cepat.
Cukup masukkan modal, suku bunga, dan lama waktu, maka hasilnya langsung muncul di layar.
Dibangun dengan HTML, CSS, dan PHP, tampilannya simpel dan mudah dipahami siapa saja.`,
      image: Hitung,
      tech: ["HTML", "CSS", "PHP"],
   },
];

const Projects = () => {
   const [selected, setSelected] = useState(null);

   useEffect(() => {
      document.body.style.overflow = selected ? "hidden" : "auto";
      return () => (document.body.style.overflow = "auto");
   }, [selected]);

   // Handle escape key to close modal
   useEffect(() => {
      const handleEscape = (e) => {
         if (e.key === "Escape") setSelected(null);
      };
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
   }, []);

   return (
      <motion.section
         id="projects"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true, amount: 0.1 }}
         className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-16 py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
      >
         <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
         >
            Proyek Saya
         </motion.h2>

         <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl text-sm sm:text-base px-4">
            Beberapa proyek yang telah saya kerjakan sebagai bagian dari perjalanan
            saya dalam pengembangan web dan mobile menggunakan teknologi modern.
         </p>

         {/* Grid Projects */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl w-full px-4 sm:px-0">
            {projects.map((project, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 relative group cursor-pointer"
                  onClick={() => setSelected(project)}
               >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                     />

                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-black dark:bg-gray-100 dark:text-gray-900 font-semibold px-4 py-2 rounded-lg shadow">
                           Lihat Detail
                        </span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                     <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 line-clamp-1">
                        {project.title}
                     </h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                     </p>

                     {/* Tech Stack */}
                     <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                           <span
                              key={i}
                              className={`text-xs px-2 sm:px-3 py-1 rounded-full font-medium shadow-sm ${techColors[tech] ||
                                 "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                 }`}
                           >
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

         {/* Modal Detail - Responsive */}
         <AnimatePresence>
            {selected && (
               <motion.div
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelected(null)}
               >
                  <motion.div
                     initial={{ scale: 0.9, opacity: 0, y: 20 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     exit={{ scale: 0.9, opacity: 0, y: 20 }}
                     transition={{ duration: 0.3 }}
                     className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
                     onClick={(e) => e.stopPropagation()}
                  >
                     {/* Close Button - Mobile */}
                     <button
                        onClick={() => setSelected(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full md:hidden transition"
                     >
                        <FaTimes size={20} />
                     </button>

                     {/* Image Section */}
                     <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                        <img
                           src={selected.image}
                           alt={selected.title}
                           className="w-full h-full object-cover"
                        />
                     </div>

                     {/* Content Section */}
                     <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 pr-10 md:pr-0">
                           {selected.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base mb-4 whitespace-pre-line">
                           {selected.details}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                           {selected.tech.map((tech, i) => (
                              <span
                                 key={i}
                                 className={`text-xs px-3 py-1 rounded-full font-medium shadow-sm ${techColors[tech] ||
                                    "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                    }`}
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                           {selected.demo && (
                              <a
                                 href={selected.demo}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                              >
                                 <FaExternalLinkAlt size={14} /> Live Demo
                              </a>
                           )}
                           {selected.github && (
                              <a
                                 href={selected.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                              >
                                 <FaGithub size={14} /> GitHub
                              </a>
                           )}
                        </div>

                        {/* Close Button - Desktop */}
                        <button
                           onClick={() => setSelected(null)}
                           className="hidden md:block self-start mt-6 px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:opacity-80 transition"
                        >
                           Tutup
                        </button>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.section>
   );
};

export default Projects;