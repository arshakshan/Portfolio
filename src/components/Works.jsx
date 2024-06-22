import React from 'react';
import { useState, useRef } from 'react';
import { Tilt } from 'react-tilt';
import { AnimatePresence, motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ShinyButton from '../utils/ShinyButton';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animate to state
      exit={{ opacity: 0, y: 100 }} // Exit state
      transition={{ duration: 0.5, delay: index * 0.1 }} // Transition properties
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* Deploy and provide the live link here */}
            {/* <div
              onClick={() => window.open(source_code_link,"_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div> */}

          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const projectsRef = useRef(null);

  // console.log("Visible Projects:", visibleProjects); // Add this line to log visible projects

  const handleShowAllToggle = () => {
    setShowAll(!showAll);
    if (showAll && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}>🏎️ From the Starting Grid to the Chequered Flag.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]">
          Fasten your seat belts and get ready for a high-speed tour through my coding circuits. This is where the rubber meets the road, and each repository is a thrilling lap of ingenuity. From the starting grid of initial commits to the checkered flag of final deployments, here you will find the engineering behind my race for excellence.
          Fuel up on my GitHub repositories, where you can take a pit stop at the code that fuels my journey. Whether it’s a sprint race of a quick weekend project or a full-send endurance of a long-term development, every repo is a story of challenges tackled at high speeds.
          🛠️ Now, switch to mode push and send it into the main straight of projects!
        </motion.p>
      </div>

      <div
        ref={projectsRef}
        className="mt-20 flex flex-wrap gap-7">
        {visibleProjects.map((project, index) => (
          <AnimatePresence>
            <ProjectCard
              key={project.id || `project-${index}`}
              index={index}
              {...project}
            />
          </AnimatePresence>
        ))}
      </div>

      <div className='mt-10 flex justify-center'>
        <ShinyButton onClick={handleShowAllToggle} showAll={showAll} />
      </div>

    </>
  )
}

export default SectionWrapper(Works, "works");