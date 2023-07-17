import Navbar from './layout/header/header'
import Footer from './layout/footer/footer'
import styles from '@/styles/index.module.scss'
import { useRouter } from 'next/router'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const isRoot = router.pathname === '/'
  return (
    <>
      {!isRoot && <Navbar /> }
      <main className={`${ !isRoot ? styles.container : styles.rootCOntainer }`} >
        {/* <div className={`${styles.defaultSidebar}`} ></div> */}
        <div>
          {children}
        </div>
        {/* <div className={`${styles.defaultSidebarGroupDoc}`} ></div> */}
      </main>
      {!isRoot && <Footer />}
    </>
  )
}