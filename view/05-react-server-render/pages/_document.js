// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render () {
    return (
      <html>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Next</title>
        <link rel="icon" href="/static/favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}