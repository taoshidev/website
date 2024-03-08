"use client";

import NextImage from "next/image";

import {
  Title,
  Flex,
  Box,
  Text,
  Image,
  Center,
  Group,
  Stack,
} from "@mantine/core";

import { Map } from "@/components/Map";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { Team } from "@/components/Team/Team";

import logo from "@/assets/logo.svg";
import bittensor from "@/assets/bittensor.svg";
import intraday from "@/assets/intraday.svg";

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
    <Flex direction="column" justify="center">
      <Map />
      <Box mb={100}>
        <Box mb="150px" ta="center">
          <Title>We&apos;re always looking for talented people</Title>
          <Text>
            Ea laborum ipsum cupidatat ea commodo laborum excepteur nisi mollit.
            Velit fugiat commodo nulla nulla eu amet Lorem aliquip ullamco.
          </Text>
        </Box>

        <Team />
      </Box>
    </Flex>
  );
}
