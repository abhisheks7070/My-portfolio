import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import wallet from '../assets/wallet-app.png';
import insurance from '../assets/insurance.png';
import taskManager from '../assets/task_manager.png';


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

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="bg-slate-700 p-8 min-h-screen">
      <div className="container mx-auto text-center ">
        <h2 className="head text-slate-300 text-3xl font-bold mb-8">Projects</h2>
        <div className="relative bg-gray-500 rounded-2xl">
          <div className="text-black text-start overflow-x-auto whitespace-nowrap flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`mx-auto w-[80vw] h-auto p-4 rounded-xl shadow-lg inline-block ${index === currentIndex ? 'block' : 'hidden'
                  } `}
              >
                <h3 className="md:text-3xl text-2xl font-bold mb-5 text-center text-wrap">{index+1}. {project.title}</h3>
                <div className='md:w-[40vw] md:h-[25vw] w-70vw h-50vh mx-auto order-solid border-4 overflow-hidden border-black rounded-xl mb-4   '>
                  <img src={project.img} alt={project.title} className="mx-auto w-full h-full object-fill rounded-xl" />

                </div>
                <div className='text-xl md:text-4xl font-bold mb-2 text-wrap underline decoration-solid'>Description: </div>
                <p className="text-lg md:text-3xl mb-5 text-wrap ">{project.desc}</p>
                <div className='text-xl md:text-4xl font-bold mb-2 text-wrap underline decoration-solid'>Features:</div>
                <ul className='list-disc list-inside text-l md:text-3xl text-wrap'>
                  {
                    project.features.map((feature, index) => {
                      return (
                        <li key={index}>{feature}</li>
                      )
                    })
                  }
                </ul>
                <div className=" mt-4 flex justify-center space-x-4 ">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-slate-800 w-fit px-5 py-1 rounded-full text-l md:text-xl text-blue-300 hover:underline">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-slate-800 w-fit px-5 py-1 rounded-full text-l md:text-xl text-blue-300 hover:underline">Live</a>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-[-5vw]">
            <button onClick={handlePrev} className="bg-slate-800 text-white p-2 rounded-full hover:bg-slate-900">
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-[-5vw]">
            <button onClick={handleNext} className="bg-slate-800 text-white p-2 rounded-full hover:bg-slate-900">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


