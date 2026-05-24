import { motion } from "framer-motion";
import profilePic from "/foto.jpg";
import { useLanguage } from "../../utils/LanguageContext";

const About = () => {
   const { t } = useLanguage();

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
               {t.about.title}
            </motion.h2>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
               {/* Foto Profile */}
               <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex justify-center"
               >
                  <div className="w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-2xl border-4 border-gray-300 dark:border-gray-700 shadow-lg">
                     <img
                        src={profilePic}
                        alt="Pandu Putra"
                        className="object-cover w-full h-full"
                     />
                  </div>
               </motion.div>

               {/* Teks About */}
               <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center md:text-left"
               >
                  <p className="mb-4">
                     {t.about.p1}{" "}
                     <span className="font-semibold text-gray-900 dark:text-gray-100">
                        Pandu Putra Pratama
                     </span>
                     , {t.about.p1b}
                  </p>

                  <p className="mb-4">
                     {t.about.p2a}{" "}
                     <span className="font-semibold">Frontend Development</span>
                     , {t.about.p2b}{" "}
                     <span className="font-semibold">Backend</span>{" "}
                     {t.about.p2c}
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* Section Pengalaman - Timeline */}
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
               {t.about.expTitle}
            </motion.h2>

            <motion.p
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.2 }}
               viewport={{ once: false, amount: 0.3 }}
               className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
            >
               {t.about.expSubtitle}
            </motion.p>

            {/* Timeline Container */}
            <div className="relative max-w-4xl w-full">
               <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-400 dark:bg-gray-700 md:-translate-x-1/2"></div>

               <div className="space-y-12">
                  {t.about.timeline.map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0"
                     >
                        {item.side === "left" ? (
                           <>
                              <div className="w-full md:w-[45%] pl-16 md:pl-0 md:pr-8 md:text-right">
                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {item.company}
                                 </h4>
                                 <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                                    {item.period}
                                 </p>
                                 <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                    {item.role}
                                 </p>
                                 <p className="text-base text-gray-700 dark:text-gray-400">
                                    {item.desc}
                                 </p>
                              </div>
                              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-200 shadow transform -translate-x-1/2 mt-1.5 md:mt-0"></div>
                              <div className="hidden md:block md:w-[45%]"></div>
                           </>
                        ) : (
                           <>
                              <div className="hidden md:block md:w-[45%]"></div>
                              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-200 shadow transform -translate-x-1/2 mt-1.5 md:mt-0"></div>
                              <div className="w-full md:w-[45%] pl-16 md:pl-8 md:text-left">
                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {item.company}
                                 </h4>
                                 <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                                    {item.period}
                                 </p>
                                 <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                    {item.role}
                                 </p>
                                 <p className="text-base text-gray-700 dark:text-gray-400">
                                    {item.desc}
                                 </p>
                              </div>
                           </>
                        )}
                     </motion.div>
                  ))}
               </div>
            </div>
         </motion.section>
      </>
   );
};

export default About;