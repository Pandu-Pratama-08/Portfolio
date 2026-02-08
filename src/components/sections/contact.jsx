import { motion } from "framer-motion";
import {
   FaEnvelope,
   FaGithub,
   FaLinkedin,
   FaInstagram,
   FaPhoneAlt,
   FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
   return (
      <motion.section
         id="contact"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}
         className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
      >
         {/* Judul */}
         <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 text-center"
         >
            Hubungi Saya
         </motion.h2>

         <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl text-sm md:text-base leading-relaxed">
            Tertarik untuk bekerja sama, berdiskusi, atau punya proyek yang ingin
            dikembangkan bersama? Kirim pesan langsung melalui form di bawah ini.
         </p>

         {/* Konten utama */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Form Kontak */}
            <motion.form
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: false, amount: 0.3 }}
               className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 space-y-4"
               onSubmit={(e) => e.preventDefault()}
            >
               <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm font-medium">
                     Nama
                  </label>
                  <input
                     type="text"
                     placeholder="Masukkan nama kamu"
                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 bg-transparent text-sm"
                     required
                  />
               </div>

               <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm font-medium">
                     Email
                  </label>
                  <input
                     type="email"
                     placeholder="Masukkan email kamu"
                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 bg-transparent text-sm"
                     required
                  />
               </div>

               <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm font-medium">
                     Pesan
                  </label>
                  <textarea
                     placeholder="Tulis pesan kamu..."
                     rows="4"
                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 bg-transparent text-sm"
                     required
                  ></textarea>
               </div>

               <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-full bg-black text-white dark:bg-white dark:text-black py-2.5 rounded-lg font-medium shadow-md hover:opacity-90 transition"
               >
                  Kirim Pesan
               </motion.button>
            </motion.form>

            {/* Informasi Kontak */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: false, amount: 0.3 }}
               className="flex flex-col justify-between bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
               {/* Judul */}
               <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5">
                     Informasi Kontak
                  </h3>

                  <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm">
                     <div className="flex items-center gap-3 pt-3">
                        <FaMapMarkerAlt className="text-lg" />
                        <span>Bogor, Jawa Barat, Indonesia</span>
                     </div>
                     <div className="flex items-center gap-3 pt-3">
                        <FaPhoneAlt className="text-lg" />
                        <span>+62 858-9024-2315</span>
                     </div>
                     <div className="flex items-center gap-3 pt-3">
                        <FaEnvelope className="text-lg" />
                        <span>panduputra300308@gmail.com</span>
                     </div>
                  </div>
               </div>

               {/* Sosial Media */}
               <div className="mt-10">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                     Temukan Saya
                  </h4>
                  <div className="flex gap-5 text-xl">
                     {/* GitHub */}
                     <a
                        href="https://github.com/Pandu-Pratama-08"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-black hover:border-black dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                     >
                        <FaGithub />
                     </a>

                     {/* LinkedIn */}
                     <a
                        href="https://www.linkedin.com/in/pandu-putra-pratama-/"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 transform hover:scale-110"
                     >
                        <FaLinkedin />
                     </a>

                     {/* Instagram */}
                     <a
                        href="https://www.instagram.com/pnduptra_pratma/"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 transform hover:scale-110"
                     >
                        <FaInstagram />
                     </a>
                  </div>

               </div>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default Contact;
