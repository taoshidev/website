"use client";

import NextImage from "next/image";

import {
  Container,
  Center,
  Flex,
  Box,
  Text,
  Divider,
  List,
  Anchor,
  Group,
  rem,
  Stack,
  Image,
  ThemeIcon,
} from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons-react";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hubspot } from "@/components/Hubspot";

import mining from "@/app/assets/mining.svg";
import vetted from "@/app/assets/vetted.svg";
import openSource from "@/app/assets/open-source.svg";
import intraday from "@/app/assets/intraday.svg";
import fsc from "@/app/assets/fsc.svg";

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
    <Container maw="800px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />

          <Box my="150px">
            <Hero
              title="Subnet 8"
              copy="The Nexus of Decentralized Financial Forecasting"
              ctas={ctas}
            />
          </Box>

          <Box
            pl="20px"
            mb="xl"
            style={{
              borderLeft: "1px dashed black",
            }}
          >
            <Text>
              <Text
                component="span"
                style={{
                  borderBottom: "1px dashed black",
                }}
              >
                Subnet 8 is the flagship subnet of Taoshi within the Bittensor
                network, dedicated to revolutionizing the way we predict
                financial markets.
              </Text>{" "}
              Currently, focused exclusively on price forecasting for Bitcoin,
              and at the cutting edge of open-source prediction modeling, we
              harness the collective intelligence of data scientists and AI
              enthusiasts to create a robust, decentralized forecasting
              platform. Subnet 8 champions a transparent and merit-based
              ecosystem, where each contribution is pivotal in sculpting the
              landscape of financial forecasting. By joining Subnet 8, you
              contribute to a cutting-edge ecosystem that not only values your
              expertise, but also rewards it, through the world&apos;s largest
              incentivized mining pool for the prediction of financial markets.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="sm">
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

          <Box mb="xl">
            <Text fw="bold" mb="sm">
              Why Mine on Subnet 8?
            </Text>
            <Text>
              Subnet 8 is a leader and innovator in prediction of financial
              markets. We are redefining the landscape of predictive modeling.
            </Text>
          </Box>

          <Stack mb="xl">
            <Group w="100%" mb="xl">
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  The World&apos;s Largest Incentivized Mining Pool for the
                  Prediction of Financial Markets
                </Text>

                <Text>
                  Subnet 8 has paid out 7.6 million dollars to miners to date,
                  approximately $133k in incentives per day. We offer the
                  highest incentives to data scientists and machine learning
                  teams to contribute their best models.
                </Text>
              </Box>
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={mining}
                  alt="largest mining pool"
                />
              </Center>
            </Group>

            <Group w="100%" mb="xl">
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={openSource}
                  alt="Open Source Modeling"
                />
              </Center>
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Open Source Modeling
                </Text>

                <Text>
                  We are committed to transparency and collaboration, offering
                  all our predictive modeling tools and algorithms as open
                  source. This approach fosters trust and encourages innovation
                  and continuous improvement from the mining community.
                </Text>
              </Box>
            </Group>

            <Group w="100%" mb="xl">
              <Box maw="600px">
                <Text fw="bold" mb="sm">
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
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={intraday}
                  alt="Picture of the author"
                />
              </Center>
            </Group>

            <Group w="100%" mb="xl">
              <Center flex="1" display={{ base: "none", sm: "flex" }}>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={vetted}
                  alt="Vetted Data Sources"
                />
              </Center>
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Vetted Data Sources
                </Text>

                <Text>
                  Taoshi provide all miners with vetted data sources. These
                  partner data providers give all our miners premium data
                  sources to build their models.
                </Text>
              </Box>
            </Group>

            <Group w="100%" mb="sm">
              <Box maw="600px">
                <Text fw="bold" mb="sm">
                  Taoshi&apos;s Feature Set Creator
                </Text>

                <Text>
                  We&apos;ve created a scalable feature engineer pipeline for
                  all our miners. This is packaged in our product called Feature
                  Set Creator. The infrastructure helps miners both for training
                  and for go-live on main-net.
                </Text>
              </Box>
              <Box>
                <Image
                  component={NextImage}
                  width={100}
                  height={100}
                  src={fsc}
                  alt="Picture of the author"
                />
              </Box>
            </Group>

            <Box mb="xl">
              <Text mb="lg">
                The infrastructure allows miners to do the following:
              </Text>
              <List
                spacing="lg"
                center
                icon={
                  <ThemeIcon color="orange" size={24} radius="xl">
                    <IconCircleCheck
                      style={{ width: rem(16), height: rem(16) }}
                    />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  Use pre-generated data from the vetted data sources provided
                  by Taoshi for training.
                </List.Item>
                <List.Item>
                  Receive data from defined custom data sources that the miner
                  can choose to use.
                </List.Item>
                <List.Item>
                  Take the data from the data sources and transform the data
                  into features using algorithmic modeling of their choice
                  (leveraging standardized indicators RSI, MACD, etc. or
                  building custom ones)
                </List.Item>
                <List.Item>Normalize the features into a feature set</List.Item>
                <List.Item>Use the generated feature set for models</List.Item>
              </List>
            </Box>
          </Stack>

          <Center my="xl">
            <Divider variant="dashed" w="50%" bg="black" />
          </Center>

          <Box mb="xl">
            <Text size="xl" fw="bold" mb="3" color="orange">
              Ready to Predict the Future?
            </Text>

            <Box>
              <Text>
                Feeling ready to get started? Begin your journey as a miner on
                Subnet 8 with our{" "}
                <Anchor
                  href="https://github.com/taoshidev/time-series-prediction-subnet"
                  px="1"
                  bg="orange"
                  c="white"
                >
                  README on GitHub.
                </Anchor>
                <Anchor
                  href="https://github.com/taoshidev/time-series-prediction-subnet"
                  px="1"
                  bg="orange"
                  c="white"
                >
                  Follow our guide
                </Anchor>
                , contribute your models, and earn rewards within 10 hours.
                Additionally, we recommend{" "}
                <Anchor
                  href="https://discord.gg/dks5wJNA"
                  px="1"
                  bg="orange"
                  c="white"
                >
                  joining our Mining Hub on Discord
                </Anchor>
                , a collaborative space for novice and experienced miners.
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Center my="xl">
        <Divider variant="dashed" w="50%" bg="black" />
      </Center>
      <Hubspot />
    </Container>
  );
}
