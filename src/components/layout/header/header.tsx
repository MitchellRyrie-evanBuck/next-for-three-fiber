import { FC, useEffect } from 'react'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import userLogo from "@/static/images/user-avatar.png"
import { useRouter } from 'next/router'
import Link from 'next/link';
import { motion } from 'framer-motion';
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
        <span className={`${isActive ? styles.dotActive : styles.dotInactive}`} >{children}</span>
      </motion.div>
    </Link>
  );
};

const Header: FC = () => {
  useEffect(() => {
  },[])
  const router = useRouter()
  console.log(router)
  return <div className={`${styles.header}  `} >
    <div className={`${styles.headerLeft} h-full flex items-center `} data-aos="fade-right" >
      <Image src={userLogo} className='h-9 w-9 rounded-full ' alt="" />
      <div className='pl-6 font-600 text-xl ' >  </div>
    </div>

    <div className="flex items-center justify-between p-4">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/threefiber">Three/fiber</NavItem>
      <NavItem href="/doc">Doc</NavItem>
      <NavItem href="/github">Github</NavItem>
    </div>
  </div>
}

export default Header