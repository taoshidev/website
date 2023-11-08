import Image from "next/image";
import type { Metadata } from "next";

import logo from "@/app/logo.svg";

export const metadata: Metadata = {
  title: "Taoshi",
};

export default function Home() {
  return (
    <main className="main">
      <div className="content">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="taoshi"
          style={{ marginBottom: "10px" }}
        />

        <div>
          <h1 className="h1">
            taoshi <span>(t,t)</span>
          </h1>
          <p>
            Welcome to Taoshi, where we&apos;re leading the charge in the
            Bittensor revolution. We harness the full potential of Bittensor to
            create dynamic and rewarding subnetworks that incentivize
            intelligence, revolutionizing how individuals and businesses
            interact with the Bittensor blockchain.
          </p>
          <p>
            Bittensor is more than just a blockchain; it&apos;s the doorway to a
            new era of decentralized intelligence. It&apos;s a platform that
            celebrates innovation, creativity, and expertise. At Taoshi,
            we&apos;re not only leveraging this remarkable technology;
            we&apos;re actively constructing specialized subnetworks, such as
            our cutting-edge time series prediction subnetwork, on top of it.
            This approach empowers users to access a wide array of possibilities
            within the Bittensor network, tailored to their unique needs.
          </p>
          <p>
            Our mission is clear: to create an intuitive, user-friendly
            environment that inspires individuals and enterprises to explore,
            innovate, and thrive within the Bittensor ecosystem. Whether
            you&apos;re an AI developer, a data scientist, or an entrepreneur
            with a vision, our solutions serve as your gateway to a world of
            opportunities. At Taoshi, we&apos;re shaping the future by
            harnessing Bittensor to build a smarter, more decentralized world,
            one specialized subnetwork at a time.
          </p>
          <footer>
            <a
              href="https://twitter.com/taoshiio"
              target="_blank"
              className="matrix"
            >
              Twitter
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
