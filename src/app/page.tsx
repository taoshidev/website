"use client";

import NextImage from "next/image";

import {
  Container,
  Flex,
  Box,
  Text,
  Image,
  Center,
  Group,
  Stack,
} from "@mantine/core";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { Team } from "@/components/Team/Team";

import logo from "@/app/assets/logo.svg";
import bittensor from "@/app/assets/bittensor.svg";
import intraday from "@/app/assets/intraday.svg";

const ctas = [
  {
    event: "subnet",
    text: "Get Started",
    href: "/subnet",
    isExternal: false,
  },
  {
    event: "docs",
    text: "Documentation",
    href: "https://github.com/taoshidev/time-series-prediction-subnet",
    isExternal: true,
  },
];

export default function Home() {
  return (
    <Container maw="800px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />

          <Box my="150px">
            <Hero
              ctas={ctas}
              copy="Decentralized Financial Market Forecasting Through the Power of AI"
            />
          </Box>

          <Statistics />

          <Stack gap="xl">
            <Group w="100%" gap="xl">
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Taoshi
                </Text>

                <Text>
                  Taoshi is leading the Bittensor revolution. We harness the
                  full potential of Bittensor to create dynamic and rewarding
                  subnetworks that incentivize intelligence, revolutionizing how
                  individuals and businesses interact with the Bittensor
                  blockchain.
                </Text>
              </Box>
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={logo}
                  alt="taoshi logo"
                />
              </Center>
            </Group>

            <Group w="100%" gap="xl">
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={bittensor}
                  alt="Open Source Modeling"
                />
              </Center>
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Bittensor
                </Text>

                <Text>
                  Bittensor is more than just a blockchain; it&apos;s the
                  doorway to a new era of decentralized intelligence. It&apos;s
                  a platform that celebrates innovation, creativity, and
                  expertise. At Taoshi, we&apos;re not only leveraging this
                  remarkable technology; we&apos;re actively constructing
                  specialized subnetworks, such as our cutting-edge time series
                  prediction subnetwork, on top of it. This approach empowers
                  users to access a wide array of possibilities within the
                  Bittensor network, tailored to their unique needs.
                </Text>
              </Box>
            </Group>

            <Group w="100%" gap="xl">
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Our Mission
                </Text>

                <Text>
                  Taoshi&apos;s mission is to create an intuitive, user-friendly
                  environment that inspires individuals and enterprises to
                  explore, innovate, and thrive within the Bittensor ecosystem.
                  Whether you&apos;re an AI developer, a data scientist, or an
                  entrepreneur with a vision, our solutions serve as your
                  gateway to a world of opportunities. At Taoshi, we&apos;re
                  shaping the future by harnessing Bittensor to build a
                  brighter, more decentralized world, one specialized subnetwork
                  at a time.
                </Text>
              </Box>
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={intraday}
                  alt="Taoshi's Mission"
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
