import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player"
import SkillCard from "./SkillCard";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiThealgorithms, SiDebian, SiPostgresql } from 'react-icons/si';


const skills = [
    {
        title: "frontend",
        items: [
            {
                logo: <BiLogoHtml5 className="text-2xl" />,
                name: "HTML"
            },
            {
                logo: <BiLogoCss3 className="text-2xl" />,
                name: "CSS"
            },
            {
                logo: <BiLogoJavascript className="text-2xl" />,
                name: "JavaScript"
            },
            {
                logo: <FaReact className="text-2xl" />,
                name: "React"
            },
            {
                logo: <SiTailwindcss className="text-2xl" />,
                name: "TailwindCSS"
            }
        ]
    },
    {
        title: "backend",
        items: [
            {
                logo: <FaNodeJs className="text-2xl" />,
                name: "NodeJS"
            }
        ]
    },
    {
        title: "database",
        items: [
            {
                logo: <SiMongodb className="text-2xl" />,
                name: "MongoDB"
            },
            {
                logo: <SiPostgresql className="text-2xl" />,
                name: "Postgres"
            },
            {
                logo: <SiMysql className="text-2xl" />,
                name: "MySQL"
            }
        ]
    },
    // {
    //     title: "computer fundamentals",
    //     items: [
    //         {
    //             logo: <SiThealgorithms className="text-2xl" />,
    //             name: "DSA"
    //         },
    //         {
    //             logo: <SiDebian className="text-2xl" />,
    //             name: "Debian based linux"
    //         }
    //     ]
    // },
]

const Skills = () => {
    return (
        <section id="skills" className="bg-slate-900 p-8 mx-auto text-center">
            <h2 className="head text-3xl font-bold">My Skills</h2>
            <div className='p-4 flex flex-col md:flex-row justify-between text-center items-center'>
                <div className="m-4 skills-right-content w-full md:w-[50vw] ">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/bf4ac98b-f207-49b7-8af9-2d55dec961b0/FRkdFcAI6v.json"
                        className="w-2/3 md:h-2/3"
                    >
                    </Player>

                </div>
                <div className="skills-left-content w-full md:w-1/2 text-black">
                    <div className="w-fit mx-auto flex flex-wrap items-normal gap-5 justify-center">
                        {
                            skills.map((skill) => {
                                return (
                                    <SkillCard skill={skill} key={skill.title} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
