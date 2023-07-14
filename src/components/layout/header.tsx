import { FC } from 'react'
import styles from './styles/header.module.scss'

const Header: FC = () => {
  return <div className={`${styles.header} fixed top-0 left-0 right-0 text-center `} >
    header
  </div>
}

export default Header