import { motion } from "framer-motion";
import DasarAI from "../../assets/images/certificates/Belajar Dasar AI.png";
import Web from "../../assets/images/certificates/Web.png";
import Solid from "../../assets/images/certificates/SOLID.png";
import Fe from "../../assets/images/certificates/Fe_pemula.png";
import Flutter from "../../assets/images/certificates/flutter.png";
import Git from "../../assets/images/certificates/Git.png";
import JsCode from "../../assets/images/certificates/Js code.png";
import Js from "../../assets/images/certificates/Js Dasar.png";

// contoh data sertifikat
const certificates = [
   {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      image: Web,
      date: "09 November 2023",
   },
   {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      image: Js,
      date: "02 Februari 2026",
   },
   {
      title: "Belajar Front-End Web Untuk Pemula",
      issuer: "Dicoding Indonesia",
      image: Fe,
      date: "01 Februari 2026",
   },
   {
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      image: DasarAI,
      date: "13 Januari 2025",
   },
   {
      title: "Belajar Prinsip Pemrograman SOLID",
      issuer: "Dicoding Indonesia",
      image: Solid,
      date: "07 Agustus 2024",
   },
   {
      title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
      issuer: "Dicoding Indonesia",
      image: Flutter,
      date: " 01 Februari 2026",
   },
   {
      title: "Belajar Git",
      issuer: "Codepolitan",
      image: Git,
      date: "07 Februari 2025",
   },
   {
      title: "Belajar JavaScript Dasar",
      issuer: "CodePolitan",
      image: JsCode,
      date: "21 April 2025",
   },
];

const Certificates = () => {
   return (
      <motion.section
         id="certificates"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}
         className="min-h-screen flex flex-col items-center px-6 md:px-16 py-20 bg-white dark:bg-black transition-colors duration-300"
      >
         {/* Judul */}
         <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
         >
            Sertifikasi
         </motion.h2>

         <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl">
            Beberapa sertifikat yang saya peroleh sebagai bukti kompetensi dan
            pembelajaran saya di bidang pengembangan web dan mobile.
         </p>

         {/* Grid Sertifikat */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
            {certificates.map((cert, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{
                     scale: 1.02,
                     boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                  }}
                  className="bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300"
               >
                  {/* Gambar sertifikat */}
                  <div className="relative overflow-hidden">
                     <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                     />
                  </div>

                  {/* Detail sertifikat */}
                  <div className="p-6">
                     <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {cert.title}
                     </h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {cert.issuer}
                     </p>

                     <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                        {cert.date}
                     </h3>
                  </div>
               </motion.div>
            ))}
         </div>
      </motion.section>
   );
};

export default Certificates;
