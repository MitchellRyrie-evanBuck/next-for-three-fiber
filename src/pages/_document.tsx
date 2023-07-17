import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/footer'

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
        <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText3.min.js' ></script>
        <script src='https://assets.codepen.io/16327/Observer.min.js' ></script>
        <script src='https://assets.codepen.io/16327/gsap-latest-beta.min.js' ></script>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css' ></link>
        <Head>
           {/* <Header /> */}
        </Head>
        <body>
          <Main  ></Main>
          {/* <Footer /> */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument