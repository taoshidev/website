import "@mantine/core/styles.css";
import "./global.css";

import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import PlausibleProvider from "next-plausible";
import { ColorSchemeScript } from "@mantine/core";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Taoshi",
  description:
    "Decentralized Financial Market Forecasting Through the Power of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <PlausibleProvider domain="taoshi.io" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <GoogleTagManager gtmId="AW-16481835690" />
        {/* <!-- Start of HubSpot Embed Code --> */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/45009699.js"
        ></script>
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </html>
  );
}
