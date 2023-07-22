import React, { FC } from 'react'
import { motion } from 'framer-motion';
import styles from '../styles/server.module.scss'

const Server: FC = () => {
  return (
    <motion.div className={`${styles.server}`} data-aos="fade-right" >

    </motion.div>
  )
}

export default Server