import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
export default function Document() {
  return (
    <Html lang="en">
     <Head>
        {/* Tripzodo favicon */}
       
        <link rel="icon" href="/home/logo1.png" className="h-9 w-20" type="image/png" />
        <meta name="theme-color" content="#fed42a" />
        <meta name="description" content="Tripzodo - Explore the world with curated travel experiences." />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
