import React, { FC } from 'react'
import { motion } from 'framer-motion';
import styles from '../styles/server.module.scss'

const Web: FC = () =>{

  const webData = [
    "Vue", "React", "Angular", "小程序", "uniapp", "typo", "TypeScript" 
  ]

  return (
    <motion.div className={`box-border`} data-aos="zoom-out-right" >
      <div className={`${styles['web-item']} flex  justify-around `} >
        {
          webData.map((item, index) => {
            return (
              <motion.div 
                className={`${styles['web-item-tag']} `} 
                key={index} 
                whileHover={{ scale: 1.1, y: -6 }}
              >{item}</motion.div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default Web