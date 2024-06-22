import React from 'react'
import {motion} from 'framer-motion'

const ShinyButton = ({onClick, showAll}) => {
  return (
    <motion.button 
        className='bg-tertiary px-6 py-3 rounded-lg relative radial-gradient'
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 2,
            scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
            }
        }}
        onClick={onClick}
    >
        <span className="tracking-wide font-light h-full w-full block relative linear-mask">
            {showAll ? "Show Less" : "Show More"}
        </span>
        <span className='block absolute inset-0 rounded-md p-px linear-overlay' />
    </motion.button>
  )
}

export default ShinyButton