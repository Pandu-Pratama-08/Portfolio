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

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
               <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex justify-center md:justify-start"
               >
                  <div className="w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-2xl border-4 border-gray-300 dark:border-gray-700 shadow-lg">
                     <img
                        src={profilePic}
                        alt="Pandu Putra"
                        className="object-cover w-full h-full"
                     />
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
               >
                  <p className="mb-4">
                     Halo! Nama saya <span className="font-semibold text-gray-900 dark:text-gray-100">Pandu Putra Pratama</span>,
                     seorang pelajar sekaligus pengembang web yang senang mempelajari hal baru di dunia teknologi.
                     Saya suka membuat tampilan website yang rapi, responsif, dan mudah digunakan.
                  </p>

                  <p className="mb-4">
                     Saat ini saya fokus di bidang <span className="font-semibold">Frontend Development</span>,
                     namun saya juga terus mengasah kemampuan di sisi <span className="font-semibold">Backend</span> untuk menjadi developer yang lebih lengkap.
                     saya juga mampu bekerja dengan baik dalam tim maupun secara individu.
                  </p>

               </motion.div>
            </div>
         </motion.section>

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
              perjalanan karir dan pendidikan saya sejauh ini.
            </motion.p>


      
            <div className="relative max-w-4xl w-full">
            
               <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-400 dark:bg-gray-700 transform -translate-x-1/2"></div>
               <div className="space-y-12">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.7 }}
                     viewport={{ once: false, amount: 0.3 }}
                     className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start"
                  >
                     <div className="w-full md:w-1/2 md:pr-10 text-right md:text-right">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                           Lenna.ai | Jan 2025 - Jun 2025
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                           Magang — Junior Full Stack Developer
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-400">
                           Membangun aplikasi web HRIS untuk pengelolaan data karyawan internal.
                        </p>
                     </div>
                     <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-800 dark:bg-gray-200 shadow"></div>
                     <div className="hidden md:block w-1/2"></div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.7 }}
                     viewport={{ once: false, amount: 0.3 }}
                     className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start"
                  >
                     <div className="hidden md:block w-1/2"></div>
                     <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-800 dark:bg-gray-200 shadow"></div>
                     <div className="w-full md:w-1/2 md:pl-10 text-left">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                           SMK Wikrama Bogor | Jun 2023 - Jun 2026
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                           Siswa — Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-400">
                           Mempelajari pemrograman Web & Mobile, serta pengembangan Frontend & Backend.
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.7 }}
                     viewport={{ once: false, amount: 0.3 }}
                     className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start"
                  >
                     <div className="w-full md:w-1/2 md:pr-10 text-right md:text-right">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                           Project Based | Jul 2025 - Aug 2025
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                           Frontend Developer
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-400">
                           Membangun antarmuka menggunakan Vue.js dan mengintegrasikan API REST.
                        </p>
                     </div>
                     <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-800 dark:bg-gray-200 shadow"></div>
                     <div className="hidden md:block w-1/2"></div>
                  </motion.div>
               </div>
            </div>
         </motion.section>
      </>
   );
};

export default About;
