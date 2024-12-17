"use client";

import {
  Box,
  Text,
  Center,
  Divider,
  List,
  Image,
  Card,
  Anchor,
  Container,
  Button,
} from "@mantine/core";

import { AssetList } from "@/components/AssetList";
import { PTNHero } from "@/components/PTNHero";
import { Hero } from "@/components/Hero";
import { Hubspot } from "@/components/PropNetHubspot";

const ctas = [
  {
    event: "docs",
    text: "Get Started Mining",
    href: "https://github.com/taoshidev/proprietary-trading-network",
    isExternal: true,
  },
];

export default function Page() {
  return (
    <Container maw="1000px" h="100%" my="100">
      <Box>
        <Box>
          <Box mb="lg">
            <PTNHero />
          </Box>
          <Box mb={200}>
            <Hero
              title="Subnet 8 on Bittensor: Taoshi’s PTN"
              ctas={ctas}
              copy="Revolutionizing Financial Markets with Decentralized AI"
            />
          </Box>
          <Card mb={75} withBorder>
            <Text>
              Taoshi&apos;s PTN is at the forefront of innovation, merging
              cutting-edge decentralized technology with sophisticated
              strategies. By harnessing AI with the combined expertise of data
              scientists, traders, and machine learning teams, PTN creates a
              unique synergy between decentralized AI and quantitative
              strategies, empowering users to navigate financial markets with
              confidence.
            </Text>
          </Card>
          <Box mb={75}>
            <Text fw="bold" mb="sm">
              How Taoshi&apos;s PTN Functions
            </Text>
            <Text>
              Miners contribute algorithmic or manual quant signals across
              various financial markets, creating actionable insights for
              clients. These signals are available on Taoshi&apos;s Request
              Network, where users can purchase them based on their individual
              needs. This collaborative ecosystem democratizes access to
              advanced quant strategies and incentivizes miners through a
              tokenized reward system, aligning the interests of all
              participants.
            </Text>
          </Box>
          <Box mb={75}>
            <Box mb="xl">
              <Text fw="bold" mb="sm">
                Why Mine or Purchase Signals on PTN?
              </Text>
              <Text mb="md">
                Taoshi&apos;s PTN is a first-of-its-kind decentralized prop
                firm, offering unparalleled benefits for both miners and users:
              </Text>
            </Box>

            <Box mb="xl">
              <Text mb="lg" fw={700}>
                For Miners
              </Text>
              <List withPadding>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      World&apos;s Largest Incentivized Mining Pool for Quant
                      Signals:
                    </Text>{" "}
                    PTN rewards miners with for contributing their top-notch
                    strategies, fostering a cycle of innovation.
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Diverse Financial Markets:
                    </Text>{" "}
                    Miners can apply their strategies across a range of
                    financial markets.
                  </Text>
                  <AssetList />
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Rapid Payouts:
                    </Text>{" "}
                    Unlike traditional prop firms, where miners often face
                    multiple phases and challenges, PTN offers the opportunity
                    to start receiving incentives right after contributing the
                    first signal to the network.
                  </Text>
                </List.Item>
              </List>
            </Box>

            <Box mb="xl">
              <Text mb="lg" fw={700}>
                For Signal Users
              </Text>
              <List withPadding>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Access to Highly Performant Quant Signals:
                    </Text>{" "}
                    Purchasing PTN’s signals provides institutional-grade
                    insights, helping users make informed decisions.
                    Institutions can also leverage the vast network’s collective
                    intelligence to complement existing strategies, reduce
                    research overheads, and enhance portfolio performance.
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Diverse Output Choices:
                    </Text>{" "}
                    Taoshi&apos;s Request Network provides a wide selection of
                    PTN&apos;s outputs, allowing clients to tailor purchases to
                    specific miners and financial markets.
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Transparent, Easy-to-Use Marketplace:
                    </Text>{" "}
                    The PTN marketplace operates with full transparency,
                    ensuring the quality and performance of signals are clearly
                    visible, fostering trust and reliability. Payments are
                    straightforward—use Stripe or PayPal to purchase signals and
                    start using them immediately.
                  </Text>
                </List.Item>
              </List>
            </Box>
          </Box>

          <Box mb={75}>
            <Card style={{ border: "1px dashed black" }}>
              <Text fw="bold" mb="sm">
                Get Started: Mining on PTN
              </Text>
              <Text>
                Ready to contribute? Start your journey as a miner on PTN with
                our{" "}
                <Anchor
                  href="https://github.com/taoshidev/proprietary-trading-network"
                  target="_blank"
                >
                  README on GitHub
                </Anchor>
                . Follow the guide to contribute signals and start earning
                rewards from day 1. We also recommend joining our{" "}
                <Anchor href="https://discord.gg/MKtKVYnCDh" target="_blank">
                  Community Hub on Discord
                </Anchor>
                , where miners collaborate and share insights.
              </Text>
            </Card>
          </Box>

          <Box mb={75}>
            <Text fw="bold" mb="sm">
              Interested in Purchasing PTN’s Outputs?
            </Text>
            <Box>
              <Text mb="sm">
                To access the full range of outputs generated by PTN, visit our
                Request Network to purchase signals.{" "}
              </Text>
              <Box mb="lg">
                <Anchor href="https://request.taoshi.io" target="_blank">
                  <Button variant="primary" size="sm" w="200px">
                    Request Network
                  </Button>
                </Anchor>
              </Box>
            </Box>

            <Text mb="sm">
              Additionally, our partners at Timeless offer access to PTN’s
              signals from top miners through their signal service, allowing
              users to manually execute strategies on their own accounts. For
              more details, visit their{" "}
              <Anchor href="https://twitter.com/Timeless_io" target="_blank">
                Twitter
              </Anchor>
              .
            </Text>
            <Text></Text>
          </Box>
        </Box>
        <Center my="xl">
          <Divider variant="dashed" w="50%" bg="black" color="#F7F6F3" />
        </Center>
        <Hubspot />
      </Box>
    </Container>
  );
}
