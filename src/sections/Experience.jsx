import React from 'react'
import { motion } from 'framer-motion'

import Reveal from "../components/Reveal"

const experiences = [
  {
    company: 'CV Nusatech Development',
    period: 'Jan 2023 - Present',
    description: 'Description of your experience in this company.',
  },
  {
    company: 'PT Digiasset Indonesia',
    period: 'Aug 2020 - Jan 2023',
    description: 'Description of your experience in this company.',
  }
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] items-center mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=' border border-teal-500 p-6 rounded-lg shadow-md items-center
                    hover:shadow-xl transition-shadow duration-300 bg-teal-700/10'
            >
              <h3 className='text-gray-100 text-2xl font-semibold mb-4'>{experience.company}</h3>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>


            </motion.div>
          </Reveal>
        ))}

      </motion.div>


    </div>
  )
}

export default Experience