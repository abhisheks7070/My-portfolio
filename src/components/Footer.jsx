import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white text-l md:text-xl bg-slate-700 p-4 mt-auto">
      <div className="container mx-auto text-center">
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
        <div>&copy; {new Date().getFullYear()} Abhishek Singh. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
