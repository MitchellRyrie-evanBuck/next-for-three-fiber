import Navbar from './layout/header'
import Footer from './layout/footer'

export default function Layout({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}