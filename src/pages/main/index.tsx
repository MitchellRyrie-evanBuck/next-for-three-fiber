import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/index.module.scss';
import dynamic from "next/dynamic";
import { motion, useAnimation } from 'framer-motion';
import { globeConfig, colors, sampleArcs } from "@/data/blobe"
import { WavyBackground } from "@/components/aceternityUi/wavy-background"
import { SparklesCore } from "@/components/aceternityUi/sparkles"
import { LampContainer } from "@/components/aceternityUi/lamp";
const World = dynamic(() => import("@/components/aceternityUi/globe").then((m) => m.World), {
  ssr: false,
});

export default function Home() {


  useEffect(() => {


  }, []);

  const animationControls = useAnimation();
  return (
    <>
      <div className="fixed pointer-events-none inset-0 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div 
        className={`flex flex-col items-center justify-center h-[100vh] w-[100vw]`}>
        <div className='flex px-6'>
          <div className='w-1/2 flex flex-row flex-col items-center justify-center px-24'>
            <div className={`text-center font-600 text-2xl best ${styles.introduce}`}>
              My name is Mitchell Ryrie, and I am a web developer who enjoys exploring unknown fields.
            </div>
            <div className={`best text-center font-600 text-2xl ${styles.introduce}`}>
              I am glad you can see my blog and wish you a happy day.
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mt-6 shadow-[0_4px_14px_0_rgb(0,0,0,39%)] hover:shadow-[0_6px_20px_rgba(0,0,0,23%)] hover:bg-[rgba(61,61,61,0.9)] px-8 py-2 bg-[#000000] rounded-full text-white font-light transition duration-200 ease-linear">
              Browse Template
            </motion.button>
          </div>
          <div className='w-1/2 flex flex-row items-center justify-center '>
            <div className='cursor-pointer  h-[600px] w-[600px]   z-10  dark:bg-black' >
              <World
                globeConfig={globeConfig}
                data={sampleArcs}
              />
            </div>
          </div>
        </div>
        
    
      </div>
    </>
  );
}
