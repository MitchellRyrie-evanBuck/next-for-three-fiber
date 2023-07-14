import { FC } from 'react'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import userLogo from "@/static/images/user-avatar.png"

const Header: FC = () => {
  return <div className={`${styles.header}  `} >
    <div className={`${styles.headerLeft} h-full flex items-center `}>
      <Image src={userLogo} className='h-9 w-9 rounded-full ' alt="" />
      <div className='pl-6 font-600 text-xl ' >  </div>
    </div>

    <div className='flex '>
      <div className='pr-9 cursor-pointer' >
        Home
      </div>
      <div className='pr-9 cursor-pointer' >
        Guide
      </div>
      <div className='pr-9 cursor-pointer' >
        Doc
      </div>
      <div>
        Github
      </div>
    </div>
  </div>
}

export default Header