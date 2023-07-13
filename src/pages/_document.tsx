import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

// const Document = () => {
//   return (
//     <Html lang="en">
//       <Head>
//         <Header />
//       </Head>
//       <body>
//         <Main></Main>
//         <Footer />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

// Document.getInitialProps = async (ctx: DocumentContext) => {
//   console.log('ctx',ctx);
//   // 获取当前路由路径
//   const { pathname } = ctx.ctx;

//   // 判断是否为根路由
//   const isRoot = pathname === '/';

//   // 在根路由访问时不显示头部和底部
//   const showHeaderFooter = !isRoot;

//   // 通过上下文将 showHeaderFooter 传递给页面组件
//   const initialProps:any = await Document.getInitialProps(ctx);
//   return { ...initialProps, showHeaderFooter };
// };

// export default Document

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
           <Header />
        </Head>
        <body>
          <Main></Main>
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument