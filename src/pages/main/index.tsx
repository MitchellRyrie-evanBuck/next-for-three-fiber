import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/index.module.scss';
import { motion, useAnimation } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import ActivityCalendarComponent from "@/components/useActivityCalendar"
import CodeBlock from '@/components/codeBlock'

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
  const events = [
    { title: '事件3', date: '2023-07-22' ,
      count: 16,
      level: 2
    },

    { title: '事件3', date: '2024-01-22',
      count: 16,
      level: 3 },
    { title: '事件3', date: '2024-05-22' },

    { title: '事件1', date: '2024-07-20',
      count: 16,
      level: 1 },
    { title: '事件2', date: '2024-07-21' },
    { title: '事件3', date: '2024-07-22' },
    // 根据需要添加更多事件
  ];
  return (
    <>
      <div className={`flex flex-col items-center`}>
        <motion.h1
          className="typed-text text-center font-600 text-3xl pt-40 h-140px"
          initial={{ opacity: 0, y: -10 }}
          animate={animationControls}
        >
          {typedStrings[currentString]}
        </motion.h1>
        <div className={`text-center font-600 text-2xl best ${styles.introduce}`}>
          My name is Mitchell Ryrie, and I am a web developer who enjoys exploring unknown fields.
        </div>
        <div className={`best text-center font-600 text-2xl ${styles.introduce}`}>
          I am glad you can see my blog and wish you a happy day.
        </div>
        <div className='w-1/2' >
          {/* <CodeBlock language='typescript' code={content} ></CodeBlock> */}
          <ActivityCalendarComponent data={events} />
        </div>
      </div>
    </>
  );
}
