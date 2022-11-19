import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: () => {
          const delay = .5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };
      return (
        <div className="content-wrapper">
        <motion.svg
          width="100vw"
          height="80vh"
          viewBox="0 0 100vw 80vh"
          initial="hidden"
          animate="visible"
        >
          <motion.rect
            width="80vw"
            height="60vh"
            x="10vw"
            y="10vh"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
          >
            
          </motion.rect>
        </motion.svg>
        </div>
      )
}

export default About
