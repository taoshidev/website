"use client";

import {
  Flex,
  Box,
  Text,
  Group,
  Anchor,
  Container, Button,
} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import {Partners} from "@/components/Partners";
import {Team} from "@/components/Team";
import {Logo} from "@/components/Logo";
import {usePlausible} from "next-plausible";

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
  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Container maw="1000px" h="100%" my="100">
      <Flex direction="column" justify="center">
        <Box mb={50}>
          <Box mb={100}>
            {!isMobile && <Logo/>}
          </Box>

          <Box>
            <Text ta='center'>
              At Taoshi, we&apos;re pioneering the Bittensor revolution. We craft dynamic subnetworks where decentralized AI and machine learning power quantitative data across various asset classes. By integrating cutting-edge AI and machine learning technology with the blockchain, we provide miners and developers with fertile ground for innovation, where their contributions yield tangible, lucrative rewards. As a cornerstone of the Bittensor ecosystem, we&apos;re not just participating in the blockchain revolution; we&apos;re leading it by delivering sophisticated data that empower users to make informed decisions in financial markets.
            </Text>
          </Box>
        </Box>

        <Group justify="center" mb={200}>
          {ctas?.length &&
            ctas.map((cta) => (
              <Anchor
                key={cta.event}
                onClick={() => sendEvent(cta.event)}
                href={cta.href}
              >
                <Button variant="primary" size="sm" w="200px">
                  {cta.text}
                </Button>
              </Anchor>
            ))}
        </Group>


        <Team/>
        <Partners/>
      </Flex>
    </Container>
  );
}
