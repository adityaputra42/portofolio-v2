import React from 'react'

import css from "../assets/css3.svg";
import flutter from "../assets/flutter.svg";
import go from "../assets/go.svg";
import html from "../assets/html5.svg";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.svg";
import postgresql from "../assets/postgresql.svg";
import react from "../assets/reactjs.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import ts from "../assets/typescript.svg";

import { motion } from "framer-motion";


const Skill = () => {
  return (
    <div className='skill pt-12' id='skills'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="text-white text-6xl text-bold mr-6 text-center pt-24 pb-8">My Tech Stack</motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-wrap text-7xl px-12 md:px-8 gap-6 w-full justify-center items-center pb-24">
        <img src={flutter} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={html} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={css} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={js} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={react} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={tailwindcss} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={ts} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={go} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={mysql} className='w-8 h-8 sm:w-16 sm:h-16' />
        <img src={postgresql} className='w-8 h-8 sm:w-16 sm:h-16' />
      </motion.div>
    </div>
  )
}

export default Skill