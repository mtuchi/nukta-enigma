import React from 'react';

import App from 'next/app';
import Head from 'next/head';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ionicons.css';
import '../assets/css/bootstrap.css';
import '../assets/css/style.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta charSet="utf-8" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

          <link
            href="//fonts.googleapis.com/css?family=Arial"
            rel="preload"
            as="style"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Arial"
            rel="stylesheet"
            type="text/css"
          />

          <link rel="manifest" href="/manifest.json" />

          <link rel="dns-prefetch" href="https://cms.nukta.co.tz"></link>
          <link
            rel="preconnect"
            href="https://cms.nukta.co.tz"
            crossOrigin="anonymous"
          ></link>

          <script src="js/pace.js" crossOrigin="anonymous"></script>
        </Head>
        <Component {...pageProps} />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
      </>
    );
  }
}
