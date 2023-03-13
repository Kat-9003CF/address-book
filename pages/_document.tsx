import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <title>Address Book</title>

          <Main />
          <NextScript />
          <Script />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
