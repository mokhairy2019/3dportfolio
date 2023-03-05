import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles/'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        options ={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain'/>

          <h3 className='text-center text-white text-[20px] text-bold'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} opacity-60`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} opacity-90`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] opacity-90"
      >
        I am a full stack developer with a passion for building web applications. 
        I have a strong background in computer science and a passion for learning new technologies.
        I am currently working as a software engineer at <a href="https://www.3dlook.me/" target="_blank" rel="noopener noreferrer">3DLOOK</a> where
         I am responsible for building and maintaining the company's web applications.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");