import Navbar from './layout/header/header'
import Footer from './layout/footer/footer'
import styles from '@/styles/index.module.scss'
import { useRouter } from 'next/router'
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const whiteList = ['/note','/three']
  const displayList = []
  const [showHeader, setShowHeader] = useState(true);
  const [pathName, setPathName] = useState<string>('');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isRoot, setIsRoot] = useState(true)
  const [isFooter, setIsFooter] = useState(true)

  const router = useRouter()
  const [scrollDirection, setScrollDirection] = useState<number>(0); 
  const footerArray = ['/', '/main']
  useEffect(() => {
    setIsRoot(router.pathname === '/' ? true : false)
    setIsFooter(footerArray.includes(router.pathname) ? true : false)

    setPathName(router.pathname)
  }, )

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop < 100 || scrollTop < prevScrollY) {
        setShowHeader(true); // 滚动距离小于100或向上滚动时显示头部
      } else {
        setShowHeader(false);
      }
      // 判断滚动方向
      setScrollDirection(scrollTop > prevScrollY ? 1 : scrollTop < prevScrollY ? -1 : 0);
      setPrevScrollY(scrollTop);
    };
    // const handleTouchMove = (event: any) => {
    //   const touchY = event.touches[0].clientY;
    //   if (touchY > prevScrollY) {
    //     setShowHeader(true); // 向上滑动时显示头部
    //   }
    //   console.log('touchY---', touchY)
    //   setPrevScrollY(touchY);
    // };
    // if (whiteList.includes(router.pathname) || whiteList.filter(item => router.pathname.startsWith(item) ).length > 0 ) {
    //   // 监听滚动事件
    //   window.addEventListener('scroll', handleScroll);
    //   // 监听触摸事件
    //   // window.addEventListener('touchmove', handleTouchMove);
    // }

    return () => {
      // if (whiteList.includes(router.pathname)) {
      //   window.removeEventListener('scroll', handleScroll);
      //   // window.removeEventListener('touchmove', handleTouchMove);
      // }
    };
  }, [prevScrollY, pathName]);

  return (
    <>
      {
        !isRoot && <AnimatePresence>
          {showHeader &&
            <motion.header
              key="header"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <Navbar />
            </motion.header>
          }
        </AnimatePresence >
      }

      <Element name="app" className={`${ styles.rootCOntainer}`} >
        <div >
          {children}
        </div>
      </Element>
      {!isRoot && !isFooter  &&  <Footer />}
    </>
  )
}