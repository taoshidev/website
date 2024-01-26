import type { Metadata } from "next";
import Script from "next/script";
import { clsx } from "clsx";

import PlausibleProvider from "next-plausible";

import { ADLaMDisplay, SpaceMono } from "@/styles/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Taoshi",
  description:
    "Decentralized Forecasting of Financial Markets Through the Power of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(ADLaMDisplay.variable, SpaceMono.variable)}>
      <head>
        <PlausibleProvider domain="taoshi.io" />
      </head>
      <body>
        <Providers>{children}</Providers>

        {/* <!-- Start of HubSpot Embed Code --> */}
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/45009699.js"
        />
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </html>
  );
}
