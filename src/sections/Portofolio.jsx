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
    title: "Bee Wallet",
    description: "A Flutter-based crypto wallet with EVM multichain support, token swap, DApp browser, and WalletConnect integration. Built with Riverpod for scalable and reactive state management.",
    links: {
      site: "#",
      github: "https://github.com/adityaputra42/bee_wallet",
    },
  },
  {
    img: project2,
    title: "MintSafe Wallet",
    description: "A Flutter-based single-chain crypto wallet with EVM support, DApp browser, WalletConnect, and NFT management. Built using GetX for simple and efficient state management.",
    links: {
      site: "#",
      github: "https://github.com/adityaputra42/MintSafe_Wallet",
    },
  },
  {
    img: project4,
    title: "Tix Movie",
    description: "A cinema ticket booking app built with Flutter, using BLoC for state management and Firebase as the backend. Movie data is sourced from TMDB API, featuring real-time movie listings, seat selection, and digital ticket storage.",
    links: {
      site: "#",
      github: "https://github.com/adityaputra42/tixmovie",
    },
  },
  {
    img: project5,
    title: "E-commerce Backend",
    description: "A scalable e-commerce backend built with Golang, using sqlc for type-safe database access and PostgreSQL as the main relational database. Designed for performance, maintainability, and clean architecture.",
    links: {
      site: "#",
      github: "https://github.com/adityaputra42/e-commerce_backend",
    },
  },
  {
    img: project6,
    title: "E-commerce gRPC Microservice",
    description: "A Golang-based microservice system for an e-commerce platform specializing in used cars. Built with gRPC for inter-service communication, GORM + sqlc for database access, PostgreSQL, and NATS as the message broker. Includes services for auth, user management, product, order, and payment.",
    links: {
      site: "#",
      github: "https://github.com/adityaputra42/e-commerce-grpc-microservice",
    },
  },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1100px] items-center mx-auto flex flex-col px-6 pt-32' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (

        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row max-w-full mx-auto  p-4 rounded-lg 
                      ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} mb-12 gap-6 border border-teal-900 bg-teal-800/20 shadow-lg 
                                w-full `}>
            {/* Bagian Gambar */}
            <div className="w-full md:w-1/2 p-2 ">
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