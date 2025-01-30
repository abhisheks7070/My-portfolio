
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import wallet from '../assets/wallet-app.png';
import insurance from '../assets/insurance.png';
import Myshopee from '../assets/Myshopee.png';

const projects = [
  {
    title: "1.Insurance Website",
    desc: "This project is an insurance website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website provides information about the insurance company and allows users to make inquiries by submitting their details. The submitted inquiries are sent to a backend created using Express.js and stored in a MongoDB database. There is also a frontend for agents that can be accessed only by entering a specific agent code.",
    features: [
      "Provides information about the insurance company.",
      "Users can make inquiries by submitting their details through a contact form.",
      "The contact form data is sent to the backend and stored in a MongoDB database.",
      "Restricted access to Agent website.",
      "Agent website can be accesed only by entering a specific agent code in the user website.",
      "Provides additional functionalities for agents (e.g., viewing inquiries, managing user data)."
    ],
    img: insurance,

    github: "https://github.com/abhisheks7070/Insurance_company_Full-stack",
    live: "https://pankaj-singh.onrender.com/",

  },
  {
    title: "2.myWALLET App",
    desc: "This is a Dummy payment website built using Express.js for the server runtime, MongoDB for the database, React for the frontend, Node.js for the backend, and JWT tokens for authentication. The application allows users to create an account, sign in, check their balance, and transfer money to other existing users.",
    features: [
      "User Account Creation: Users can create an account with their details.",
      "User Authentication: JWT tokens are used for user authentication.",
      "Sign In: Existing users can sign in to access their accounts.",
      "Check Balance: Users can check their account balance.",
      "Transfer Money: Users can transfer money to other existing users."

    ],
    img: wallet,

    github: "https://github.com/abhisheks7070/wallet-app-dev",
    live: "https://mywallet-ny2d.onrender.com",

  },
  {
    title: "E-commerece Website",
    desc: "This is a prototype full-stack e-commerce web application built using the MERN stack (MongoDB, Express, React, and Node.js) with JWT authentication for secure login and Redux for state management. The app allows users to browse products, add them to their cart, make purchases.",
    features: [

      "User Authentication: Register, login, and manage user sessions with JWT-based authentication.",
      "Responsive Design: Built with Tailwind CSS for a mobile-first and responsive design.",
      "Redux for State Management: Manage global state using Redux (e.g., cart, wishlist, authentication)"
    ],
    img: Myshopee,

    github: "https://github.com/abhisheks7070/e-commerce",
    live: "https://myshopee-x5ih.onrender.com",


  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      id="projects"
      className="bg-slate-700 p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="head text-slate-300 text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="relative">
          <div className="text-black text-start overflow-x-auto whitespace-nowrap flex">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`mx-auto w-[80vw] h-auto bg-gray-300 p-4 rounded-xl shadow-lg inline-block ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
                variants={projectVariants}
                initial="hidden"
                animate={index === currentIndex ? "visible" : "hidden"}
                exit="exit"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="mdtext-3xl text-2xl font-bold mb-5 text-center text-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="mx-auto border-solid border-4 border-black w-auto h-auto object-fill rounded-xl mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="text-xl md:text-2xl font-bold mb-2 text-wrap underline decoration-solid"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Description:
                </motion.div>
                <motion.p
                  className="text-l md:text-xl mb-5 text-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.desc}
                </motion.p>
                <motion.div
                  className="text-xl md:text-2xl font-bold mb-2 text-wrap underline decoration-solid"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Features:
                </motion.div>
                <motion.ul className="list-disc list-inside text-l md:text-xl text-wrap">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-4 flex justify-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 w-fit px-5 py-1 rounded-full text-l md:text-xl text-blue-300 hover:underline"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 w-fit px-5 py-1 rounded-full text-l md:text-xl text-blue-300 hover:underline"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 left-[-5vw]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handlePrev}
              className="bg-slate-800 text-white p-2 rounded-full hover:bg-slate-900"
            >
              <FaArrowLeft />
            </button>
          </motion.div>
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 right-[-5vw]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleNext}
              className="bg-slate-800 text-white p-2 rounded-full hover:bg-slate-900"
            >
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;