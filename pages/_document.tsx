import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="IT 트렌드를 찾는 당신을 위한 매거진, DEVzine"
          />
          <meta
            name="keywords"
            content="DEVzine, 뎁진, IT트렌드, IT매거진, IT소식, IT구독"
          />
          <title>DEVzine</title>

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icons/favicon.ico" />
          <link
            rel="icon"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="72x72"
            href="/icons/android-icon-72x72.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="96x96"
            href="/icons/android-icon-96x96.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="192x192"
            href="/icons/apple-icon-192x192.png"
            type="image/png"
          />

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />

          <meta name="application-name" content="DEVzine" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="DEVzine" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="DEVzine" />
          <meta
            property="og:description"
            content="IT 트렌드를 찾는 당신을 위한 매거진, DEVzine"
          />
          <meta property="og:site_name" content="DEVzine" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
