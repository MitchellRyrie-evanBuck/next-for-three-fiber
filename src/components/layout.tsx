import Navbar from './layout/header/header'
import Footer from './layout/footer/footer'
import styles from '@/styles/index.module.scss'

export default function Layout({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={`${styles.container}`} >{children}</main>
      <Footer />
    </>
  )
}