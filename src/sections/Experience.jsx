import React from 'react'
import { motion } from 'framer-motion'

import Reveal from "../components/Reveal"

const experiences = [
  {
    company: 'CV Nusatech Development',
    period: 'Jan 2023 - Jul 2025',
    description: 'Developed crypto wallet and CEX applications using Flutter, integrating Web3 with Reown WalletKit, Web3dart, and OnChain. Optimized transactions, account management, and real-time market data via REST API. Implemented state management (Provider, Riverpod, GetX, BLoC) and integrated DApps using Web3-WebView. Ensured security, performance optimization, and debugging before deployment. Collaborated with PMs & UI/UX teams and followed Agile Scrum methodologies.'
  },
  {
    company: 'PT Digiasset Indonesia',
    period: 'Aug 2020 - Jan 2023',
    description: 'Built an internal CEX app using Flutter, integrating REST API for authentication, transactions, and account management. Used Provider for state management. Ensured security, performance optimization, and seamless API integration. Participated in Agile Scrum workflows.',
  }
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[1100px] items-center mx-auto' id='experience'>
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