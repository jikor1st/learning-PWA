import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <link
          href="images/favicons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="images/favicons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        {/* ios 아이콘 메타태그 */}
        <link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
        {/* Microsoft App 컬러 메타태그 */}
        <meta name="msapplication-TileColor" content="#3b34ff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
