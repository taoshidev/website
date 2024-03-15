import "@mantine/core/styles.css";
import "./global.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { GoogleTagManager } from "@next/third-parties/google";
import PlausibleProvider from "next-plausible";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Taoshi",
  description:
    "Delivering World Class Quant Trading Signals Through the Power of Decentralized AI",
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
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextTopLoader color="#E35F25" showSpinner={false} shadow={false} />
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
