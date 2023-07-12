import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg-blue-500 text-white p-4">
        This is a blue div with white text.
      </div>
    </>
  )
}
