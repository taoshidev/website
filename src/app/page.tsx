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
  Container,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Partners } from "@/components/Partners";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/Team";
import { Logo } from "@/components/Logo";

import logo from "@/assets/logo.svg";
import bittensor from "@/assets/bittensor.svg";
import intraday from "@/assets/intraday.svg";

const ctas = [
  {
    event: "ptn",
    text: "Get Started",
    href: "/ptn",
    isExternal: false,
  },
  {
    event: "docs",
    text: "Documentation",
    href: "https://docs.taoshi.io",
    isExternal: true,
  },
];

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container maw="1000px" h="100%" my="100">
      <Flex direction="column" justify="center">
        <Box mb={100}>
          <Box mb={200}>
            {!isMobile && <Logo />}

            <Hero
              wordmark
              ctas={ctas}
              copy="Revolutionizing Wealth Generation with Decentralized AI"
            />
          </Box>

          <Stack gap={100}>
            <Group w="100%" gap="xl">
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Taoshi
                </Text>

                <Text>
                  At Taoshi, we’re at the forefront of the Bittensor revolution.
                  Since our founding in 2023, we’ve been dedicated to
                  transforming the future of finance. We develop dynamic
                  subnetworks where decentralized AI and machine learning
                  analyze data across various asset classes. As a pivotal part
                  of the Bittensor ecosystem, we’re not just engaging with the
                  blockchain revolution; we’re leading it by delivering advanced
                  data that empowers users to make informed financial decisions.
                </Text>
              </Box>
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={200}
                  height={200}
                  src={logo}
                  alt="taoshi logo"
                />
              </Center>
            </Group>

            <Group w="100%" gap="xl">
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={200}
                  height={200}
                  src={intraday}
                  alt="Taoshi's Mission"
                />
              </Center>
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Our Mission
                </Text>

                <Text>
                  We aim to disrupt financial market trading by democratizing
                  access to sophisticated and ever-evolving trading strategies.
                </Text>
              </Box>
            </Group>

            <Group w="100%" gap="xl">
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Bittensor
                </Text>

                <Text>
                  Bittensor is more than just a blockchain; it&apos;s a
                  groundbreaking network that fosters decentralized
                  intelligence. Its consensus mechanism rewards the creation and
                  sharing of AI models. This neural network of nodes, maintained
                  by independent miners, promotes a cooperative environment for
                  AI services to be developed and utilized worldwide. At Taoshi,
                  we harness Bittensor&apos;s capabilities through our
                  specialized subnet (PTN). As part of the Bittensor ecosystem,
                  we contribute to a decentralized AI marketplace, powered by
                  the Bittensor token ($TAO), ensuring the seamless exchange of
                  data and intelligence. Taoshi acts as a gateway to a new era
                  of accessible, incentivized intelligence, where every
                  contribution to the network&apos;s growth is valued and
                  rewarded.
                </Text>
              </Box>
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={200}
                  height={200}
                  src={bittensor}
                  alt="Open Source Modeling"
                />
              </Center>
            </Group>
          </Stack>
        </Box>
        <Team />
      </Flex>
    </Container>
  );
}
