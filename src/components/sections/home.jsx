import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import profilepic from "/home.png";
import { useLanguage } from "../../utils/LanguageContext";

const HomeSection = () => {
   const { t } = useLanguage();

   return (
      <section
         id="home"
         className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-white dark:bg-black transition-colors duration-300"
      >
         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-6xl">

            {/* Left Content */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 text-center md:text-left"
            >
               {/* Greeting */}
               <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100 mb-4">
                  {t.home.greeting}{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                     Pandu Putra Pratama
                  </span>
               </h1>

               {/* Typewriter */}
               <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 min-h-[40px]">
                  <Typewriter
                     words={t.home.typewriter}
                     loop={true}
                     cursor
                     cursorStyle="|"
                     typeSpeed={120}
                     deleteSpeed={120}
                     delaySpeed={2000}
                  />
               </h2>

               {/* Buttons */}
               <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">

                  {/* Project Button */}
                  <Link
                     to="projects"
                     smooth={true}
                     offset={-70}
                     duration={600}
                     className="cursor-pointer px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition"
                  >
                     {t.home.btnProject}
                  </Link>

                  {/* Download CV */}
                  <a
                     href="/cv/CV_Pandu_Putra_Pratama.pdf"
                     download="CV_Pandu_Putra_Pratama.pdf"
                     className="px-6 py-3 rounded-lg border border-gray-800 dark:border-gray-300 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                     {t.home.btnCV}
                  </a>
               </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 flex justify-center"
            >
               <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl">
                  <img
                     src={profilepic}
                     alt="Pandu Putra Pratama"
                     className="w-full h-full object-cover"
                  />
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default HomeSection;