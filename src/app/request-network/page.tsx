"use client";

import NextImage from "next/image";
import {
  Anchor,
  Box,
  Grid,
  Container,
  Center,
  Card,
  Title,
  Text,
  Image,
  Stack,
  List,
  Group,
  ActionIcon,
  Button,
} from "@mantine/core";
import { IconBrandX } from "@tabler/icons-react";

import { Hero } from "@/components/Hero";

import nasa from "@/assets/nasa.png";
import vision from "@/assets/vision.png";
import saturn from "@/assets/saturn.png";
import rnHero from "@/assets/rn-hero.png";
import flywheel from "@/assets/flywheel.png";
import sneakPeak from "@/assets/sneak-peak.png";

export default function Page() {
  return (
    <Box>
      <Container maw="1000px" h="100%" mb={170}>
        <Group justify="space-between">
          <Box flex="1">
            <Text c="orange" size="xs">
              Coming End of April 2024
            </Text>
            <Title>Request Network</Title>
            <Text>A signals marketplace, built on Bittensor.</Text>
            <Group mt="lg" gap="lg">
              <Button>Get Started</Button>
              <Button>Whitepaper</Button>
            </Group>
          </Box>
          <Box flex="1">
            <Image
              component={NextImage}
              w="auto"
              h={489}
              fit="contain"
              src={rnHero}
              alt="Hero Image"
            />
          </Box>
        </Group>
      </Container>

      <Box bg="orange" mb={170}>
        <Container maw="1000px" w="100%" py={70}>
          <Group justify="space-between">
            <Center flex="1">
              <Image
                component={NextImage}
                w="auto"
                h={300}
                fit="contain"
                src={sneakPeak}
                alt="Hero Image"
              />
            </Center>
            <Box flex="1">
              <Title order={3} c="white" mb="lg">
                A Sneak Peek into The Request Network
              </Title>
              <Text c="white">
                Imagine a digital marketplace where you can select and purchase
                the most relevant trading signals for your strategy, tailored to
                your preferred asset classes and currency pairs—all with the
                simplicity and security of stablecoin transactions.
              </Text>
              <Button>Learn More</Button>
            </Box>
          </Group>
        </Container>
      </Box>

      <Container maw="1000px" w="100%" py={70} mb={170}>
        <Group justify="space-between">
          <Box flex="1">
            <Title order={3} mb="lg">
              Taoshi’s Vision
            </Title>
            <Text>
              We seek to empower traders by providing unparalleled access to
              curated, high-quality trading signals from the world&apos;s top
              quant traders on PTN.
            </Text>
            <Button>Learn More</Button>
          </Box>
          <Center flex="1">
            <Image
              component={NextImage}
              w={275}
              h="auto"
              fit="contain"
              src={vision}
              alt="Hero Image"
            />
          </Center>
        </Group>
      </Container>

      <Box bg="#282828" mb={170}>
        <Container maw="1000px" w="100%" py={70}>
          <Group justify="space-between">
            <Center flex="1">
              <Image
                component={NextImage}
                w={427}
                h="auto"
                fit="contain"
                src={flywheel}
                alt="Hero Image"
              />
            </Center>
            <Box flex="1">
              <Title c="white" order={3} mb="lg">
                Bringing the Flywheel Effect to Bittensor
              </Title>
              <Text c="white">
                All participants in the Request Network and PTN ecosystem
                benefit: Miners are rewarded for contributing their expert quant
                signals, signal clients gain a competitive edge to outperform
                the market, and validators receive 100% of Request Network
                revenues for their pivotal role in the ecosystem.
              </Text>
              <Button>Learn More</Button>
            </Box>
          </Group>
        </Container>
      </Box>

      <Container maw="1000px" w="100%" py={70} mb={170}>
        <Group justify="space-between">
          <Box flex="1">
            <Title mb="xl">Roadmap</Title>
            <Stack
              gap="xl"
              style={{ borderLeft: "1px dashed #282828" }}
              pl="xl"
            >
              <Card>
                <Text c="orange" mb="md">
                  April 2024
                </Text>
                <Text size="xs" fw="bold" mb="xs">
                  Core Functionality
                </Text>
                <List size="xs">
                  <List.Item>
                    Validator Onboarding
                    <List size="xs" withPadding>
                      <List.Item>Endpoint Setup</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    Consumer Onboarding
                    <List size="xs" withPadding>
                      <List.Item>Subnet Selection</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>Dashboard</List.Item>
                  <List.Item>Payment Relay</List.Item>
                  <List.Item>Open-Source ReqNet API</List.Item>
                </List>
              </Card>
              <Card>
                <Text c="orange" mb="md">
                  May 2024
                </Text>
                <Text size="xs" fw="bold" mb="xs">
                  Validator Experience Enhancements
                </Text>
                <List size="xs">
                  <List.Item>Payment Relay Optimization</List.Item>
                  <List.Item>
                    Dashboard Enhancements
                    <List size="xs" withPadding>
                      <List.Item>Statistics</List.Item>
                      <List.Item>Taoshi Score</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>Consumer API</List.Item>
                  <List.Item>Documentation</List.Item>
                  <List.Item>Tutorials</List.Item>
                </List>
              </Card>
              <Card>
                <Text c="orange" mb="md">
                  June 2024
                </Text>
                <Text size="xs" fw="bold" mb="xs">
                  Subnet API
                </Text>
                <List size="xs">
                  <List.Item>Dashboard</List.Item>
                  <List.Item>Validator Inheritance</List.Item>
                </List>
              </Card>
              <Card>
                <Text size="xs">more to come...</Text>
              </Card>
            </Stack>
          </Box>
          <Center flex="1">
            <Image
              component={NextImage}
              w="auto"
              h={400}
              fit="contain"
              src={nasa}
              alt="Hero Image"
            />
          </Center>
        </Group>
      </Container>

      <Container maw="1000px" w="100%" mb={170}>
        <Center mb="xl">
          <Image
            component={NextImage}
            w={200}
            h="auto"
            fit="contain"
            src={saturn}
            alt="Hero Image"
          />
        </Center>
        <Box mb="xl" ta="center">
          <Title mb="sm">Stay Tuned</Title>
          <Text mb="lg">
            Stay up to date on all things Taoshi through our{" "}
            <Anchor href="https://twitter.com/taoshiio/">Twitter</Anchor>,{" "}
            <Anchor href="https://discord.com/invite/MKtKVYnCDh">
              Discord
            </Anchor>
            , and{" "}
            <Anchor href="https://www.linkedin.com/company/taoshi/">
              LinkedIn
            </Anchor>
            . Here, we’ll be posting updates and more teasers on the Request
            Network. Our team is here to support you and answer your questions!
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
