import React, { ReactElement } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/global.css';

const App = (props: AppProps): ReactElement => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Megan Yin's website" />
        <title>Megan Yin</title>
      </Head>
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </>
  );
};

export default App;
