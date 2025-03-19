import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../sections/Hero'
import Skill from '../sections/Skill'
import Portfolio from '../sections/Portofolio'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Footer from '../components/Footer'
import Contact from '../sections/Contact'

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skill />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      {/* <Footer /> */}

    </>
  )
}

export default IndexPage