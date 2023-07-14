import { FC } from 'react'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import userLogo from "@/static/images/user-avatar.png"

const Header: FC = () => {
  return <div className={`${styles.header} fixed top-0 left-0 right-0  `} >
    <div className={`${styles.headerLeft} h-full flex items-center `}>
      <Image src={userLogo} className='h-9 w-9 rounded-full ' alt="" />
      <div className='pl-6 font-600 text-xl ' >  </div>
    </div>

    <div className='flex '>
      <div className='pr-9' >
        Home
      </div>
      <div className='pr-9' >
        Guide
      </div>
      <div className='pr-9' >
        Doc
      </div>
      <div>
        Github
      </div>
    </div>
  </div>
}

export default Header