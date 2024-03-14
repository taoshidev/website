"use client";

import {
  Flex,
  Group,
  Box,
  Text,
  Accordion,
  Center,
  Divider,
  List,
  Image,
  Container,
  Table,
} from "@mantine/core";

import { PTNHero } from "@/components/PTNHero";
import { Hero } from "@/components/Hero";
import { Hubspot } from "@/components/PropNetHubspot";

import subnet from "@/assets/subnet.svg";

import { markets } from "@/constants";

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
            Coming March 22
          </Text>
          <Box mb={200}>
            <Hero
              title="Proprietary Trading Network"
              image={subnet}
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
              Taoshi&apos;s Proprietary Trading Network (PTN) stands at the
              forefront of a trading revolution, where cutting-edge
              decentralized technology meets sophisticated trading strategies.
              By leveraging the power of AI, and the collective intelligence of
              data scientists, traders, and machine learning teams, PTN s a
              unique synergy of proprietary trading, decentralized AI, and quant
              trading signals. No matter who you are, PTN equips you with the
              tools to navigate the financial markets with confidence.
            </Text>
          </Box>

          <Box mb={75}>
            <Text fw="bold" mb="sm">
              How Taoshi&apos;s Proprietary Trading Network Functions
            </Text>
            <Text>
              PTN operates on a robust framework that synergizes the distributed
              computing power of the Bittensor network with advanced machine
              learning algorithms. Traders, data scientists, and machine
              learning teams, all of whom are &apos;miners,&apos; contribute
              their algorithmic or by-hand trading signals across a swath of
              financial markets, generating actionable trading signals for
              clients. These signals are then made available on Taoshi&apos;s
              Request Network, where users can purchase them based on their
              trading needs. This collaborative ecosystem not only democratizes
              access to high-level trading strategies but also incentivizes
              contributions by miners through a tokenized reward system,
              aligning the interests of all network participants.
            </Text>
          </Box>

          <Box mb={75}>
            <Box mb="xl">
              <Text fw="bold" mb="sm">
                Why Mine or Purchase Signals on Proprietary Trading Network?
              </Text>
              <Text mb="md">
                Taoshi&apos;s PTN is the industry leader in decentralized
                proprietary trading. As a trailblazer in financial market
                forecasting and trading, miners and users of PTN&apos;s outputs
                will experience the following benefits:
              </Text>
            </Box>

            <Box mb="xl">
              <Text mb="lg" fw={700}>
                Miners:
              </Text>
              <List withPadding>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      The World&apos;s Largest Incentivized Mining Pool for
                      Trading Signals:
                    </Text>{" "}
                    Miners on PTN are graded and subsequently rewarded with $TAO
                    for their contributions to the network, incentivizing a
                    virtuous cycle of innovation.
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Diverse Financial Markets:
                    </Text>{" "}
                    On PTN, we empower miners to contribute their best trading
                    outputs. Miners have the ability to trade a variety of
                    financial markets: by-hand using our trading dashboard,
                    utilizing their own algorithms, or modifying the open-source
                    modeling created by Taoshi.
                    <Group align="flex-start" my="xl">
                      <Accordion flex="1">
                        <Accordion.Item value="BTCUSD">
                          <Accordion.Control
                            style={{ borderBottom: "1px dashed black" }}
                          >
                            <Text fw={700} size="sm">
                              Crypto
                            </Text>
                          </Accordion.Control>

                          <Accordion.Panel>
                            {markets.crypto.map((item) => (
                              <Text
                                ta="center"
                                my="sm"
                                size="xs"
                                key={item.label}
                              >
                                {item.label}
                              </Text>
                            ))}
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion flex="1">
                        <Accordion.Item value="BTCUSD">
                          <Accordion.Control
                            style={{ borderBottom: "1px dashed black" }}
                          >
                            <Text fw={700} size="sm">
                              Forex
                            </Text>
                          </Accordion.Control>

                          <Accordion.Panel>
                            {markets.forex.map((item) => (
                              <Text
                                ta="center"
                                my="sm"
                                size="xs"
                                key={item.label}
                              >
                                {item.label}
                              </Text>
                            ))}
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flex="1">
                        <Accordion.Item value="BTCUSD">
                          <Accordion.Control
                            style={{ borderBottom: "1px dashed black" }}
                          >
                            <Text fw={700} size="sm">
                              Indices
                            </Text>
                          </Accordion.Control>

                          <Accordion.Panel>
                            {markets.indices.map((item) => (
                              <Text
                                ta="center"
                                my="sm"
                                size="xs"
                                key={item.label}
                              >
                                {item.label}
                              </Text>
                            ))}
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                    </Group>
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Rapid Payouts:
                    </Text>{" "}
                    In the proprietary trading industry, traditional firms
                    require traders to pass rigorous challenges, oftentimes with
                    two phases. On PTN, miners can begin receiving their
                    incentives immediately after closing their first trade.
                  </Text>
                </List.Item>
              </List>
            </Box>

            <Box mb="xl">
              <Text mb="lg" fw={700}>
                Signal Users:
              </Text>
              <List withPadding>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Access to Highly Performant Trading Signals:
                    </Text>{" "}
                    By purchasing PTN&apos;s outputs, traders gain access to
                    institutional-grade insights, leveling the playing field and
                    enabling them to make informed decisions akin to seasoned
                    professionals. Institutions can leverage the collective
                    intelligence of a vast network to complement their existing
                    strategies, reduce research overheads, and enhance portfolio
                    performance.
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Diverse Choice of Outputs:
                    </Text>{" "}
                    On Taoshi&apos;s Request Network, users interested in
                    PTN&apos;s outputs have a wide selection to choose from.
                    Clients can tailor their purchases to specific miners and
                    financial markets, allowing users to pay for exactly what
                    they want to receive.
                  </Text>
                </List.Item>
                <List.Item mb="md">
                  <Text>
                    <Text fw={700} component="span">
                      Transparent, Easy-to-Use Marketplace:
                    </Text>{" "}
                    The PTN marketplace operates with full transparency, where
                    the quality and performance of trading signals are openly
                    available, fostering trust and reliability. Payments for
                    signals are easy; simply pay in stablecoins, and begin
                    utilizing signals!
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
              Ready to start contributing your trades to PTN? Discover how to
              begin your journey as a miner .
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
              Interested in Purchasing Proprietary Trading Network&apos;s
              Trading Outputs?
            </Text>
            <Text mb="sm">
              Retail traders and institutional clients alike will find
              PTN&apos;s outputs to be of exceptional value. With PTN, every
              trader and institution has the opportunity to harness the
              potential of AI to optimize their trading outcomes.
            </Text>
            <Text>
              If you are interested in purchasing the Trading Outputs generated
              by PTN, please stay tuned as Taoshi&apos;s Request Network remains
              under development. We&apos;re aiming to release by mid-April. In
              the meantime, we&apos;re providing signals via telegram completely
              free. To join, please visit this link
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
