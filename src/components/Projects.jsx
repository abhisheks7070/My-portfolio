import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import wallet from '../assets/wallet-app.png';
import insurance from '../assets/insurance.png';
import taskManager from '../assets/task_manager.png';
import {motion, useAnimation, useInView } from 'framer-motion';



const Projects = () => {

  const projects = [
    {
      title: "Task manager",
      desc: "The Task Manager is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and redux toolkit for stete management. It allows users to manage tasks based on their roles (Admin, HR, Employee). The application includes features like user authentication, role-based access control, task creation, task management, and task status tracking.",
      features: [
  
        "Login with JWT (JSON Web Tokens) for secure authentication and Role-based access control (Admin, HR, Employee)",
        "Seperate Dashboard for ADMIN: Create tasks, manage submitted tasks (accept/reject), EMPLOYEE: Accept tasks, update task status (new → active → submitted), and HR:  Create new users.",
        "Task status: new_task, active_task, submitted_task, completed_task, only Admin can create tasks and manage submitted tasks and Employees can accept tasks and submit them.",
        "Redux Toolkit for global state management and Redux Thunk for handling asynchronous actions (e.g., fetching data).",
        "MongoDB for storing user and task data."
      ],
      img: taskManager,
  
      // github: "https://github.com/abhisheks7070/task_manager_frontend",
      live: "https://task-manager-frontend-bay.vercel.app/",
  
  
    },
    {
      title: "myWALLET App",
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
      title: "Insurance Website",
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
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  // };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 px-4 md:px-12 bg-gradient-to-b from-gray-700 via-green-900 to-gray-900 "
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-yellow-700 via-yellow-800 to-yellow-950 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-125 transition-shadow duration-300 p-5"
              initial={{ opacity: 0, y: 50 }}
              animate={mainControls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5, 
                    delay: 0.2 * index 
                  } 
                }
              }}
              // whileHover={{ y: 5 }}
            >
              <div className="h-48 overflow-hidden rounded-lg">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project?.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Projects;


