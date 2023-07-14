import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/layout/header/header'

export default function NotFind() {
  return (
    <>
      <div className=" text-black font-700 text-4xl pt-96 h-full w-full text-center">
        404 Not Find
      </div>
    </>
  )
}
