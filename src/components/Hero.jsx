import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { arshak } from '../assets'
import { fadeIn, textVariant } from '../utils/motion';


const Hero = () => {
  return (
    
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 
      top-[250px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className='flex justify-between items-center w-full'> {/* Updated flex container */}
        <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", 0.5, 1)}
          >
            <h1 className={`${styles.heroHeadText} text-white font-montserrat`}>Hi, I'm <span className='font-montserrat text-[#915eff]'>Arshak</span>.</h1>
            <p className={`${styles.heroSubText} mt-2 font-montserrat text-white-100`}>Developing Web Applications,<br className='sm:block hidden'/> Machine Learning models <br className='sm:block hidden'/>and Software Solutions.</p>
          </motion.div>

          <motion.img
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", 0.7, 1)}
            src={arshak}
            alt="Arshak"
            className='relative w-20 h-15 sm:w-60 sm:h-60 rounded-full object-cover'
          />
        </div>
        
      </div>
      
      {/* <ComputersCanvas /> */}

      <div 
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      
    </section>
  )
}

export default Hero;