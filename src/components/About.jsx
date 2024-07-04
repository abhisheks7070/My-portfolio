import React from 'react';
import AboutImage from "../assets/about-us.svg";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const About = () => {
    return (
        <section id="about" className="bg-slate-700 p-8">
            <h2 className="head text-slate-900 text-3xl font-bold mx-auto text-center">About Me</h2>
            <div className='p-8 flex flex-col-reverse md:flex-row justify-between text-center items-center'>
                <div className='md:w-[50vw]'>
                    <p className="text-xl">
                        I'm Abhishek Singh, a web developer based in Ambernath, Maharashtra, India. I hold a <span className='bg-yellow-700 px-2 py- rounded-full'>BE</span> degree in <span className='bg-yellow-700 px-2 py- rounded-full'>Electronics</span> from <span className='bg-yellow-700 px-2 py- rounded-full'>Lokmanya Tilak college of Engineering, Navi Mumbai</span>. With a passion for web development, I'm dedicated to creating engaging and functional websites. Let's collaborate and make your online presence remarkable!</p>
                </div>
                <div className="container mx-auto text-center md:w-[50vw]">
                    <img src={AboutImage} alt="About Me" className="mx-auto mb-4" />
                </div>
            </div>
            <div className="flex justify-center gap-4 p-4 mb-4 bg-gray-300 rounded-full w-fit mx-auto">
                <a href="https://www.linkedin.com/in/abhishek-singh-64a45b128" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-black text-4xl mx-4 hover:text-gray-600" />
                </a>
                <a href="https://github.com/abhisheks7070" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-black text-4xl mx-4 hover:text-gray-600" />
                </a>
                <a href="https://www.instagram.com/singh_abhishek9" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-black text-4xl mx-4 hover:text-gray-600" />
                </a>
            </div>
        </section>
    );
};

export default About;
