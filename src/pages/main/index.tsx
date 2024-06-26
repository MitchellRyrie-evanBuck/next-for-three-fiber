import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/index.module.scss';
import { motion, useAnimation } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [currentString, setCurrentString] = useState(0);
  const typedStrings = ['Welcome to My Website', '👋 I am a Web Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentString((prev) => (prev + 1) % typedStrings.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const animationControls = useAnimation();

  return (
    <>
      <div className={``}>
        <motion.h1
          className="typed-text text-center font-600 text-3xl pt-40 h-140px"
          initial={{ opacity: 0, y: -10 }}
          animate={animationControls}
        >
          {typedStrings[currentString]}
        </motion.h1>
        <div className='text-center font-600 text-2xl best'>
          My name is Anthony Liu, and I am a web developer who enjoys exploring unknown fields.
        </div>
        <div className='best text-center font-600 text-2xl'>
          I am glad you can see my blog and wish you a happy day.
        </div>
      </div>
    </>
  );
}
