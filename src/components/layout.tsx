import Navbar from './layout/header/header'
import Footer from './layout/footer/footer'
import styles from '@/styles/index.module.scss'
import { useRouter } from 'next/router'
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const whiteList = ['/note']
  const [showHeader, setShowHeader] = useState(true);
  const [pathName, setPathName] = useState<string>('');

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isRoot, setIsRoot] = useState(true)
  const router = useRouter()
  const [scrollDirection, setScrollDirection] = useState<number>(0); // 保存滚动方向，0表示初始状态

  useEffect(() => {
    setIsRoot(router.pathname === '/' ? true : false)
    setPathName(router.pathname)
  }, )

  useEffect(() => {
    console.log('触发--------useEffect')
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop < 100 || scrollTop < prevScrollY) {
        setShowHeader(true); // 滚动距离小于100或向上滚动时显示头部
      } else {
        setShowHeader(false);
      }
      console.log('scrollTop----', scrollTop)
      // 判断滚动方向
      setScrollDirection(scrollTop > prevScrollY ? 1 : scrollTop < prevScrollY ? -1 : 0);
      setPrevScrollY(scrollTop);
    };
    // const handleTouchMove = (event: any) => {
    //   const touchY = event.touches[0].clientY;
    //   if (touchY > prevScrollY) {
    //     setShowHeader(true); // 向上滑动时显示头部
    //   }
    //   console.log('touchY----', touchY)
    //   setPrevScrollY(touchY);
    // };
    if (whiteList.includes(router.pathname)) {
      // 监听滚动事件
      window.addEventListener('scroll', handleScroll);
      // 监听触摸事件
      // window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (whiteList.includes(router.pathname)) {
        console.log('触发--------pathname',router.pathname)
        // 移除滚动事件监听
        window.removeEventListener('scroll', handleScroll);
        // 移除触摸事件监听
        // window.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [prevScrollY, pathName]);

  return (
    <>
      {
        !isRoot && <AnimatePresence>
          {showHeader &&
            <motion.header
              key="header"
              initial={{ opacity: 1 }} // 头部可见时的初始状态
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }} // 动画持续时间
              exit={{ opacity: 0 }}
            >
              <Navbar />
            </motion.header>
          }
        </AnimatePresence >
      }

      <Element name="app" className={`${!isRoot ? styles.container : styles.rootCOntainer}`} >
        {/* <div className={`${styles.defaultSidebar}`} ></div> */}
        <div>
          {children}
        </div>
        {/* <div className={`${styles.defaultSidebarGroupDoc}`} ></div> */}
      </Element>
      {!isRoot && <Footer />}
    </>
  )
}