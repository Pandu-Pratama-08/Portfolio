import { useState } from "react";
import emailjs from "@emailjs/browser";
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
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [isSending, setIsSending] = useState(false);

   const [status, setStatus] = useState({
      type: "",
      message: "",
   });

   // Handle perubahan input
   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   // Handle submit form
   const handleSubmit = async (e) => {
      e.preventDefault();

      setIsSending(true);

      setStatus({
         type: "",
         message: "",
      });

      try {
         await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
               name: formData.name,
               email: formData.email,
               message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
         );

         // Berhasil
         setStatus({
            type: "success",
            message:
               "Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.",
         });

         // Reset form
         setFormData({
            name: "",
            email: "",
            message: "",
         });

         setTimeout(() => {
            setStatus({
               type: "",
               message: "",
            });
         }, 5000);
      } catch (error) {
         console.error("EmailJS Error:", error);

         // Gagal
         setStatus({
            type: "error",
            message:
               "Pesan gagal dikirim. Silakan coba lagi beberapa saat.",
         });
      } finally {
         setIsSending(false);
      }
   };

   return (
      <motion.section
         id="contact"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}
         className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
      >
         {/* Title */}
         <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 text-center"
         >
            Kontak
         </motion.h2>

         <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl text-sm sm:text-base leading-relaxed">
            Tertarik untuk bekerja sama, berdiskusi, atau punya proyek yang
            ingin dikembangkan bersama? Kirim pesan langsung melalui form di
            bawah ini.
         </p>

         {/* Main Content */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">

            {/* Contact Form */}
            <motion.form
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: false, amount: 0.3 }}
               onSubmit={handleSubmit}
               className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 space-y-5"
            >
               {/* Name */}
               <div>
                  <label
                     htmlFor="name"
                     className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium"
                  >
                     Nama
                  </label>

                  <input
                     id="name"
                     name="name"
                     type="text"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Masukkan nama kamu"
                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 bg-transparent text-sm dark:text-white"
                     required
                  />
               </div>

               {/* Email */}
               <div>
                  <label
                     htmlFor="email"
                     className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium"
                  >
                     Email
                  </label>

                  <input
                     id="email"
                     name="email"
                     type="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="Masukkan email kamu"
                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 bg-transparent text-sm dark:text-white"
                     required
                  />
               </div>

               {/* Message */}
               <div>
                  <label
                     htmlFor="message"
                     className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium"
                  >
                     Pesan
                  </label>

                  <textarea
                     id="message"
                     name="message"
                     rows="5"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Tulis pesan kamu..."
                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 bg-transparent text-sm resize-none dark:text-white"
                     required
                  ></textarea>
               </div>

               {/* Status Message */}
               {status.message && (
                  <motion.div
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className={`rounded-xl px-4 py-3 text-sm ${status.type === "success"
                           ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                           : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                  >
                     {status.message}
                  </motion.div>
               )}

               {/* Button */}
               <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.02 } : {}}
                  whileTap={!isSending ? { scale: 0.97 } : {}}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium shadow-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {isSending ? "Mengirim..." : "Kirim Pesan"}
               </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: false, amount: 0.3 }}
               className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
            >
               <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                     Informasi Kontak
                  </h3>

                  <div className="space-y-5 text-sm sm:text-base">

                     {/* Location */}
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                           <FaMapMarkerAlt className="text-gray-700 dark:text-gray-300" />
                        </div>

                        <div>
                           <p className="font-medium text-gray-900 dark:text-white">
                              Lokasi
                           </p>

                           <span className="text-gray-600 dark:text-gray-400">
                              Bogor, Jawa Barat, Indonesia
                           </span>
                        </div>
                     </div>

                     {/* Phone */}
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                           <FaPhoneAlt className="text-gray-700 dark:text-gray-300" />
                        </div>

                        <div>
                           <p className="font-medium text-gray-900 dark:text-white">
                              Telepon
                           </p>

                           <span className="text-gray-600 dark:text-gray-400">
                              +62 858-9024-2315
                           </span>
                        </div>
                     </div>

                     {/* Email */}
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                           <FaEnvelope className="text-gray-700 dark:text-gray-300" />
                        </div>

                        <div>
                           <p className="font-medium text-gray-900 dark:text-white">
                              Email
                           </p>

                           <span className="text-gray-600 dark:text-gray-400 break-all">
                              panduputra300308@gmail.com
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Social Media */}
               <div className="mt-10">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                     Temukan Saya
                  </h4>

                  <div className="flex gap-4">

                     {/* GitHub */}
                     <a
                        href="https://github.com/Pandu-Pratama-08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-110"
                     >
                        <FaGithub />
                     </a>

                     {/* LinkedIn */}
                     <a
                        href="https://www.linkedin.com/in/pandu-putra-pratama-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-110"
                     >
                        <FaLinkedin />
                     </a>

                     {/* Instagram */}
                     <a
                        href="https://www.instagram.com/pnduptra_pratma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#E4405F] hover:text-white transition-all duration-300 hover:scale-110"
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