import React from 'react';
import { useState, useEffect } from 'react';


const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  // useEffect(() => {
  //   let timer;
  //   const handleScroll = () => {
  //     setShowNavbar(true);
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //     timer = setTimeout(() => {
  //       setShowNavbar(false);
  //     }, 3000); // Navbar will disappear after 3 seconds of inactivity
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //   };
  // }, []);


  return (
    <>
      {/* <ul className={`transition-all duration-500 ${showNavbar ? 'flex' : 'hidden'} navbar text-black text-l md:text-2xl font-bold gap-2 md:gap-9 fixed top-0  z-10 items-start bg-gray-400 p-2 md:p-4 w-screen`}>
        <li><a href="#home" className="px-2 hover:bg-gray-500 hover:rounded-xl">Home</a></li>
        <li><a href="#about" className="px-2 hover:bg-gray-500 hover:rounded-xl">About</a></li>
        <li><a href="#skills" className="px-2 hover:bg-gray-500 hover:rounded-xl">Skills</a></li>
        <li><a href="#projects" className="px-2 hover:bg-gray-500 hover:rounded-xl">Projects</a></li>
        <li><a href="#contact" className="px-2 hover:bg-gray-500 hover:rounded-xl">Contact</a></li>
      </ul>
      <ul className={`transition-all duration-500 ${showNavbar ? 'hidden' : 'flex'} navbar text-black text-l md:text-2xl font-bold gap-2 md:gap-9 z-50 flex items-start bg-gray-400 p-2 md:p-4`}>
        <li><a href="#home" className="px-2 hover:bg-gray-500 hover:rounded-xl">Home</a></li>
        <li><a href="#about" className="px-2 hover:bg-gray-500 hover:rounded-xl">About</a></li>
        <li><a href="#skills" className="px-2 hover:bg-gray-500 hover:rounded-xl">Skills</a></li>
        <li><a href="#projects" className="px-2 hover:bg-gray-500 hover:rounded-xl">Projects</a></li>
        <li><a href="#contact" className="px-2 hover:bg-gray-500 hover:rounded-xl">Contact</a></li>
      </ul> */}
      <ul className={`transition-all duration-500 navbar text-white text-xs sm:text-sm md:text-2xl lg:text-4xl font-bold md:gap-9 z-50 flex fixed top-0 items-start p-2 md:p-4 w-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900`}>
        <li><a href="#home" className="px-2 hover:bg-gray-500 hover:rounded-xl">Home</a></li>
        <li><a href="#about" className="px-2 hover:bg-gray-500 hover:rounded-xl">About</a></li>
        <li><a href="#skills" className="px-2 hover:bg-gray-500 hover:rounded-xl">Skills</a></li>
        <li><a href="#projects" className="px-2 hover:bg-gray-500 hover:rounded-xl">Projects</a></li>
        <li><a href="#contact" className="px-2 hover:bg-gray-500 hover:rounded-xl">Contact</a></li>
      </ul> 
    </>


  );
};

export default Header;
