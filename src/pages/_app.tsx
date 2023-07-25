import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import '@/styles/globals.scss'
import '@/styles/index.css'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/footer'
import Layout from '@/components/layout'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function App( { Component, pageProps, ...result  }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    console.log(' AOS.init();')
    AOS.init();
  }, []);

  function setLinksPositions() {
    document.querySelectorAll('div').forEach((a) => {
      const bounding = a.getBoundingClientRect();

      a.style.setProperty('--positionX', `${bounding.x}px`);
      a.style.setProperty('--positionY', `${bounding.y}px`);
    });
  }


  useEffect(() => {
    (document as any).querySelector('body').addEventListener('mousemove', (e: any) => {
      e.currentTarget.style.setProperty('--x', `${e.clientX}px`);
      e.currentTarget.style.setProperty('--y', `${e.clientY}px`);
    });

    window.addEventListener('load', setLinksPositions);
    window.addEventListener('resize', setLinksPositions);
    return ()=>{
      window.removeEventListener('load', setLinksPositions);
      window.removeEventListener('resize', setLinksPositions);
    }
  })

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
