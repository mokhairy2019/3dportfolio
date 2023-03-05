import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas icon = {technology.icon} />
        </div>
      ))}
    </div>
    </>
    
  )
}

export default SectionWrapper(Tech,"technology");