import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import styles from '@/styles/index.module.scss'
// const inter = Inter({ subsets: ['latin'] })
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import markdown from '@/docs/构建流程.md'

export default function Home() {
  return (
    <>
      <div className={` p-4`}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={markdown}
        />
      </div>
    </>
  )
}
