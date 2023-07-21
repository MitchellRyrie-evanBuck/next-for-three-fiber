import { FC, useEffect, useState } from 'react'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import userLogo from "@/static/images/user-avatar.png"
import { useRouter } from 'next/router'
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import '../styles/header.module.scss'

interface InNavItem{
  href: string;
  children: React.ReactNode
}

const NavItem: FC<InNavItem> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <motion.div
        className={`pr-4 pl-4 cursor-pointer `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className={`${isActive ? styles.dotActive : styles.dotInactive} text-black`} >{children}</span>
      </motion.div>
    </Link>
  );
};

const Header: FC = () => {
  const [containerHeight, setContainerHeight] = useState(56);
  const animationControls = useAnimation();
  useEffect(() => {
  },[])
  const router = useRouter()

  const handleMouseEnter = () => {
    // 动画：高度从当前值变为 400，持续 1 秒
    animationControls.start({ height: 400 });
  };

  const handleMouseLeave = () => {
    // 动画：高度从当前值变为 0，持续 1 秒
    animationControls.start({ height: 56 });
  };

  return (
    <motion.div 
      className={`${styles.header}`} 
      data-aos={`fade-down`} 
      animate={animationControls}
      style={{ height: containerHeight }}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles['transition-header']}`} >
        <div className={`${styles.headerLeft} h-full flex items-center `} data-aos="fade-right" >
          <Link href="/" >
            {/* <Image src={userLogo} className='h-9 w-9 rounded-full ' alt="" /> */}
          </Link>
          <div className='pl-6 font-600 text-xl ' >  </div>
        </div>

        <div className="flex items-center justify-between p-4 ">
          <NavItem href="/main">Home</NavItem>
          <NavItem href="/threefiber">Three/fiber</NavItem>
          <NavItem href="/note">Doc</NavItem>
          <NavItem href="/github">Github</NavItem>
          <div className={`${styles.tagger} cursor-pointer`} onMouseEnter={handleMouseEnter} >@@@</div>
        </div>
      </div>
      <motion.div 
        animate={{
          // height: ["0%", "100%"]
        }}
        // initial={{
        //   height: "0%"
        // }}
        // transition={{
        //   duration: 1,
        //   ease: "easeInOut",
        //   times: [0, 0.2, 0.5, 0.8, 1],
        //   repeatDelay: 1
        // }}
      >
      </motion.div>
    </motion.div>
  )
}

export default Header