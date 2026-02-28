import { motion } from "framer-motion";
import profilePic from "/profile.jpg";

const About = () => {
   return (
      <>
         <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-h-screen flex flex-col items-center px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
         >
            <motion.h2
               initial={{ opacity: 0, y: -30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center"
            >
               Tentang Saya
            </motion.h2>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
               {/* Foto Profile */}
               <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex justify-center"
               >
                  <div className="w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-2xl border-4 border-gray-300 dark:border-gray-700 shadow-lg">
                     <img
                        src={profilePic}
                        alt="Pandu Putra"
                        className="object-cover w-full h-full"
                     />
                  </div>
               </motion.div>

               {/* Teks About */}
               <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center md:text-left"
               >
                  <p className="mb-4">
                     Halo! Nama saya <span className="font-semibold text-gray-900 dark:text-gray-100">Pandu Putra Pratama</span>,
                     seorang pelajar sekaligus pengembang web yang senang mempelajari hal baru di dunia teknologi.
                     Saya suka membuat tampilan website yang rapi, responsif, dan mudah digunakan.
                  </p>

                  <p className="mb-4">
                     Saat ini saya fokus di bidang <span className="font-semibold">Frontend Development</span>,
                     namun saya juga terus mengasah kemampuan di sisi <span className="font-semibold">Backend</span> untuk menjadi developer yang lebih lengkap.
                     Saya juga mampu bekerja dengan baik dalam tim maupun secara individu.
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* Section Pengalaman - Timeline yang diperbaiki */}
         <motion.section
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="min-h-screen flex flex-col items-center px-6 md:px-16 py-20 bg-white dark:bg-black transition-colors duration-300"
         >
            <motion.h2
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7 }}
               viewport={{ once: false, amount: 0.3 }}
               className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center"
            >
               Pengalaman & Pendidikan
            </motion.h2>

            <motion.p
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.2 }}
               viewport={{ once: false, amount: 0.3 }}
               className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
            >
               Perjalanan karir dan pendidikan saya sejauh ini.
            </motion.p>

            {/* Timeline Container */}
            <div className="relative max-w-4xl w-full">
               {/* Garis Timeline - Desktop: Tengah, Mobile: Kiri */}
               <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-400 dark:bg-gray-700 md:-translate-x-1/2"></div>

               <div className="space-y-12">
                  {/* Item 1 - Lenna.ai */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.7 }}
                     viewport={{ once: false, amount: 0.3 }}
                     className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0"
                  >
                     {/* Konten Kiri - Desktop: Teks kanan, Mobile: Teks kiri (full width) */}
                     <div className="w-full md:w-[45%] pl-16 md:pl-0 md:pr-8 md:text-right">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                           Lenna.ai
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                           Jan 2025 - Jun 2025
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                           Magang — Junior Full Stack Developer
                        </p>
                        <p className="text-base text-gray-700 dark:text-gray-400">
                           Membangun aplikasi web HRIS untuk pengelolaan data karyawan internal.
                        </p>
                     </div>

                     {/* Titik Timeline */}
                     <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-200 shadow transform -translate-x-1/2 mt-1.5 md:mt-0"></div>

                     {/* Konten Kanan - Desktop: Kosong, Mobile: Kosong */}
                     <div className="hidden md:block md:w-[45%]"></div>
                  </motion.div>

                  {/* Item 2 - SMK Wikrama */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.7 }}
                     viewport={{ once: false, amount: 0.3 }}
                     className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0"
                  >
                     {/* Konten Kiri - Desktop: Kosong, Mobile: Kosong */}
                     <div className="hidden md:block md:w-[45%]"></div>

                     {/* Titik Timeline */}
                     <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-200 shadow transform -translate-x-1/2 mt-1.5 md:mt-0"></div>

                     {/* Konten Kanan - Desktop: Teks kiri, Mobile: Teks kiri (full width) */}
                     <div className="w-full md:w-[45%] pl-16 md:pl-8 md:text-left">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                           SMK Wikrama Bogor
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                           Jun 2023 - Jun 2026
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                           Siswa — Jurusan PPLG
                        </p>
                        <p className="text-base text-gray-700 dark:text-gray-400">
                           Mempelajari pemrograman Web & Mobile, serta pengembangan Frontend & Backend.
                        </p>
                     </div>
                  </motion.div>

                  {/* Item 3 - Project Based */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.7 }}
                     viewport={{ once: false, amount: 0.3 }}
                     className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0"
                  >
                     {/* Konten Kiri - Desktop: Teks kanan, Mobile: Teks kiri (full width) */}
                     <div className="w-full md:w-[45%] pl-16 md:pl-0 md:pr-8 md:text-right">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                           Project Based
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                           Jul 2025 - Aug 2025
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                           Frontend Developer
                        </p>
                        <p className="text-base text-gray-700 dark:text-gray-400">
                           Membangun antarmuka menggunakan Vue.js dan mengintegrasikan API REST.
                        </p>
                     </div>

                     {/* Titik Timeline */}
                     <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-200 shadow transform -translate-x-1/2 mt-1.5 md:mt-0"></div>

                     {/* Konten Kanan - Desktop: Kosong, Mobile: Kosong */}
                     <div className="hidden md:block md:w-[45%]"></div>
                  </motion.div>
               </div>
            </div>
         </motion.section>
      </>
   );
};

export default About;