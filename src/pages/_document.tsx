import { Head, Html, Main, NextScript } from "next/document";
import { Partytown } from "@builder.io/partytown/react";

export default function Document() {
  const NEXT_PUBLIC_GTM = process.env.NEXT_PUBLIC_GTM || "GTM-MD5WPHP";
  return (
    <Html>
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />

        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTM}`}
          type="text/partytown"
          defer
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
