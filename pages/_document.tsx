import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
const Document = () => {
  return (
    <Html className="dark">
      <Head>
        <link rel="shortcut icon" href="https://img.freepik.com/premium-vector/ifrit-demon-illustration_9244-18.jpg?w=2000" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
