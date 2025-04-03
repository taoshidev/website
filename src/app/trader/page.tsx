"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import {
  Box,
  Button,
  Container,
  Center,
  Title,
  Group,
  Text,
  Divider,
  Flex,
  List,
  SimpleGrid,
  Card,
  Image,
} from "@mantine/core";
import NextImage from "next/image";

import minerDash from "/public/miner-dash.png";

export default function Page() {
  return (
    <Box>
      <Box
        style={{
          backgroundPosition: "center bottom",
          borderTop: "3px solid #E35F25",
        }}
      >
        <Container
          maw="1000px"
          w="100%"
          py={{ base: 50, sm: 75 }}
          px={{ sm: 20 }}
        >
          <Box>
            <Title c="black" ta="center" mb="md">
              Compete. Optimize. Earn.
            </Title>
          </Box>

          <Divider w="50px" mx="auto" mt={{ base: "25px", md: "38px" }} />
        </Container>
      </Box>

      <Box mb={{ base: "50px", sm: "100px" }}>
        <Container maw="1000px" w="100%">
          <Flex
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
          >
            <Box flex="1">
              <Box mb={{ base: "25px", sm: "38px" }}>
                <Text mb="md">
                  Are you ready to join the future of trading? Taoshi&apos;s
                  Proprietary Trading Network (PTN) is the world&apos;s first
                  decentralized proprietary trading challenge, built on
                  Bittensor. We empower the brightest minds in quantitative
                  trading to deploy, compete, and profit from their advanced
                  trading models.
                </Text>
                <Text>
                  There are two ways to trade with Taoshi: compete in our
                  $40,000 Challenge for a chance at a contractor role, or start
                  trading on PTN today for a share of over *$30 million in
                  annual rewards!
                </Text>
              </Box>

              <Center>
                <Group gap="md">
                  <Button
                    component={Link}
                    href="https://share.hsforms.com/1dk2NSACxQ5esOnY4wyho0Qqsppf"
                    onClick={() =>
                      sendGAEvent("event", "buttonClicked", {
                        value: "Apply to $40k Challenge",
                      })
                    }
                  >
                    Apply to $40k Challenge
                  </Button>
                  <Button
                    component={Link}
                    href="https://github.com/taoshidev/proprietary-trading-network/blob/main/docs/miner.md"
                    onClick={() =>
                      sendGAEvent("event", "buttonClicked", {
                        value: "Start Trading on PTN",
                      })
                    }
                  >
                    Start Trading on PTN
                  </Button>
                </Group>
              </Center>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box mb={{ base: "50px", sm: "100px" }}>
        <Container maw="1000px" w="100%" px={{ sm: 20 }}>
          <Flex
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
          >
            <Box flex="1">
              <Title order={3} mb="md">
                Why Compete on Taoshi&apos;s PTN?
              </Title>

              <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} mb="md">
                <Card withBorder>
                  <Box h={60} display="flex">
                    <Text fw="bold">Decentralized & Fair Ecosystem:</Text>
                  </Box>
                  <Text size="sm">
                    Our traders compete against each other for rewards and are
                    graded fairly on their risk-adjusted returns.
                  </Text>
                </Card>
                <Card withBorder>
                  <Box h={60} display="flex">
                    <Text fw="bold">Diverse Asset Classes:</Text>
                  </Box>
                  <Text size="sm">
                    Traders operate on a variety of highly liquid assets across
                    crypto, equities, commodities, and forex, creating ample
                    opportunity to trade with success.
                  </Text>
                </Card>
                <Card withBorder>
                  <Box h={60} display="flex">
                    <Text fw="bold">Advanced Scoring Analytics:</Text>
                  </Box>
                  <Text size="sm">
                    We leverage a suite of risk-adjusted return metrics to
                    determine the quality of outputs from traders and ensure
                    risk is appropriately managed.
                  </Text>
                </Card>
                <Card withBorder>
                  <Box h={60} display="flex">
                    <Text fw="bold">Low Barrier to Entry:</Text>
                  </Box>
                  <Text size="sm">
                    Simply register with Bittensor&apos;s native token, $TAO, to
                    trade within our open-source ecosystem.
                  </Text>
                </Card>
              </SimpleGrid>
              <Box>
                <Card withBorder>
                  <Image
                    mb="md"
                    alt="Taoshi"
                    w={960}
                    h="auto"
                    fit="contain"
                    component={NextImage}
                    src={minerDash}
                  />
                  <Center>
                    <Text size="xs" ta="center">
                      An example of a miner&apos;s dashboard, where traders can
                      view their rank and performance across various metrics.
                    </Text>
                  </Center>
                </Card>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box mb={{ base: "50px", sm: "100px" }}>
        <Container maw="1000px" w="100%" px={{ sm: 20 }}>
          <Box mb="xl">
            <Box>
              <Title order={3} mb="md">
                Pass our Trading Challenge for Contractors & Earn $40,000 in
                Rewards
              </Title>
              <Text mb="md">
                For a limited time, we&apos;re inviting the best quant research
                teams, ML experts, and traders to join our competition, with a
                chance at a contractor role at Taoshi at stake for those who
                successfully pass our 60-day challenge.
              </Text>
              <Text mb="md">
                But that&apos;s just the beginning. Once you pass our challenge,
                you&apos;ll gain access to one of the world&apos;s largest
                reward pools for trading signals in the world with over millions
                in rewards at stake. Additionally, you&apos;ll have the
                potential to receive ongoing payouts and future grants to scale
                your strategies.
              </Text>
              <Text>
                Do you think you have what it takes? Complete the form to
                express your interest and a member of our team will reach out to
                you as soon as possible.
              </Text>
            </Box>
          </Box>

          <Center>
            <Group gap="md">
              <Button
                component={Link}
                href="https://share.hsforms.com/1dk2NSACxQ5esOnY4wyho0Qqsppf"
                onClick={() =>
                  sendGAEvent("event", "buttonClicked", {
                    value: "Apply to $40k Challenge",
                  })
                }
              >
                Apply to $40k Challenge
              </Button>
            </Group>
          </Center>
        </Container>
      </Box>

      <Box mb={{ base: "50px", sm: "100px" }}>
        <Container maw="1000px" w="100%" px={{ sm: 20 }}>
          <Box mb="100px">
            <Box mb="xl">
              <Title order={3} mb="md">
                How It Works
              </Title>
              <Box mb="xl">
                <List withPadding>
                  <List.Item mb="md">
                    <Text>
                      <Text fw={700} component="span">
                        Apply to Become a Trader (Optional):
                      </Text>{" "}
                      Express your interest in the contractor role for a chance
                      at an additional $40,000 in rewards.
                    </Text>
                  </List.Item>
                  <List.Item mb="md">
                    <Text>
                      <Text fw={700} component="span">
                        Join the Network:
                      </Text>{" "}
                      Get started by exploring our open-source repository,
                      joining our Discord, and setting up a miner to submit your
                      trading signals to the network.
                    </Text>
                  </List.Item>
                  <List.Item mb="md">
                    <Text>
                      <Text fw={700} component="span">
                        Deploy Your Model:
                      </Text>{" "}
                      Optimize your ML-based trading strategies and integrate
                      them into PTN.
                    </Text>
                  </List.Item>
                  <List.Item mb="md">
                    <Text>
                      <Text fw={700} component="span">
                        Compete & Perform:
                      </Text>{" "}
                      Meet key performance metrics like Sharpe, Omega, and
                      Sortino ratios.
                    </Text>
                  </List.Item>
                  <List.Item mb="md">
                    <Text>
                      <Text fw={700} component="span">
                        Unlock Rewards:
                      </Text>{" "}
                      Pass the 60-day challenge, and begin competing for a share
                      of more than $30 million* in annual rewards. If you are a
                      qualifying trader from Taoshi&apos;s Trading Challenge,
                      you&apos;ll receive $40,000 in rewards for passing the
                      60-day challenge!
                    </Text>
                  </List.Item>
                </List>
              </Box>
              <Text>
                Ready to start trading? Come compete with the world&apos;s best
                on Taoshi&apos;s Proprietary Trading Network, and take your
                share of over *$30 million in annual rewards!
              </Text>
            </Box>

            <Center>
              <Group gap="md">
                <Button
                  component={Link}
                  href="https://share.hsforms.com/1dk2NSACxQ5esOnY4wyho0Qqsppf"
                  onClick={() =>
                    sendGAEvent("event", "buttonClicked", {
                      value: "Apply to $40k Challenge",
                    })
                  }
                >
                  Apply to $40k Challenge
                </Button>
                <Button
                  component={Link}
                  href="https://github.com/taoshidev/proprietary-trading-network/blob/main/docs/miner.md"
                  onClick={() =>
                    sendGAEvent("event", "buttonClicked", {
                      value: "Start Trading on PTN",
                    })
                  }
                >
                  Start Trading on PTN
                </Button>
              </Group>
            </Center>
          </Box>

          <Text size="xs" ta="center">
            *Annualized rewards are dependent on market factors outside of
            Taoshi&apos;s control and may fluctuate. This value is an estimate
            based on current market factors.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
