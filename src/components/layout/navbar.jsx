import React, { useState, useEffect } from 'react';
import useTheme from '../../utils/useTheme';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import clsx from 'clsx';

const NAVS = ["home", "about", "skills", "projects", "certificates", "contact"];

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false);
   const { theme, toggleTheme } = useTheme();
   const [open, setOpen] = useState(false);

   useEffect(() => {
      const onscroll = () => setScrolled(window.scrollY > 30);
      window.addEventListener("scroll", onscroll);
      return () => window.removeEventListener("scroll", onscroll);
   }, []);

   return (
      <nav className={clsx("fixed w-full z-50 transition", scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow" : "bg-transparent")}>
         <div className="container mx-auto px-6 flex items-center justify-between h-16">
            <div className="font-bold text-xl dark:text-white">PanduPutra</div>

            <ul className="hidden md:flex space-x-6 items-center">
               {NAVS.map(item => (
                  <li key={item}>
                     <Link
                        activeClass="text-primary underline"
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer hover:text-primary transition dark:text-gray-100">

                        <span className="relative inline-block group">
                           {item.charAt(0).toUpperCase() + item.slice(1)}
                           <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                     </Link>
                    
                  </li>
               ))}
               <li>
                  <button
                     onClick={toggleTheme}
                     className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                     title="Toggle Theme">

                     {theme === "light" ? (
                        <FaMoon className="text-gray-800" />
                     ) : (
                        <FaSun className="text-yellow-400" />
                     )}
                  </button>
               </li>

            </ul>

            {/* Mobile menu icon */}
            <div className="md:hidden flex items-center gap-2">
               <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
               >
                  {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
               </button>

               <button
                  onClick={() => setOpen(!open)}
                  aria-label="menu"
                  className="p-2 rounded-md border dark:border-gray-600"
               >
                  {open ? '✕' : '☰'}
               </button>
            </div>
         </div>

         {/* Mobile dropdown */}
         {open && (
            <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow text-gray-800 dark:text-gray-100">
               <div className="px-6 pb-6 space-y-4">
                  {NAVS.map(item => (
                     <Link
                        key={item}
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setOpen(false)}
                        className="block cursor-pointer py-2 hover:text-primary"
                     >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                     </Link>
                  ))}
                  <a href="/CV.pdf" className="inline-block btn-primary">Download CV</a>
               </div>
            </div>
         )}

      </nav>
   );
};

export default Navbar;