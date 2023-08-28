import Image from "next/image";
import type { Metadata } from "next";

import logo from "@/app/logo.svg";

export const metadata: Metadata = {
  title: "Taoshi",
};

export default function Home() {
  return (
    <main>
      <div className="content">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="taoshi"
          style={{ marginBottom: "10px" }}
        />
        <h1 className="h1">taoshi</h1>
        <p className="subheading">Coming Soon</p>
      </div>
    </main>
  );
}
