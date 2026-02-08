import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import profilepic from "/home.png";

const HomeSection = () => {
   return (
      <section
         id="home"
         className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-white dark:bg-black transition-colors duration-300"
      >
         <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
            {/* Bagian kiri - teks */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 text-center md:text-left"
            >
               <h1 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Halo, Saya{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                     Pandu Putra Pratama
                  </span>
               </h1>

               <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  <Typewriter
                     words={[
                        "Web Developer",
                        "Frontend Developer",
                        "Junior Full Stack Developer",
                     ]}
                     loop={true}
                     cursor
                     cursorStyle="|"
                     typeSpeed={120}
                     deleteSpeed={120}
                     delaySpeed={2000}
                  />
               </h2>

               <div className="flex justify-center md:justify-start gap-4">
                  <Link
                     to="projects"
                     smooth={true}
                     offset={-70}
                     duration={600}
                     className="btn-primary cursor-pointer"
                  >
                     Lihat Proyek Saya
                  </Link>

                  {/* Tombol Download CV */}
                  <a
                     href="/cv/CV_Pandu_Putra_Pratama.pdf"
                     download="CV_Pandu_Putra_Pratama.pdf"
                     className="border border-gray-800 dark:border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                     Unduh CV
                  </a>
               </div>
            </motion.div>

            {/* Bagian kanan - foto */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 flex justify-center"
            >
               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg">
                  <img
                     src={profilepic}
                     alt="Pandu Putra"
                     className="object-cover w-full h-full"
                  />
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default HomeSection;
