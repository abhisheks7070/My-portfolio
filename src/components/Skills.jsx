import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiThealgorithms, SiDebian, SiPostgresql } from 'react-icons/si';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const headingVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const skills = [
    {
        title: "frontend",
        items: [
            {
                logo: <BiLogoHtml5 className="text-2xl" />,
                name: "HTML"
            },
            {
                logo: <BiLogoCss3 className="text-2xl" />,
                name: "CSS"
            },
            {
                logo: <BiLogoJavascript className="text-2xl" />,
                name: "JavaScript"
            },
            {
                logo: <FaReact className="text-2xl" />,
                name: "React"
            },
            {
                logo: <SiTailwindcss className="text-2xl" />,
                name: "TailwindCSS"
            }
        ]
    },
    {
        title: "backend",
        items: [
            {
                logo: <FaNodeJs className="text-2xl" />,
                name: "NodeJS"
            }
        ]
    },
    {
        title: "database",
        items: [
            {
                logo: <SiMongodb className="text-2xl" />,
                name: "MongoDB"
            },
            {
                logo: <SiPostgresql className="text-2xl" />,
                name: "Postgres"
            },
            {
                logo: <SiMysql className="text-2xl" />,
                name: "MySQL"
            }
        ]
    }
];

// Enhanced SkillCard Component with animations
const AnimatedSkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold capitalize mb-3">{skill.title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skill.items.map((item, index) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-1"
          >
            {item.logo}
            <span className="text-sm">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="skills"
      className="bg-slate-900 p-8 mx-auto text-center min-h-screen"
    >
      <motion.h2
        variants={headingVariants}
        className="head text-slate-300 text-3xl font-bold mb-12"
      >
        Skills
      </motion.h2>
      
      <div className="p-4 flex flex-col md:flex-row justify-between text-center items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="m-4 skills-right-content w-full md:w-[50vw]"
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/bf4ac98b-f207-49b7-8af9-2d55dec961b0/FRkdFcAI6v.json"
            className="w-2/3 md:h-2/3"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="skills-left-content w-full md:w-1/2 text-black"
        >
          <motion.div 
            className="w-fit mx-auto flex flex-wrap items-normal gap-5 justify-center"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
              >
                <AnimatedSkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;