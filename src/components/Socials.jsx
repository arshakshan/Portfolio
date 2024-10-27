import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { socials } from '../constants';


const SocialsCard = ({ index, title, icon, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[230px] w-full justify-center flex"
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-10 h-10 rounded-full object-cover"
      />
      <p className="text-white font-medium text-[14px] mt-3">
        {title}
      </p>
    </a>
  </motion.div>
)

// const Socials = () => {
//   return (
//     <div className="mt-0 bg-black-100 rounded-[20px]">
//       <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>🎤 Beyond the Grid</p>
//           <p className={styles.sectionHeadText}>Socials.</p>
//         </motion.div>
//       </div>
//       <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
//         {socials.map((social, index) => (
//           <SocialsCard 
//             key={social.title}
//             index={index}
//             {...testimonial}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

const Socials = () => {
  return (
    <div className="mt-0 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()} className='flex flex-col justify-content lg:items-start items-center'>
          <p className={styles.sectionSubText}>🎤 Beyond the Grid</p>
          <p className={styles.sectionHeadText}>Socials</p>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} sm:-mt-20 -mt-40 pb-14 flex flex-wrap justify-center gap-7`}>
        {socials.map((social, index) => (
          <SocialsCard
            key={social.title}
            index={index}
            {...social}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Socials, "socials");