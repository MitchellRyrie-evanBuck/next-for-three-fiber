import { FC, useEffect, useState, useRef } from 'react'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import userLogo from "@/static/images/user-avatar.png"
import { useRouter } from 'next/router'
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import '../styles/header.module.scss'
import Web from './components/web'
import Server from './components/server';
import NavItem from './components/navItem'
import More from './components/more'
import { Switch } from "@/components/ui/switch"
import { MoonIcon, SunIcon, GitHubLogoIcon, AvatarIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MultiStepLoaderDemo } from "@/components/layout/header/hooks/useUser"

const Header: FC = () => {
  const [containerHeight, setContainerHeight] = useState(60);
  const animationControls = useAnimation();
  const hoverDivRef = useRef<any>(null);
  const [currentHover, setCurrentHover] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let hoverDivHeight = hoverDivRef.current.offsetHeight;
    const targetHeight = currentHover ? hoverDivHeight + 60 : 60;
    animationControls.start({ height: targetHeight });
  }, [currentHover]); // 每次 currentHover 改变时触发 useEffect

  const router = useRouter()
  const { setTheme } = useTheme()

  const handleThmetChange = (val: boolean) => {
    setIsDark(val)
  }

  const handleMouseEnter = (hover: string) => {
    setCurrentHover(hover); // 设置当前的 hover
  };

  const handleMouseLeave = () => {
    setCurrentHover(''); // 离开时重置当前 hover
    // 动画：高度从当前值变为 0，持续 1 秒
    animationControls.start({ height: 60 });
  };

  return (
    <motion.div
      className={`${styles.header}
        `}
      data-aos={`fade-down`}
      layout
      animate={animationControls}
      style={{ height: containerHeight }}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles['transition-header']}`} >
        <div className={`${styles.headerLeft} h-full flex items-center `}  >
          <Link href="/" >
            {/* <Image src={userLogo} className='h-9 w-9 rounded-full ' alt="" /> */}
            <div data-aos="fade-right" className='text-black'>Mitchell Ryrie</div>
          </Link>
          <div className='pl-6 font-600 text-xl ' >  </div>
        </div>

        <div className="flex items-center justify-between  box-border  h-full">
          <NavItem href="/main" onMouseEnter={() => handleMouseEnter('')} >Home</NavItem>
          <NavItem href="/threefiber" onMouseEnter={() => handleMouseEnter('')} >3D</NavItem>
          <NavItem href="/note" onMouseEnter={() => handleMouseEnter('')}>文档</NavItem>

          <div className={`${styles.tagger} cursor-pointer  pr-4 pl-4`} onMouseEnter={() => handleMouseEnter('Web')} >Web3</div>
          <div className={`${styles.tagger} cursor-pointer  pr-4 pl-4`} onMouseEnter={() => handleMouseEnter('Server')} >服务</div>
          <div className={`${styles.tagger} cursor-pointer  pr-4 pl-4`} onMouseEnter={() => handleMouseEnter('more')} >发现</div>
          <NavItem href="/github" onMouseEnter={() => handleMouseEnter('')} >
              <GitHubLogoIcon className='block' width={20} height={20} />
          </NavItem>
          <div className={`${styles.tagger} cursor-pointer  pr-4 pl-4`}>
            <SunIcon color='#000' width={20} height={20} />
          </div>
          <div className={`${styles.tagger} cursor-pointer  pl-4`}>
          <MultiStepLoaderDemo  />
          </div>
        </div>
      </div>
      <motion.div ref={hoverDivRef} className={`${styles['transition-content']}`} >
        {currentHover && currentHover === 'Web' && <Web />}
        {currentHover && currentHover === 'Server' && <Server />}
        {currentHover && currentHover === 'more' && <More />}
      </motion.div>

    </motion.div>
  )
}

export default Header