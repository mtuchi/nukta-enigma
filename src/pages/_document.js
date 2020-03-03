import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />


          <link href="//fonts.googleapis.com/css?family=Merriweather"
            rel="preload" as="style" />

          <link href="http://fonts.googleapis.com/css?family=Merriweather"
            rel="stylesheet" type="text/css"  />

          <link rel="manifest" href="/manifest.json" />
          <style type="text/css">
            {`html {
              font-size: 14px;
            }`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps
  };
};

export default MyDocument;
