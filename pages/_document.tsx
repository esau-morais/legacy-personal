import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-p-24">
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <meta name="theme-color" content="#0e0c0b" />
        </Head>

        <body className="bg-[#0e0c0b]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
