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

const skillsRow1 = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-orange-500" />,
    labelHover: "group-hover:text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-blue-500" />,
    labelHover: "group-hover:text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-yellow-400" />,
    labelHover: "group-hover:text-yellow-400",
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-purple-600" />,
    labelHover: "group-hover:text-purple-600",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-sky-500" />,
    labelHover: "group-hover:text-sky-500",
  },
  {
    name: "Vue.js",
    icon: <FaVuejs className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-green-500" />,
    labelHover: "group-hover:text-green-500",
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-red-500" />,
    labelHover: "group-hover:text-red-500",
  },
];

const skillsRow2 = [
  {
    name: "Dart",
    icon: <SiDart className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-blue-700" />,
    labelHover: "group-hover:text-blue-700",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-blue-400" />,
    labelHover: "group-hover:text-blue-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-cyan-400" />,
    labelHover: "group-hover:text-cyan-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-orange-600" />,
    labelHover: "group-hover:text-orange-600",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white" />,
    labelHover: "group-hover:text-gray-900 dark:group-hover:text-white",
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-orange-500" />,
    labelHover: "group-hover:text-orange-500",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-blue-400" />,
    labelHover: "group-hover:text-blue-400",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-sky-700" />,
    labelHover: "group-hover:text-sky-700",
  },
];

const SkillItem = ({ skill }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.05 }}
    transition={{ duration: 0.2 }}
    className="group flex items-center gap-3 px-4 py-2 min-w-fit cursor-default"
  >
    <span className="text-2xl">{skill.icon}</span>
    <span
      className={`font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap transition-colors duration-300 ${skill.labelHover}`}
    >
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-white dark:bg-black overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 text-center"
      >
        Kemampuan Teknis
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16"
      >
        Teknologi yang saya gunakan dalam pengembangan aplikasi web dan mobile.
      </motion.p>

      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Fade kiri */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />

        {/* Fade kanan */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        <div className="space-y-4">
          {/* Row 1 → */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-2 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 ← */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-2 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;