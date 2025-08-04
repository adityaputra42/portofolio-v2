import React, { useState, useEffect } from "react"
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    const { name, email, message } = formData;
    setIsValid(
      name.trim() !== '' &&
      validateEmail(email) &&
      message.trim() !== ''
    );
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:aditiyaputra42@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="px-6 max-w-[1100px] mt-24 mx-auto md:my-12" id="contact">
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
              <div key={index} className='flex flex-row leading-7 gap-6 mt-6 text-gray-400 text-4xl'>
                <a href="#" className="h-[12px]">{contact.icon}</a>
                <h3 className="md:text-2xl text-xl font-semibold text-white">{contact.value}</h3>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-6xl p-5 md:p-12"
            id="form">
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let's connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mb-2 w-full rounded-md border border-teal-500 py-2 pl-2 pr-4 text-white"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mb-2 w-full rounded-md border border-teal-500 text-white py-2 pl-2 pr-4"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              value={formData.message}
              onChange={handleInputChange}
              className="mb-2 w-full rounded-md border border-teal-500 py-2 pl-2 pr-4 text-white"
              required
            />
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3 rounded-md text-gray-100 font-semibold text-xl ${isValid ? 'bg-teal-500 hover:bg-teal-600' : 'bg-gray-500 cursor-not-allowed'
                }`}
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