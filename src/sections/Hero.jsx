import React from 'react';
import profilepic from "../assets/me.svg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from '../components/ShinyEffect';

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero pt-36 md:px-24 max-w-[1200px] mx-auto relative" id='home'>
      <div className="grid md:grid-cols-2 place-items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Mobile Developer",
              1000,
              "Fullstack Deveveloper",
              1000,
              "UI/UX Designer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-2xl md:text-4xl lg:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-6xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-teal-500">ADITYA PUTRA PRATAMA</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[400px] md:max-w-[600px] md:text-3xl text-lg mb-6"
          >
            I am a Fullstack App Developer who develops apps with Flutter, React.js, and Golang. I focus on efficient architecture, high performance, and seamless integration between frontend and backend to create responsive and scalable apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-teal-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-teal-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/adityaputra42"
                target="_blank"
                rel="noopener noreferrer">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/aditya-putra-pratama-3412b61b0/"
                target="_blank"
                rel="noopener noreferrer">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/aditya__putra1/"
                target="_blank"
                rel="noopener noreferrer">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>


        <motion.img
          src={profilepic}
          className="w-[300px] sm:w-[350px] md:w-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>

    </div>
  )
}

export default Hero   