import Navbar from './layout/header/header'
import Footer from './layout/footer/footer'

export default function Layout({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}