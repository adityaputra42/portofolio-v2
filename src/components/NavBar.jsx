import { useState } from "react";
import logo from '../assets/logo.svg'
import { navItems } from "../data";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
export default function NavBar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full"


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true)
        setShow(false)
      } else {
        setScroll(false)
      }
    })
  })

  let scrollActive = scroll ? "py-6 bg-white/5 shadow" : "py-4"
  return (
    <div className={`navbar fixed top-0 w-full bg-opacity-70 backdrop-blur-md z-50 transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4 ">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo flex flex-row sm:gap-3 gap-2">
            <img src={logo} alt="logo" className="sm:w-6 w-4 text-white" />
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-white'>Aditya <span className="text-teal-500">Putra</span> </h1>
          </div>

          <div className="social flex items-center gap-2">
            <ul className={`flex lg:gap-5 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full 
          md:translate-y-0 md:text-white md:p-0 md:m-0 md:transition-none gap-3 fixed ${menuActive} top-60  flex-col -translate-y-1/2 px-6 py-4
          rounded shadow-lg shadow-slate-300 bg-teal-500 font-bold text-white transition-all`}>
              {navItems.map((item, index) => (
                <motion.li whileHover={{ scale: 1.2 }} key={index} className={`flex items-center gap-3 rounded-full px-4 py-2 ${show ? "hover:bg-teal-400" : "hover:bg-teal-500"} hover:text-white`}>
                  <i className={`${item.icon} text-xl md:hidden block`} ></i>
                  <a className="font-medium opacity-75" href={item.href}>{item.label}</a>
                </motion.li>
              ))}</ul>
            {/* <a href='#' className='bg-teal-500 px-5 py-2 rounded-full sm:text-xl text-sm text-white hover:bg-purple-400'>Contact Me</a> */}
            <div onClick={handleClick} className='md:hidden z-50 text-gray-200'>
              {show ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
