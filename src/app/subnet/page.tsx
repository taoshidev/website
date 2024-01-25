"use client";

import NextImage from "next/image";

import { Image } from "@chakra-ui/next-js";
import {
  Divider,
  Container,
  Flex,
  Box,
  Text,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

import subnet from "@/app/assets/subnet.svg";
import openSource from "@/app/assets/open-source.svg";
import intraday from "@/app/assets/intraday.svg";

const ctas = [
  {
    event: "subnet",
    text: "Get Started",
    href: "https://github.com/taoshidev/time-series-prediction-subnet",
    isExternal: true,
  },
  {
    event: "docs",
    text: "Documentation",
    href: "https://github.com/taoshidev/time-series-prediction-subnet",
    isExternal: true,
  },
];

export default function Page() {
  return (
    <Container maxW="800px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />
          <Nav />

          <Hero
            title="Subnet 8"
            copy="The Nexus of Decentralized Financial Forecasting"
            ctas={ctas}
          />

          <Box mb="80px" borderLeft="1px dashed black" paddingLeft="20px">
            <Text>
              <Text as="span" borderBottom="1px dashed black">
                Subnet 8 is the flagship subnet of Taoshi within the Bittensor
                network, dedicated to revolutionizing the way we predict
                financial markets.
              </Text>{" "}
              Focused exclusively on price forecasting for Bitcoin, and at the
              cutting edge of open-source prediction modeling, we harness the
              collective intelligence of data scientists and AI enthusiasts to
              create a robust, decentralized forecasting platform. Subnet 8
              champions a transparent and merit-based ecosystem, where each
              contribution is pivotal in sculpting the landscape of financial
              forecasting. By joining Subnet 8, you contribute to a cutting-edge
              ecosystem that not only values your expertise, but also rewards
              it, through the world&apos;s largest incentivized mining pool.
            </Text>
          </Box>

          <Box mb="80px">
            <Text fontWeight="bold" mb="3">
              Why Mine on Subnet 8?
            </Text>
            <Text>
              Subnet 8 is a leader and innovator in prediction of financial
              markets. We are redefining the landscape of predictive modeling.
            </Text>
          </Box>

          <VStack spacing="80px" mb="80px">
            <HStack width="100%">
              <Box maxWidth="600px">
                <Text fontWeight="bold" mb="3">
                  Intraday Bitcoin Predictions
                </Text>

                <Text>
                  Subnet 8 has paid out 6.7 million dollars to miners to date,
                  approximately $87k in incentives per day. We offer the highest
                  incentives to data scientists and machine learning teams to
                  contribute their best models.
                </Text>
              </Box>
              <Center flex="1">
                <Image
                  as={NextImage}
                  width={100}
                  height={100}
                  src={subnet}
                  alt="largest mining pool"
                />
              </Center>
            </HStack>

            <HStack width="100%">
              <Center flex="1">
                <Image
                  as={NextImage}
                  width={100}
                  height={100}
                  src={openSource}
                  alt="Open Source Modeling"
                />
              </Center>
              <Box maxWidth="600px">
                <Text fontWeight="bold" mb="3">
                  Open Source Modeling
                </Text>

                <Text>
                  We are committed to transparency and collaboration, offering
                  all our predictive modeling tools and algorithms as open
                  source. This approach fosters trust and encourages innovation
                  and continuous improvement from the mining community.
                </Text>
              </Box>
            </HStack>

            <HStack width="100%">
              <Box maxWidth="600px">
                <Text fontWeight="bold" mb="3">
                  Intraday Bitcoin Predictions
                </Text>

                <Text>
                  Unlike competitors who focus solely on stock market
                  predictions, we are pioneering the space of intraday Bitcoin
                  price predictions. Taoshi&apos;s offerings will soon expand to
                  include other cryptocurrencies and financial markets, paving
                  the way for many opportunities to predict financial markets.
                </Text>
              </Box>
              <Center flex="1">
                <Image
                  as={NextImage}
                  width={100}
                  height={100}
                  src={intraday}
                  alt="Picture of the author"
                />
              </Center>
            </HStack>
          </VStack>

          <Box mb="80px">
            <Text fontWeight="bold" mb="3">
              How Subnet 8 Functions
            </Text>
            <Text>
              Subnet 8 operates on a decentralized network where each miner
              contributes their predictive models to forecast Bitcoin&apos;s
              intraday price movement up to 8 hours in the future. Miner&apos;s
              models are validated and tested against real-world data, then
              scored and rewarded in $TAO based on their grade.
            </Text>
          </Box>

          <Center my="80px">
            <Divider
              orientation="horizontal"
              borderStyle="dashed"
              width="50%"
            />
          </Center>

          <Box mb="80px">
            <Text fontWeight="bold" mb="3">
              Feeling Ready To Get Started?
            </Text>

            <Text>
              Begin your journey as a miner on Subnet 8 with our ReadMe on
              Github. Follow our guide, begin contributing your models, and
              start earning rewards within 10 hours. Additionally, we recommend
              joining our Mining Hub on Discord, which is a collaborative space
              for both novice and experienced miners.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
