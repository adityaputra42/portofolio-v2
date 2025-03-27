import React from "react"
import Reveal from "../components/Reveal"
import { TiPhoneOutline } from "react-icons/ti";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'


const contacts = [
  {
    icon: <TiPhoneOutline />,
    title: 'Phone Number',
    value: '082298441344',
    link: '#'
  },
  {
    icon: <FaGithubSquare />,
    title: 'Github',
    value: '@adityaputra42',
    link: '#'
  },
  {
    icon: <HiOutlineHomeModern />,
    title: 'Address',
    value: 'Kebumen, Central Java ,Indonesia',
    link: '#'
  },

]

const Contact = () => {
  return (
    <div className="px-6 max-w-[1200px] mt-24 mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">Get in touch <span></span></h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                For business and partnership inquiry please contact me below!
              </p>
            </div>
            {contacts.map((contact, index) => (
              <div className='flex flex-row  leading-7 gap-6  mt-6  text-gray-400 text-4xl'>
                <a href="#" className="h-[12px]">{contact.icon}</a>
                <h3 className="md:text-2xl text-xl font-semibold text-white">{contact.value}
                </h3>
              </div>
            ))}

          </div>
          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form">
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-teal-500 py-2 pl-2 pr-4 text-white"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-teal-500 text-white py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-teal-500 py-2 pl-2 pr-4 text-white"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-teal-500-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  )
}

export default Contact