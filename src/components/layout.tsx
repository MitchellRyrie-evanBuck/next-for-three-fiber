import Navbar from './layout/header/header'
import Footer from './layout/footer/footer'
import styles from '@/styles/index.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={`${styles.container}`} >
        {/* <div className={`${styles.defaultSidebar}`} ></div> */}
        <div>
          {children}
        </div>
        {/* <div className={`${styles.defaultSidebarGroupDoc}`} ></div> */}
      </main>
      <Footer />
    </>
  )
}