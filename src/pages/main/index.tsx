import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/index.module.scss';
import dynamic from "next/dynamic";
import { motion, useAnimation } from 'framer-motion';
import { globeConfig, colors, sampleArcs } from "@/data/blobe"
const World = dynamic(() => import("@/components/aceternityUi/globe").then((m) => m.World), {
  ssr: false,
});

export default function Home() {


  useEffect(() => {


  }, []);

  const animationControls = useAnimation();
  return (
    <>
      <div className={`flex flex-col items-center pt-24`}>
        <div className='flex px-6'>
          <div className='w-1/2 flex flex-row flex-col items-center justify-center px-24'>
            <div className={`text-center font-600 text-2xl best ${styles.introduce}`}>
              My name is Mitchell Ryrie, and I am a web developer who enjoys exploring unknown fields.
            </div>
            <div className={`best text-center font-600 text-2xl ${styles.introduce}`}>
              I am glad you can see my blog and wish you a happy day.
            </div>
          </div>
          <div className='w-1/2 flex flex-row items-center justify-center '>
            <div className='cursor-pointer  h-[750px] w-[700px]   z-10  dark:bg-black' >
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
