import React from 'react';
import profilePic from "../assets/profile.png";

const Home = () => {
    return (
        <section id="home" className="bg-slate-900 p-8 flex flex-col md:flex-row gap-5 md:gap-0 justify-between text-center items-center">
            <div className="md:w-[50vw]">
                {/* <div className='mx-auto md:w-[25vw] md:h-[25vw] bg-slate-400 rounded-full  mb-4'> */}
                    <img src={profilePic} alt="My Photo" className="mx-auto bg-slate-400 rounded-full w-[60vw] h-[60vw] md:w-[25vw] md:h-[25vw] md:object-contain my-3 md:my-8" />
                {/* </div> */}
                <div className='text-slate-400 mx-auto text-center text-xl md:text-3xl font-bold'>Abhishek Singh</div>
            </div>
            <div className='md:w-[50vw]'>
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">WELCOME</h1>
                <p className="text-xl">I am a web developer passionate about creating dynamic and engaging online experiences. With a commitment to continuous learning and a keen eye for detail, I strive to bring innovative ideas to life through clean and efficient code. Explore my work and join me on this exciting web development journey.</p>
            </div>
        </section>
    );
};

export default Home;
