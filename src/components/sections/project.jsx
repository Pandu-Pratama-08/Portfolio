import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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
      description: "Aplikasi Al-Qur’an digital berbasis mobile dengan integrasi API Quran.",
      details: `Aplikasi ini menampilkan daftar surat dan ayat Al-Qur’an secara lengkap, dilengkapi dengan fitur pencarian surat dan tampilan tafsir.
Dibuat menggunakan Flutter dan Dart, aplikasi ini mengambil data langsung dari API Al-Qur’an sehingga informasi selalu up-to-date.
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
      // demo: "#",
      // github: "#",
   },

   {
      title: "Bahan Bakar Shell",
      description: "Website simulasi pembelian bahan bakar dengan perhitungan otomatis.",
      details: `Website ini mensimulasikan proses pembelian bahan bakar seperti di SPBU.
Dibuat dengan HTML, CSS, dan PHP, pengguna bisa memilih jenis bahan bakar dan jumlah liter, lalu sistem otomatis menghitung total harga.
Tampilannya dibuat dengan warna khas Shell supaya terlihat profesional dan menarik.`,
      image: Bakar,
      tech: ["HTML", "CSS", "PHP"],
      // demo: "#",
      // github: "#",
   },

   {
      title: "Rental Motor",
      description: "Aplikasi web sederhana untuk mengelola penyewaan motor.",
      details: `Aplikasi ini dibuat untuk membantu mengelola data penyewaan motor.
Menggunakan HTML, CSS, dan PHP tanpa framework, pengguna bisa menambah data pelanggan, motor, lama sewa, dan sistem otomatis menghitung total biaya.
Desainnya dibuat sederhana dan mudah dipahami supaya bisa digunakan dengan nyaman.`,
      image: Motor,
      tech: ["HTML", "CSS", "PHP"],
      // demo: "#",
      // github: "#",
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
      // demo: "#",
      // github: "#",
   },

];

const Projects = () => {
   const [selected, setSelected] = useState(null);


   useEffect(() => {
      document.body.style.overflow = selected ? "hidden" : "auto";
      return () => (document.body.style.overflow = "auto");
   }, [selected]);

   return (
      <motion.section
         id="projects"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}
         className="min-h-screen flex flex-col items-center px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
      >

         <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
         >
            Proyek Saya
         </motion.h2>

         <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl">
            Beberapa proyek yang telah saya kerjakan sebagai bagian dari perjalanan
            saya dalam pengembangan web dan mobile menggunakan teknologi modern.
         </p>


         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
            {projects.map((project, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 relative group"
               >

                  <div className="relative overflow-hidden">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                     />


                     <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                     >
                        <button
                           onClick={() => setSelected(project)}
                           className="bg-white text-black dark:bg-gray-100 dark:text-gray-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
                        >
                           Detail
                        </button>
                     </motion.div>
                  </div>


                  <div className="p-6">
                     <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                        {project.title}
                     </h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                     </p>

                     <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
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
                  </div>
               </motion.div>
            ))}
         </div>


         <AnimatePresence>
            {selected && (
               <motion.div
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
               >
                  <motion.div
                     initial={{ scale: 0.9, opacity: 0, y: 20 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     exit={{ scale: 0.9, opacity: 0, y: 20 }}
                     transition={{ duration: 0.3 }}
                     className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full h-[80vh] flex overflow-hidden"
                  >


                     <div className="w-1/2 h-full bg-black flex justify-center items-center">
                        <img
                           src={selected.image}
                           alt={selected.title}
                           className="object-contain w-full h-full"
                        />
                     </div>


                     <div className="w-1/2 p-8 flex flex-col justify-center space-y-5">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                           {selected.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                           {selected.details}
                        </p>

                        <div className="flex flex-wrap gap-2">
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

                        <div className="flex gap-3 mt-2">
                           {selected.demo && (
                              <a
                                 href={selected.demo}
                                 target="_blank"
                                 className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                              >
                                 <FaExternalLinkAlt /> Live Demo
                              </a>
                           )}
                           {selected.github && (
                              <a
                                 href={selected.github}
                                 target="_blank"
                                 className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                              >
                                 <FaGithub /> GitHub
                              </a>
                           )}
                        </div>

                        <button
                           onClick={() => setSelected(null)}
                           className="self-end mt-6 px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:opacity-80 transition"
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
