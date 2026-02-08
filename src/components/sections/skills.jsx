import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiDart,
  SiFlutter,
} from "react-icons/si";

const leftSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
  { name: "Dart", icon: <SiDart className="text-blue-700" /> },
  { name: "React.js", icon: <FaReact className="text-sky-500" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
];

const rightSkills = [
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center px-6 md:px-16 py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 text-center"
      >
        Kemampuan Teknis
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
      >
       Teknologi Yang saya gunakan dalam pengembangan aplikasi web dan mobile.
      </motion.p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center md:text-left">
            Programming & Framework
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {leftSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.15), 0 0 12px rgba(255,255,255,0.1)",
                }}
                className="group flex flex-col items-center justify-center 
  bg-white dark:bg-gray-950 
  border border-gray-200 dark:border-gray-700 
  rounded-xl p-5 shadow-sm 
  transition-all duration-300 ease-out cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 3 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl mb-3 transition-transform duration-300 
    group-hover:scale-110 group-hover:text-gray-800 
    dark:group-hover:text-gray-100"
                >
                  {skill.icon}
                </motion.div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-center text-sm mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center md:text-left">
            Tools & Database
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {rightSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.15), 0 0 12px rgba(255,255,255,0.1)",
                }}
                className="group flex flex-col items-center justify-center 
  bg-white dark:bg-gray-950 
  border border-gray-200 dark:border-gray-700 
  rounded-xl p-5 shadow-sm 
  transition-all duration-300 ease-out cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 3 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl mb-3 transition-transform duration-300 
    group-hover:scale-110 group-hover:text-gray-800 
    dark:group-hover:text-gray-100"
                >
                  {skill.icon}
                </motion.div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-center text-sm mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
