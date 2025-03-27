import React from 'react';
import project1 from "../assets/multichain.svg"
import project2 from "../assets/mintsafe.svg"
import project4 from "../assets/tixmovie.svg"
import project5 from "../assets/project.jpeg"
import project6 from "../assets/project.jpeg"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from "../components/Reveal"

const projects = [
  {
    img: project1,
    title: "Crypto MultiChain Wallet",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "MintSafe Wallet",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Tix Movie",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "E-commerce Backend",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "E-commerce Frontend",
    description: "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] items-center mx-auto flex flex-col p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (

        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row max-w-full mx-auto  p-6 rounded-lg 
                      ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} mb-12 gap-6`}>
            {/* Bagian Gambar */}
            <div className="w-full md:w-1/2 p-2">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover aspect-video rounded-lg shadow-lg"
              />
            </div>

            {/* Bagian Deskripsi */}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tombol GitHub */}
              <div className="flex space-x-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-700 
              transition duration-300 flex items-center space-x-2"
                >
                  <AiOutlineGithub className="text-2xl" />
                  <p className='text-white'>GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}

    </div>
  )
}

export default Portfolio