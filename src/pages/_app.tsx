import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import '@/styles/globals.scss'
import '@/styles/index.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Layout from '@/components/layout'
export default function App( { Component, pageProps, ...result  }: AppProps) {
  const router = useRouter();
  // console.log(router);
  return (
    <>
      {/* <Html lang="en">
      <Head>
        <Header />
      </Head>
      <body>
        <Main {...pageProps} >
          

        </Main>
        <Footer />
        <NextScript />
      </body>
    </Html> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
