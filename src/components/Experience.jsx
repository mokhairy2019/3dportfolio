import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgb(33, 150, 243)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={experience.date}
      iconStyle={{background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} 
          className='w-[60%] h-[60%] object-contain'/>
        </div>
      }
    >
      <div>
        <h3 className="text-bold text-[24px] text-white">
          {experience.title}
        </h3>
        <p className='text-gray-50 opacity-80 text-[18px] font-semibold'
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul>
        {experience.points.map((point, index) => (
          <li 
          key={`experience-point-${index}`} 
          className='text-white-100  text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};



const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
       What I have done so far   
      </p> 
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Work Experience
      </h2>
    </motion.div>
    <div className="flex flexwrap gap-10">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard 
          key={`experience-${index}`}
          experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");