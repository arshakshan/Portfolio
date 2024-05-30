import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt 
      className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>🏁 It's lights out and away we go! </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.1)}
          className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          Growth-driven professional with hands-on experience participating in multiple software development and machine learning projects to contribute to technological evolutions and provide resolution against complex technical industry-wide challenges. Expertise in crafting scalable applications, elevating user experiences, and delivering tailored coding solutions. 
          Pursuing a master's in software engineering with complementary certifications, including deep learning, AI/ML, Machine Learning, and Web / App Development. A proven track record in pivotal projects, such as deepfake detection, retail image classification, and fault detection, showcasing programming, problem-solving and project management.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map( (service, index) => (
            <ServiceCard 
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div> 
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about");