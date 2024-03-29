import { Head, Html, Main, NextScript } from "next/document";
import { Partytown } from "@builder.io/partytown/react";

export default function Document({}) {
  const NEXT_PUBLIC_GTM = process.env.NEXT_PUBLIC_GTM || "GTM-MD5WPHP";
  return (
    <Html>
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />

        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTM}`}
          type="text/partytown"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "fg2zxz06pg");`,
          }}
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
