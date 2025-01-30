import React from 'react';
import profilePic from "../assets/profile.png";
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section
      id="home"
      className="bg-slate-900 p-8 flex flex-col md:flex-row gap-5 md:gap-0 justify-between text-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Profile Section */}
      <motion.div
        className="md:w-[50vw]"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src={profilePic}
          alt="My Photo"
          className="mx-auto bg-slate-400 rounded-full w-[60vw] h-[60vw] md:w-[25vw] md:h-[25vw] md:object-contain my-3 md:my-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
          whileHover={{ scale: 1.1, rotate: 2 }}
        />
        <div className="text-slate-400 mx-auto text-center text-xl md:text-3xl font-bold hover:text-slate-200 transition-colors duration-300">
          Abhishek Singh
        </div>
      </motion.div>

      {/* Welcome Section */}
      <motion.div
        className="md:w-[50vw]"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-slate-100 hover:text-teal-400 transition-colors duration-300">
          WELCOME
        </h1>
        <p className="text-xl text-slate-400 hover:text-slate-200 transition-colors duration-300">
          I am a web developer passionate about creating dynamic and engaging online experiences. With a commitment to continuous learning and a keen eye for detail, I strive to bring innovative ideas to life through clean and efficient code. Explore my work and join me on this exciting web development journey.
        </p>
      </motion.div>
    </motion.section>
    );
};

export default Home;
