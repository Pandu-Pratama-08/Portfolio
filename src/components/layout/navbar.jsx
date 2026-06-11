import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../../utils/useTheme";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import {
   HiOutlineHome,
   HiOutlineUser,
   HiOutlineViewGrid,
   HiOutlineMail,
   HiArrowRight,
   HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profilePic from "/poto.png";
import clsx from "clsx";

const NAVS = [
   { id: "home", label: "Home", Icon: HiOutlineHome },
   { id: "about", label: "About", Icon: HiOutlineUser },
   { id: "projects", label: "Projects", Icon: HiOutlineViewGrid },
   { id: "contact", label: "Contact", Icon: HiOutlineMail },
];

const Logo = () => (
   <div className="flex items-center gap-0.5 font-mono text-sm font-medium select-none">
      <span className="text-gray-400 dark:text-gray-500">&lt;</span>
      <span className="text-gray-900 dark:text-gray-100">PanduPutra</span>
      <span className="text-gray-400 dark:text-gray-500">/&gt;</span>
   </div>
);

const Hamburger = ({ open }) => (
   <div className="flex flex-col gap-[5px] w-[18px]">
      <motion.span
         animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
         transition={{ duration: 0.22, ease: "easeInOut" }}
         className="block h-[1.5px] w-full bg-gray-800 dark:bg-gray-200 rounded origin-center"
      />
      <motion.span
         animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
         transition={{ duration: 0.15 }}
         className="block h-[1.5px] w-[14px] bg-gray-800 dark:bg-gray-200 rounded"
      />
      <motion.span
         animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
         transition={{ duration: 0.22, ease: "easeInOut" }}
         className="block h-[1.5px] w-full bg-gray-800 dark:bg-gray-200 rounded origin-center"
      />
   </div>
);

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false);
   const [open, setOpen] = useState(false);
   const { theme, toggleTheme } = useTheme();

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 30);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "auto";
      return () => { document.body.style.overflow = "auto"; };
   }, [open]);

   return (
      <nav
         className={clsx(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled
               ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-800/70"
               : "bg-transparent"
         )}
      >
         <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

            {/* Logo */}
            <Logo />

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
               {NAVS.map(({ id, label }) => (
                  <li key={id}>
                     <Link
                        to={id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="!text-gray-900 dark:!text-gray-100 !font-medium !bg-gray-100 dark:!bg-gray-800/60"
                        className="cursor-pointer px-3 py-1.5 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-150 block"
                     >
                        {label}
                     </Link>
                  </li>
               ))}
            </ul>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-2">
               <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
               >
                  {theme === "light"
                     ? <FaMoon size={13} />
                     : <FaSun size={13} className="text-yellow-400" />}
               </button>
               <Link
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-sm font-medium px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-85 transition"
               >
                  Hire me
               </Link>
            </div>

            {/* Mobile right — theme + burger */}
            <div className="md:hidden flex items-center gap-2">
               <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
               >
                  {theme === "light"
                     ? <FaMoon size={13} />
                     : <FaSun size={13} className="text-yellow-400" />}
               </button>
               <button
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700"
               >
                  <Hamburger open={open} />
               </button>
            </div>
         </div>

         {/* Mobile menu */}
         <AnimatePresence>
            {open && (
               <>
                  {/* Backdrop */}
                  <motion.div
                     key="backdrop"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     onClick={() => setOpen(false)}
                     className="fixed inset-0 bg-black/40 md:hidden"
                  />

                  {/* Panel */}
                  <motion.div
                     key="panel"
                     initial={{ opacity: 0, y: -6 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -6 }}
                     transition={{ duration: 0.22, ease: "easeOut" }}
                     className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
                  >
                     <div className="max-w-6xl mx-auto px-4 pt-3 pb-4">

                        {/* Header — avatar + available status */}
                        <div className="flex items-center gap-3 px-2 pb-3 mb-1 border-b border-gray-100 dark:border-gray-800">
                           <img
                              src={profilePic}
                              alt="PanduPutra"
                              className="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200 dark:border-gray-700"
                           />
                           <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-tight">
                                 PanduPutra
                              </p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                 <span className="text-[11px] text-gray-400 dark:text-gray-500">
                                    Available for work
                                 </span>
                              </div>
                           </div>
                        </div>

                        {/* Nav items */}
                        <div className="flex flex-col gap-0.5 py-1">
                           {NAVS.map(({ id, label, Icon }, i) => (
                              <motion.div
                                 key={id}
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 exit={{ opacity: 0, x: -8 }}
                                 transition={{ duration: 0.18, delay: 0.05 + i * 0.05 }}
                              >
                                 <Link
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => setOpen(false)}
                                    activeClass="!bg-gray-100 dark:!bg-gray-800 !text-gray-900 dark:!text-gray-100"
                                    className={clsx(
                                       "group flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-colors duration-150",
                                       "text-gray-500 dark:text-gray-400",
                                       "hover:bg-gray-100 dark:hover:bg-gray-800",
                                       "hover:text-gray-900 dark:hover:text-gray-100"
                                    )}
                                 >
                                    <Icon className="w-[18px] h-[18px] flex-shrink-0 transition-colors duration-150" />
                                    <span className="text-sm flex-1 font-medium">{label}</span>
                                    <HiArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                                 </Link>
                              </motion.div>
                           ))}
                        </div>

                        {/* CTA — Hire me */}
                        <motion.div
                           initial={{ opacity: 0, y: 6 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.18, delay: 0.28 }}
                           className="mt-2 pt-3 border-t border-gray-100 dark:border-gray-800"
                        >
                           <Link
                              to="contact"
                              smooth={true}
                              offset={-70}
                              duration={500}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:opacity-85 active:scale-[0.98] transition cursor-pointer"
                           >
                              <HiOutlinePaperAirplane className="w-4 h-4 -rotate-45" />
                              Hire me
                           </Link>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                           initial={{ opacity: 0, y: 6 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.18, delay: 0.34 }}
                           className="pt-3 mt-1 flex items-center justify-between"
                        >
                           <span className="text-[11px] text-gray-400 dark:text-gray-500">
                              Temukan saya
                           </span>
                           <div className="flex items-center gap-2">
                              <a
                                 href="https://github.com/Pandu-Pratama-08"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 aria-label="GitHub"
                                 className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white transition-all duration-200"
                              >
                                 <FaGithub size={14} />
                              </a>
                              <a
                                 href="https://www.linkedin.com/in/pandu-putra-pratama-/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 aria-label="LinkedIn"
                                 className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-200"
                              >
                                 <FaLinkedin size={14} />
                              </a>
                              <a
                                 href="https://www.instagram.com/pnduptra_pratma/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 aria-label="Instagram"
                                 className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-200"
                              >
                                 <FaInstagram size={14} />
                              </a>
                           </div>
                        </motion.div>

                     </div>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </nav>
   );
};

export default Navbar;