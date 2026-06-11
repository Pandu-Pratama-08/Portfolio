import { motion } from "framer-motion";
import profilePic from "/poto.png";
import { Link } from "react-scroll";
import { FaReact, FaVuejs, FaLaravel, FaJsSquare, } from "react-icons/fa";
import { SiFlutter, SiMysql } from "react-icons/si";

const timeline = [
   {
      company: "PT. Sinergi Digital Teknologi",
      period: "Januari 2025 - Juni 2025",
      role: "Magang — Junior Full Stack Developer",
      desc: "Membangun aplikasi web HRIS untuk pengelolaan data karyawan internal.",
      side: "left",
   },
   {
      company: "Project Based",
      period: "Juli 2025 - Agustus 2025",
      role: "Frontend Developer",
      desc: "Membangun antarmuka menggunakan Vue.js dan mengintegrasikan API REST.",
      side: "left",
   },
   {
      company: "PT. Inovasi Solusi Internasional",
      period: "Maret 2026 - Mei 2026",
      role: "Magang - Junior Developer",
      desc: "Mempelajari logika pemrograman JavaScript serta melatih kemampuan problem solving dan debugging melalui berbagai studi kasus pengolahan data.",
      side: "left",
   },
   {
      company: "SMK Wikrama Bogor",
      period: "Juni 2023 - Juni 2026",
      role: "Siswa — Jurusan PPLG",
      desc: "Mempelajari pemrograman Web & Mobile, serta pengembangan Frontend & Backend.",
      side: "right",
   },
];

const stats = [
   { value: "7+", label: "Projek" },
   { value: "2", label: "Magang" },
   { value: "10+", label: "Teknologi" },
   { value: "2+", label: "Tahun Belajar" },
];

const badges = [
   { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
   { name: "React.js", icon: <FaReact className="text-sky-500" /> },
   { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
   { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
   { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
];

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
                     Halo! Nama saya{" "}
                     <span className="font-semibold text-gray-900 dark:text-gray-100">
                        Pandu Putra Pratama
                     </span>
                     , seorang pelajar sekaligus pengembang web yang senang mempelajari hal baru di dunia teknologi. Saya suka membuat tampilan website yang rapi, responsif, dan mudah digunakan.
                  </p>

                  <p className="mb-6">
                     Saat ini saya fokus di bidang{" "}
                     <span className="font-semibold">Frontend Development</span>
                     , namun saya juga terus mengasah kemampuan di sisi{" "}
                     <span className="font-semibold">Backend</span>{" "}
                     untuk menjadi developer yang lebih lengkap. Saya juga mampu bekerja dengan baik dalam tim maupun secara individu.
                  </p>

                  {/* Badge Teknologi */}
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                     {badges.map((badge, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ delay: i * 0.1, duration: 0.4 }}
                           viewport={{ once: true }}
                           className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                           <span className="text-base">{badge.icon}</span>
                           {badge.name}
                        </motion.div>
                     ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                     <Link
                        to="projects"
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className="cursor-pointer px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition text-center text-sm"
                     >
                        Lihat Proyek Saya
                     </Link>
                     <a
                        href="/cv/CV_Pandu Putra Pratama.pdf"
                        download="CV_Pandu_Putra_Pratama.pdf"
                        className="px-6 py-3 rounded-xl border border-gray-800 dark:border-gray-300 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center text-sm"
                     >
                        Unduh CV
                     </a>
                  </div>
               </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
               className="mt-16 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
               {stats.map((stat, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 * i, duration: 0.5 }}
                     viewport={{ once: true }}
                     className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                     <span className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {stat.value}
                     </span>
                     <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        {stat.label}
                     </span>
                  </motion.div>
               ))}
            </motion.div>
         </motion.section>

         {/* Section Pengalaman - Timeline */}
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
               Pengalaman &amp; Pendidikan
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
               <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-400 dark:bg-gray-700 md:-translate-x-1/2"></div>

               <div className="space-y-12">
                  {timeline.map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0"
                     >
                        {item.side === "left" ? (
                           <>
                              <div className="w-full md:w-[45%] pl-16 md:pl-0 md:pr-8 md:text-right">
                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {item.company}
                                 </h4>
                                 <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                                    {item.period}
                                 </p>
                                 <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                    {item.role}
                                 </p>
                                 <p className="text-base text-gray-700 dark:text-gray-400">
                                    {item.desc}
                                 </p>
                              </div>
                              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-200 shadow transform -translate-x-1/2 mt-1.5 md:mt-0"></div>
                              <div className="hidden md:block md:w-[45%]"></div>
                           </>
                        ) : (
                           <>
                              <div className="hidden md:block md:w-[45%]"></div>
                              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-200 shadow transform -translate-x-1/2 mt-1.5 md:mt-0"></div>
                              <div className="w-full md:w-[45%] pl-16 md:pl-8 md:text-left">
                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {item.company}
                                 </h4>
                                 <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                                    {item.period}
                                 </p>
                                 <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                    {item.role}
                                 </p>
                                 <p className="text-base text-gray-700 dark:text-gray-400">
                                    {item.desc}
                                 </p>
                              </div>
                           </>
                        )}
                     </motion.div>
                  ))}
               </div>
            </div>
         </motion.section>
      </>
   );
};

export default About;