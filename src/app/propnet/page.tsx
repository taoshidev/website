"use client";

import { Flex, Box, Text, Center, Divider, List } from "@mantine/core";

import { Hero } from "@/components/Hero";
import { Hubspot } from "@/components/PropNetHubspot";

import subnet from "@/assets/subnet.svg";

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
    <Box>
      <Flex direction="column" justify="center">
        <Box>
          <Box mb={200}>
            <Hero
              title="Prop Net"
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
              Prop Net is Taoshi&apos;s second subnet within the Bittensor
              ecosystem, and stands at the forefront of a trading revolution,
              where cutting-edge decentralized technology meets sophisticated
              trading strategies. By leveraging the collective intelligence of
              data scientists, traders, and machine learning teams, Prop Net is
              a unique synergy of proprietary trading, decentralized AI, and
              algorithmic trading signals. No matter who you are, Prop Net
              equips you with the tools to navigate the financial markets with
              confidence.
            </Text>
          </Box>

          <Box mb={75}>
            <Text fw="bold" mb="sm">
              How Prop Net Functions
            </Text>
            <Text>
              Prop Net operates on a robust framework that synergizes the
              distributed computing power of the Bittensor network with advanced
              machine learning algorithms. Traders, data scientists, and machine
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
                Why Mine or Purchase Signals on Prop Net?
              </Text>
              <Text mb="md">
                Taoshi&apos;s Prop Net is the industry leader in decentralized
                proprietary trading. As a trailblazer in financial market
                forecasting and trading, miners and users of Prop Net&apos;s
                outputs will experience the following benefits:
              </Text>
            </Box>

            <Box mb="xl">
              <Text mb="md" fw={700}>
                Miners:
              </Text>
              <List withPadding>
                <List.Item>
                  <Text>
                    <Text fw={700} component="span">
                      The World&apos;s Largest Incentivized Mining Pool for
                      Trading Signals:
                    </Text>{" "}
                    Miners on Prop Net are graded and subsequently rewarded with
                    $TAO for their contributions to the network, incentivizing a
                    virtuous cycle of innovation. Currently, miners are
                    receiving an average of $xxx,xxx in incentives per day.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text fw={700} component="span">
                      Diverse Trading Strategies:
                    </Text>{" "}
                    On Prop Net, we empower miners to contribute their best
                    trading outputs. Miners have the ability to trade a variety
                    of financial markets: by-hand using our trading dashboard,
                    utilizing their own algorithms, or modifying the open-source
                    modeling created by Taoshi.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text fw={700} component="span">
                      Rapid Payouts:
                    </Text>{" "}
                    In the proprietary trading industry, traditional firms
                    require traders to pass rigorous challenges, oftentimes with
                    two phases. On Prop Net, miners can begin receiving their
                    incentives within X hours after they begin contributing
                    their trade signals.
                  </Text>
                </List.Item>
              </List>
            </Box>

            <Box mb="xl">
              <Text mb="md" fw={700}>
                Signal Users:
              </Text>
              <List withPadding>
                <List.Item>
                  <Text>
                    <Text fw={700} component="span">
                      Access to Highly Performant Trading Signals:
                    </Text>{" "}
                    By purchasing Prop Net&apos;s outputs, traders gain access
                    to institutional-grade insights, leveling the playing field
                    and enabling them to make informed decisions akin to
                    seasoned professionals. Institutions can leverage the
                    collective intelligence of a vast network to complement
                    their existing strategies, reduce research overheads, and
                    enhance portfolio performance.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text fw={700} component="span">
                      Diverse Choice of Outputs:
                    </Text>{" "}
                    On Taoshi&apos;s Request Network, users interested in Prop
                    Net&apos;s outputs have a wide selection to choose from.
                    Client can tailor their purchases to specific miners and
                    financial markets, allowing users to pay for exactly what
                    they want to receive.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text fw={700} component="span">
                      Transparent, Easy-to-Use Marketplace:
                    </Text>{" "}
                    The Prop Net marketplace operates with full transparency,
                    where the quality and performance of trading signals are
                    openly available, fostering trust and reliability. Payments
                    for signals are easy; simply input a credit/debit card, and
                    pay on a per request basis.
                  </Text>
                </List.Item>
              </List>
            </Box>
          </Box>

          <Box mb={75}>
            <Text fw="bold" mb="sm">
              Get Started: Mining on Prop Net
            </Text>
            <Text>
              Ready to start contributing your trades to Prop Net? Discover how
              to begin your journey as a miner [insert our educational resources
              for PN, etc].
            </Text>
          </Box>

          <Box mb={75}>
            <Text fw="bold" mb="sm">
              Interested in Purchasing Prop Net&apos;s Trading Outputs?
            </Text>
            <Text mb="sm">
              Retail traders and institutional clients alike will find Prop
              Net&apos;s outputs to be of exceptional value. With Prop Net,
              every trader and institution has the opportunity to harness the
              potential of AI to optimize their trading outcomes.
            </Text>
            <Text>
              Retail traders and institutional clients alike will find Prop
              Net&apos;s outputs to be of exceptional value. With Prop Net,
              every trader and institution has the opportunity to harness the
              potential of AI to optimize their trading outcomes.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Center my="xl">
        <Divider variant="dashed" w="50%" bg="black" />
      </Center>
      <Hubspot />
    </Box>
  );
}
