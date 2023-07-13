import { FC } from 'react'
import styles from './styles/header.module.scss'

const Header: FC = () => {
  return <div className={`${styles.header} text-center bg-blue-400`} >
    header
  </div>
}

export default Header