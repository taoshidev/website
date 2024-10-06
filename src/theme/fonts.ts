import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"], weight: ["400", "900"] });

export const ADLaMDisplay = localFont({
  src: "../fonts/ADLaMDisplay-Regular.ttf",
  weight: "400",
  style: "normal",
});

export const SpaceMono = localFont({
  src: [
    {
      path: "../fonts/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const fonts = {
  heading: ADLaMDisplay,
  body: DMSans,
};
