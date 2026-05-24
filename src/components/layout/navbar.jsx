import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../../utils/useTheme";
import { useLanguage } from "../../utils/LanguageContext";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import clsx from "clsx";

const NAVS = [
   "home",
   "about",
   "skills",
   "projects",
   "certificates",
   "contact",
];

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false);
   const [open, setOpen] = useState(false);

   const { theme, toggleTheme } = useTheme();
   const { lang, toggleLang, t } = useLanguage();

   useEffect(() => {
      const onScroll = () => {
         setScrolled(window.scrollY > 30);
      };

      window.addEventListener("scroll", onScroll);

      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, []);

   // Lock body scroll when mobile menu open
   useEffect(() => {
      if (open) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [open]);

   return (
      <nav
         className={clsx(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled
               ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow"
               : "bg-transparent"
         )}
      >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

            {/* Logo */}
            <div className="text-lg sm:text-xl font-bold dark:text-white">
               PanduPutra
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6">
               {NAVS.map((item, i) => (
                  <li key={item}>
                     <Link
                        activeClass="text-primary"
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer transition hover:text-primary dark:text-gray-100"
                     >
                        <span className="relative inline-block group">
                           {t.nav[i].charAt(0).toUpperCase() +
                              t.nav[i].slice(1)}

                           <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                     </Link>
                  </li>
               ))}

               {/* Language */}
               <li>
                  <button
                     onClick={toggleLang}
                     className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium dark:text-gray-100"
                  >
                     {lang === "id" ? "EN" : "ID"}
                  </button>
               </li>

               {/* Theme */}
               <li>
                  <button
                     onClick={toggleTheme}
                     className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                     {theme === "light" ? (
                        <FaMoon className="text-gray-800" />
                     ) : (
                        <FaSun className="text-yellow-400" />
                     )}
                  </button>
               </li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
               <button
                  onClick={() => setOpen(!open)}
                  aria-label="menu"
                  className="relative z-[60] p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:text-white"
               >
                  <motion.span
                     animate={{ rotate: open ? 180 : 0 }}
                     transition={{ duration: 0.3 }}
                     className="block text-lg"
                  >
                     {open ? "✕" : "☰"}
                  </motion.span>
               </button>
            </div>
         </div>

         {/* Mobile Dropdown */}
         <AnimatePresence>
            {open && (
               <>
                  {/* Backdrop */}
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     onClick={() => setOpen(false)}
                     className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
                  />

                  {/* Menu */}
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.25 }}
                     className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-gray-200 dark:border-gray-800 overflow-hidden"
                  >
                     <div className="px-6 py-6 space-y-5">

                        {/* Navigation */}
                        {NAVS.map((item, i) => (
                           <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{
                                 duration: 0.2,
                                 delay: i * 0.05,
                              }}
                           >
                              <Link
                                 to={item}
                                 spy={true}
                                 smooth={true}
                                 offset={-70}
                                 duration={500}
                                 onClick={() => setOpen(false)}
                                 className="block cursor-pointer text-base font-medium hover:text-primary transition dark:text-gray-100"
                              >
                                 {t.nav[i].charAt(0).toUpperCase() +
                                    t.nav[i].slice(1)}
                              </Link>
                           </motion.div>
                        ))}

                        {/* Divider */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">

                           {/* Actions */}
                           <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ delay: 0.2 }}
                              className="flex items-center gap-3"
                           >

                              {/* Language */}
                              <button
                                 onClick={toggleLang}
                                 className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-sm dark:text-white"
                              >
                                 {lang === "id" ? "EN" : "ID"}
                              </button>

                              {/* Theme */}
                              <button
                                 onClick={toggleTheme}
                                 className="p-2 rounded-full border border-gray-300 dark:border-gray-600 dark:text-white"
                              >
                                 {theme === "light" ? (
                                    <FaMoon className="text-gray-800" />
                                 ) : (
                                    <FaSun className="text-yellow-400" />
                                 )}
                              </button>
                           </motion.div>

                           {/* Download CV */}
                           {/* <motion.a
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ delay: 0.3 }}
                              href="/CV.pdf"
                              download
                              className="inline-block mt-5 px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition"
                           >
                              {t.downloadCV}
                           </motion.a> */}
                        </div>
                     </div>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </nav>
   );
};

export default Navbar;