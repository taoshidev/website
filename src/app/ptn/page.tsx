"use client";

import {
  Box,
  Text,
  Center,
  Divider,
  List,
  Image,
  Container,
} from "@mantine/core";

import { markets } from "@/constants";

import { AssetList } from "@/components/AssetList";
import { PTNHero } from "@/components/PTNHero";
import { Hero } from "@/components/Hero";
import { Hubspot } from "@/components/PropNetHubspot";

import subnet from "@/assets/subnet.svg";

const ctas = [
  {
    event: "subnet",
    text: "Use Trading Signals",
    href: "https://github.com/taoshidev/time-series-prediction-subnet",
    isExternal: true,
  },
  {
    event: "docs",
    text: "Get Started Mining",
    href: "https://github.com/taoshidev/prop-net",
    isExternal: true,
  },
];

export default function Page() {
  return (
    <Box>
      <Container maw="800px" h="100%">
        <Box>
          <Text mb="xl" ta="center" size="xs" c="orange">
            Coming March 22, 2024
          </Text>
          <Box mb="lg">
            <PTNHero />
          </Box>

          <Box mb={200}>
            <Hero
              title="Taoshi's Proprietary Trading Network (PTN)"
              ctas={ctas}
              copy="Revolutionizing Proprietary Trading with Decentralized AI"
            />
          </Box>
          <Box
            pl="20px"
            mb={75}
            style={{
              borderLeft: "1px dashed black",
            }}
          >
            <Text>
              Taoshi&apos;s Proprietary Trading Network (PTN) spearheads a
              trading revolution, merging cutting-edge decentralized technology
              with sophisticated trading strategies. By leveraging the power of
              AI and the collective intelligence of data scientists, traders,
              and machine learning teams, PTN offers a unique synergy of
              proprietary trading, decentralized AI, and quant trading signals,
              empowering all users to navigate financial markets confidently.
            </Text>
          </Box>
          <Box mb={75}>
            <Text fw="bold" mb="sm">
              How Taoshi&apos;s Proprietary Trading Network Functions
            </Text>
            <Text>
              Traders, data scientists, and machine learning teams—all of whom
              are &apos;miners&apos;—contribute their algorithmic or manual
              trading signals across various financial markets, creating
              actionable signals for clients. These signals are available on
              Taoshi&apos;s Request Network, where users can purchase them based
              on their trading needs. This collaborative ecosystem democratizes
              access to high-level trading strategies and incentivizes miners
              through a tokenized reward system, aligning the interests of all
              participants.
            </Text>
          </Box>
          <Box mb={75}>
            <Box mb="xl">
              <Text fw="bold" mb="sm">
                Why Mine or Purchase Signals on Proprietary Trading Network?
              </Text>
              <Text mb="md">
                Taoshi&apos;s PTN leads the industry in decentralized
                proprietary trading, and offers the following, unparalleled
                benefits for miners and users of its outputs:
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
                      World&apos;s Largest Incentivized Mining Pool for Trading
                      Signals:
                    </Text>{" "}
                    PTN rewards miners with $TAO for their contributions,
                    fostering a cycle of innovation.
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Diverse Financial Markets:
                    </Text>{" "}
                    Miners trade across various markets, leveraging AI to build
                    sophisticated trading strategies.
                  </Text>
                  <AssetList />
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Rapid Payouts:
                    </Text>{" "}
                    In traditional proprietary trading firms, traders often face
                    rigorous challenges, sometimes spanning two phases. However,
                    on PTN, miners can start receiving incentives right after
                    their first trade.
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
                      Access to Highly Performant Trading Signals:
                    </Text>{" "}
                    Purchasing PTN&apos;s outputs grants access to
                    institutional-grade insights, empowering users to make the
                    most informed decisions. Institutions can leverage the vast
                    network&apos;s collective intelligence to complement
                    existing strategies, reduce research overheads, and enhance
                    portfolio performance.
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
                    ensuring the quality and performance of trading signals are
                    openly available, fostering trust and reliability. Payments
                    are simple; pay in stablecoins and start utilizing signals!
                  </Text>
                </List.Item>
              </List>
            </Box>
          </Box>
          <Box mb={75}>
            <Text fw="bold" mb="sm">
              Get Started: Mining on Proprietary Trading Network
            </Text>
            <Text mb="xl">
              Ready to contribute? Start your journey as a miner on PTN with our
              README on GitHub. Starting Friday, March 22, 2024, follow our
              guide, contribute signals, and earn rewards after closing your
              first trade. We also recommend joining our Community Hub on
              Discord, a collaborative space for miners.
            </Text>
            <Image
              my={50}
              h="auto"
              w="100%"
              fit="contain"
              src="/flow.png"
              alt="taoshi logo"
            />
          </Box>
          <Box mb={75}>
            <Text fw="bold" mb="sm">
              Interested in Purchasing PTN&apos;s Trading Outputs?
            </Text>
            <Text mb="sm">
              Retail traders and institutional clients will find PTN&apos;s
              outputs exceptionally valuable. With PTN, every trader and
              institution can optimize their trading outcomes using AI.
            </Text>
            <Text>
              If you&apos;re interested in purchasing the Trading Outputs
              generated by PTN, please stay tuned as Taoshi&apos;s Request
              Network is under development. We aim to release it in April 2024.
              Meanwhile, we&apos;re providing signals via Telegram for free.
              Please stay tuned and we&apos;ll provide a link soon!
            </Text>
          </Box>
        </Box>
        <Center my="xl">
          <Divider variant="dashed" w="50%" bg="black" />
        </Center>
        <Hubspot />
      </Container>
    </Box>
  );
}