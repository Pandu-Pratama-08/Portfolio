import { motion } from "framer-motion";

const Footer = () => {
   return (
      <motion.footer
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
         className="bg-white dark:bg-black text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 py-6 px-6 text-center"
      >
         <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto gap-4">
            <p className="text-sm">
               © {new Date().getFullYear()} Pandu Putra Pratama. All Rights Reserved.
            </p>
         </div>
      </motion.footer>
   );
};

export default Footer;
