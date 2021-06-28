import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 

  render() {
    return (
      <Html lang='en'>
        <Head></Head>
        <body className="bg-gradient-to-r from-black to-blue-800 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument