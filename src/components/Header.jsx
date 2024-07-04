import React from 'react';
import { useState, useEffect } from 'react';


const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      setShowNavbar(true);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setShowNavbar(false);
      }, 3000); // Navbar will disappear after 3 seconds of inactivity
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);


  return (
    <>
      <ul className={`transition-all duration-500 ${showNavbar ? 'display-block' : 'hidden'} navbar text-black text-xl md:text-2xl font-bold gap-4 sticky top-0 z-50  flex items-start bg-gray-400 p-2 md:p-4`}>
        <li><a href="#home" className="hover:bg-gray-500 hover:rounded-xl">Home</a></li>
        <li><a href="#about" className="hover:bg-gray-500 hover:rounded-xl">About</a></li>
        <li><a href="#skills" className="hover:bg-gray-500 hover:rounded-xl">Skills</a></li>
        <li><a href="#projects" className="hover:bg-gray-500 hover:rounded-xl">Projects</a></li>
      </ul>
      <ul className={`transition-all duration-500 ${showNavbar ? 'hidden' : 'block'} navbar text-black text-xl md:text-2xl font-bold gap-4 z-50  flex items-start bg-gray-400 p-2 md:p-4`}>
        <li><a href="#home" className="hover:bg-gray-500 hover:rounded-xl">Home</a></li>
        <li><a href="#about" className="hover:bg-gray-500 hover:rounded-xl">About</a></li>
        <li><a href="#skills" className="hover:bg-gray-500 hover:rounded-xl">Skills</a></li>
        <li><a href="#projects" className="hover:bg-gray-500 hover:rounded-xl">Projects</a></li>
      </ul>
    </>


  );
};

export default Header;
