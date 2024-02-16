import type { Metadata } from "next";

import PlausibleProvider from "next-plausible";
import { ColorSchemeScript } from "@mantine/core";

import { Providers } from "./providers";

import "@mantine/core/styles.css";

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
        <PlausibleProvider domain="taoshi.io" />
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>{children}</Providers>

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
