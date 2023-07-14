import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const { pathname } = ctx;
    const isRoot = pathname === '/';
    const showHeaderFooter = !isRoot;
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, showHeaderFooter }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
           {/* <Header /> */}
        </Head>
        <body>
          <Main></Main>
          {/* <Footer /> */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument