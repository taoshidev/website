"use client";

import NextImage from "next/image";

import {
  Flex,
  Box,
  Text,
  Image,
  Center,
  Group,
  Stack,
  Anchor,
  Card,
  Container,
} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import {Partners} from "@/components/Partners";
import {Hero} from "@/components/Hero";
import {Statistics} from "@/components/Statistics";
import {Team} from "@/components/Team";
import {Logo} from "@/components/Logo";

import logo from "@/assets/logo.svg";
import bittensor from "@/assets/bittensor.svg";
import intraday from "@/assets/intraday.svg";

const ctas = [
  {
    event: "ptn",
    text: "Get Started",
    href: "https://github.com/taoshidev/proprietary-trading-network",
    isExternal: true,
  },
  {
    event: "docs",
    text: "Documentation",
    href: "https://docs.taoshi.io/",
    isExternal: true,
  },
];

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container maw="1000px" h="100%" my="100">
      <Flex direction="column" justify="center">
        <Box mb={100}>
          <Box mb={100}>
            {!isMobile && <Logo/>}
            <Hero
              ctas={ctas}
              copy="Delivering World Class Quant Trading Signals Through the Power of Decentralized AI"
            />
          </Box>

          <Box>
            <Text ta='center'>
              At Taoshi, we&apos;re pioneering the Bittensor revolution with
              a keen focus on the future of trading financial markets. We
              craft dynamic subnetworks, where decentralized AI and machine
              learning power the world&apos;s most complete trading signals
              across various asset classes. By integrating cutting-edge AI &
              machine learning technology with the blockchain, we provide
              miners, traders, and developers with a fertile ground for
              innovation, where their contributions yield tangible,
              lucrative rewards. As a cornerstone of the Bittensor
              ecosystem, we&apos;re not just participating in the blockchain
              revolution; we&apos;re leading it by delivering sophisticated
              tools and insights that empower users to make informed
              decisions in financial markets.
            </Text>
          </Box>
        </Box>

        <Team/>
        <Partners/>
      </Flex>
    </Container>
  );
}
