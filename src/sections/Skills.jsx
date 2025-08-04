import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"


import css from "../assets/css3.svg";
import flutter from "../assets/flutter.svg";
import go from "../assets/go.svg";
import html from "../assets/html5.svg";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.svg";
import postgresql from "../assets/postgresql.svg";
import react from "../assets/reactjs.svg";
import tailwindcss from "../assets/tailwindcss.svg";

import Reveal from "../components/Reveal"

const skills = [
  {
    category: 'Frontend Mobile & Web Deleopment',
    technologies: [
      { name: 'Flutter', icon: <img src={flutter} className='w-[20px]' /> },
      { name: 'HTML', icon: <img src={html} className='w-[20px]' /> },
      { name: 'CSS', icon: <img src={css} className='w-[20px]' /> },
      { name: 'JavaScript', icon: <img src={js} className='w-[20px]' /> },
      { name: 'React Js', icon: <img src={react} className='w-[20px]' /> },
      { name: 'Tailwind CSS', icon: <img src={tailwindcss} className='w-[20px]' /> },

    ],
  },
  {
    category: 'Fullstack Development',
    technologies: [
      { name: 'Flutter', icon: <img src={flutter} className='w-[20px]' /> },
      { name: 'React Js', icon: <img src={react} className='w-[20px]' /> },
      { name: 'Golang', icon: <img src={go} className='w-[20px]' /> },
      { name: 'MySql', icon: <img src={mysql} className='w-[20px]' /> },
      { name: 'PostgresSql', icon: <img src={postgresql} className='w-[20px]' /> },
    ],
  },
]

const Skills = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 items-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them <a href="#" className="underline">there</a>.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div key={index} className="border border-teal-900 p-6 rounded-lg bg-teal-800/20 shadow-lg 
                                w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4 items-center">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export default Skills