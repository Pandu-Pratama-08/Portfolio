import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../utils/LanguageContext";

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

const projectsMeta = [
   {
      image: Quran,
      tech: ["Flutter", "Dart", "Firebase"],
      demo: "https://quran-digital-fb709.web.app/",
      github: "https://github.com/Pandu-Pratama-08/Al-Quran_app",
   },
   {
      image: Rental,
      tech: ["Flutter", "Dart", "Firebase"],
      demo: "https://flutter-fieldrent.web.app/",
      github: "https://github.com/Pandu-Pratama-08/SewaLapangan",
   },
   {
      image: Siswa,
      tech: ["HTML", "CSS", "PHP"],
   },
   {
      image: Bakar,
      tech: ["HTML", "CSS", "PHP"],
   },
   {
      image: Motor,
      tech: ["HTML", "CSS", "PHP"],
   },
   {
      image: Nilai,
      tech: ["HTML", "CSS", "PHP"],
      demo: "https://cek-nilai.wuaze.com/",
      github: "https://github.com/Pandu-Pratama-08/Cek_Nilai",
   },
   {
      image: Hitung,
      tech: ["HTML", "CSS", "PHP"],
   },
];

const Projects = () => {
   const { t } = useLanguage();

   const [selected, setSelected] = useState(null);

   const projects = t.projects.list.map((item, i) => ({
      ...item,
      ...projectsMeta[i],
   }));

   useEffect(() => {
      document.body.style.overflow = selected ? "hidden" : "auto";

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [selected]);

   useEffect(() => {
      const handleEscape = (e) => {
         if (e.key === "Escape") {
            setSelected(null);
         }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
         window.removeEventListener("keydown", handleEscape);
      };
   }, []);

   return (
      <motion.section
         id="projects"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true, amount: 0.1 }}
         className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 sm:px-6 lg:px-16 py-20 transition-colors duration-300"
      >
         {/* Heading */}
         <div className="text-center mb-12">
            <motion.h2
               initial={{ opacity: 0, y: -30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
               {t.projects.title}
            </motion.h2>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
               {t.projects.subtitle}
            </p>
         </div>

         {/* Project Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 group cursor-pointer"
                  onClick={() => setSelected(project)}
               >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />

                     <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <span className="bg-white text-black px-4 py-2 rounded-lg font-medium">
                           {t.projects.viewDetail}
                        </span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                     <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-1">
                        {project.title}
                     </h3>

                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                     </p>

                     <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                           <span
                              key={i}
                              className={`text-xs px-3 py-1 rounded-full font-medium ${techColors[tech] ||
                                 "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
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

         {/* Modal */}
         <AnimatePresence>
            {selected && (
               <motion.div
                  className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
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
                     onClick={(e) => e.stopPropagation()}
                     className="
               relative
               bg-white dark:bg-gray-900
               rounded-2xl
               overflow-hidden
               shadow-2xl
               w-full
               max-w-4xl
               h-[90vh]
               flex
               flex-col
               md:flex-row
            "
                  >
                     {/* Close Mobile */}
                     <button
                        onClick={() => setSelected(null)}
                        className="
                  absolute
                  top-4
                  right-4
                  md:hidden
                  z-10
                  p-2
                  bg-black/50
                  text-white
                  rounded-full
               "
                     >
                        <FaTimes size={18} />
                     </button>

                     {/* IMAGE */}
                     <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                        <div className="h-64 sm:h-72 md:h-full max-h-[90vh] overflow-hidden">
                           <img
                              src={selected.image}
                              alt={selected.title}
                              className="
                        w-full
                        h-full
                        object-cover
                        object-top
                     "
                           />
                        </div>
                     </div>

                     {/* CONTENT */}
                     <div className="w-full md:w-1/2 p-6 flex flex-col overflow-y-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                           {selected.title}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line mb-5">
                           {selected.details}
                        </p>

                        {/* TECH */}
                        <div className="flex flex-wrap gap-2 mb-6">
                           {selected.tech.map((tech, i) => (
                              <span
                                 key={i}
                                 className={`text-xs px-3 py-1 rounded-full font-medium ${techColors[tech] ||
                                    "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
                                    }`}
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                           {selected.demo && (
                              <a
                                 href={selected.demo}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="
                           flex
                           items-center
                           justify-center
                           gap-2
                           px-5
                           py-2.5
                           rounded-lg
                           bg-black
                           text-white
                           dark:bg-white
                           dark:text-black
                           text-sm
                           font-medium
                           hover:opacity-90
                           transition
                        "
                              >
                                 <FaExternalLinkAlt size={14} />
                                 Live Demo
                              </a>
                           )}

                           {selected.github && (
                              <a
                                 href={selected.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="
                           flex
                           items-center
                           justify-center
                           gap-2
                           px-5
                           py-2.5
                           rounded-lg
                           border
                           border-gray-300
                           dark:border-gray-700
                           text-sm
                           font-medium
                           hover:bg-gray-100
                           dark:hover:bg-gray-800
                           transition
                        "
                              >
                                 <FaGithub size={14} />
                                 GitHub
                              </a>
                           )}
                        </div>

                        {/* Close Desktop */}
                        <button
                           onClick={() => setSelected(null)}
                           className="
                     hidden
                     md:block
                     mt-6
                     self-start
                     px-5
                     py-2
                     rounded-lg
                     bg-gray-200
                     dark:bg-gray-800
                     hover:opacity-80
                     transition
                  "
                        >
                           {t.projects.close}
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