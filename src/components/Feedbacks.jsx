import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';


const FeedbackCard = ({ index, testimonial, name, designation, company, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[16px]">{testimonial}</p>
      <div className="mt-5 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[14px]">
            <span className="blue-text-gradient">@</span>
            <a href={link} target="_blank" className='text-white'>{name}</a>
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            <a className="text-blue-500">{designation} @ {company}</a>
          </p>
        </div>
      </div>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>🎤 Post-Race Interviews</p>
          <p className={styles.sectionHeadText}>Testimonials.</p>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feedbacks");