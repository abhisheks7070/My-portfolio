import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from "../assets/about-us.svg";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const About = () => {
    // Animation variants for text and image
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
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

    // Hover animation for social icons
    const iconHoverVariants = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <section id="about" className="bg-gradient-to-b from-gray-700 via-red-900 to-gray-900 p-8 overflow-hidden h-auto">
            <motion.h2 
                className="head text-4xl md:text-5xl font-bold text-center mb-16 text-white mx-auto "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>

            <motion.div 
                className='p-8 flex flex-col-reverse md:flex-row justify-between text-center items-center'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div 
                    className='md:w-[50vw]'
                    variants={itemVariants}
                >
                    <motion.p 
                        className="md:text-3xl text-xl text-slate-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        I'm Abhishek Singh, a web developer based in Ambernath, Maharashtra, India. I hold a{' '}
                        <motion.span 
                            className='bg-yellow-700 px-2 py-1 rounded-full inline-block'
                            whileHover={{ scale: 1.1 }}
                        >
                            BE
                        </motion.span> degree in{' '}
                        <motion.span 
                            className='bg-yellow-700 px-2 py-1 rounded-full inline-block'
                            whileHover={{ scale: 1.1 }}
                        >
                            Electronics
                        </motion.span> from{' '}
                        <motion.span 
                            className='bg-yellow-700 px-2 py-1 rounded-full inline-block'
                            whileHover={{ scale: 1.1 }}
                        >
                            Lokmanya Tilak college of Engineering, Navi Mumbai
                        </motion.span>. With a passion for web development, I'm dedicated to creating engaging and functional websites. Let's collaborate and make your online presence remarkable!
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="container mx-auto text-center md:w-[50vw]"
                    variants={itemVariants}
                >
                    <motion.img 
                        src={AboutImage} 
                        alt="About Me" 
                        className="mx-auto mb-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>
            </motion.div>

            <motion.div 
                className="flex justify-center gap-4 p-4 mb-4 bg-gray-300 rounded-full w-fit mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {[
                    {
                        href: "https://www.linkedin.com/in/abhishek-singh-64a45b128",
                        Icon: FaLinkedin
                    },
                    {
                        href: "https://github.com/abhisheks7070",
                        Icon: FaGithub
                    },
                    {
                        href: "https://www.instagram.com/singh_abhishek9",
                        Icon: FaInstagram
                    }
                ].map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={iconHoverVariants}
                        whileHover="hover"
                    >
                        <social.Icon className="text-black text-4xl mx-4" />
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default About;