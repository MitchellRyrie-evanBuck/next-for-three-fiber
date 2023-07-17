import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import styles from '@/styles/index.module.scss'
// const inter = Inter({ subsets: ['latin'] })
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import markdown from '@/docs/构建流程.md'
import rehypeRaw from 'rehype-raw'
import Typed from 'typed.js';

export default function Home() {
  useEffect(() => {
    // 创建 Typed 实例
    const options = {
      strings: ['Welcome to My Website', '👋 I am a Web Developer'],
      typeSpeed: 50, // 打字速度
      backSpeed: 30, // 回退速度
      fadeOut: true,
      loop: true, // 循环播放
    };

    const typed = new Typed('.typed-text', options);

    // 组件卸载时销毁 Typed 实例
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className={``}>
        {/* <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={markdown}
          rehypePlugins={[rehypeRaw]}
        /> */}
        <h1 className="typed-text text-center font-600 text-3xl pt-40 h-140px"></h1>
        <div className='text-center font-600 text-2xl best' >
          My name is Anthony Liu, and I am a web developer who enjoys exploring unknown fields.
        </div>
        <div className='best text-center font-600 text-2xl' >
          I am glad you can see my blog and wish you a happy day.

        </div>

      </div>
    </>
  )
}
