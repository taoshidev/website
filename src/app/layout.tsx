import type { Metadata } from "next";
import { clsx } from "clsx";

import PlausibleProvider from "next-plausible";

import { ADLaMDisplay, SpaceMono } from "@/styles/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Taoshi",
  description: "Taoshi - Predictions through the power of AI",
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
