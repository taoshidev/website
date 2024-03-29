"use client";

import NextImage from "next/image";
import {
  Box,
  Grid,
  Container,
  Card,
  Title,
  Text,
  Image,
  Stack,
} from "@mantine/core";

import { Hero } from "@/components/Hero";

import glassnode from "@/assets/partners/glassnode.svg";
import lunarcrush from "@/assets/partners/lunarcrush.svg";
import uphold from "@/assets/partners/uphold.jpg";
import timeless from "@/assets/partners/timeless.svg";
import rt21 from "@/assets/partners/roundtable21.png";

export default function Page() {
  return (
    <Box>
      <Container maw="1000px" h="100%">
        <Box mb={200}>
          <Hero copy="Our Esteemed Partners" />
          <Text>
            <Text>
              Welcome to the dedicated space where we celebrate the
              collaborative spirit and shared vision that helps drive our
              success at Taoshi. Our partners are integral to our journey,
              bringing unique strengths, insights, and innovations that enrich
              our offerings and empower our clients. Here, we proudly showcase
              the diverse network of alliances that help us redefine excellence
              in the trading world.
            </Text>
          </Text>
        </Box>
      </Container>
      <Container fluid>
        <Grid>
          <Grid.Col span={4}>
            <Card
              bg="transparent"
              style={{ border: "1px dashed black" }}
              p="lg"
              h="100%"
            >
              <Card.Section p="lg">
                <Box display="inline-block">
                  <Image
                    component={NextImage}
                    fit="contain"
                    h={50}
                    src={rt21}
                    alt="rt21 logo"
                  />
                </Box>
              </Card.Section>
              <Stack justify="space-between" h="100%" gap="lg">
                <Text size="xs">
                  RoundTable21 is a key player in providing infrastructure
                  support and fostering open-source innovation within the
                  Bittensor community. Taoshi is collaborating with RT21 to
                  deliver the groundbreaking Request Network, designed to
                  empower subnet owners by streamlining interactions between
                  validators and clients. This initiative will introduce a
                  marketplace dynamic to the Bittensor ecosystem, enabling
                  seamless data transactions using stablecoins. Additionally, we
                  commend RoundTable21 for their exceptional validator program
                  and encourage our community to explore and support our
                  open-source endeavors by delegating $TAO to RoundTable21.{" "}
                </Text>
                <Title order={5}>RoundTable21</Title>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              bg="transparent"
              style={{ border: "1px dashed black" }}
              p="lg"
              h="100%"
            >
              <Card.Section p="lg">
                <Box display="inline-block">
                  <Image
                    component={NextImage}
                    fit="contain"
                    h={50}
                    src={timeless}
                    alt="timeless logo"
                  />
                </Box>
              </Card.Section>
              <Stack justify="space-between" h="100%" gap="lg">
                <Text size="xs">
                  Timeless provides services designed to maximize your trading
                  potential, directly from Taoshi’s Proprietary Trading Network.
                  This includes a signal service, where you&apos;ll receive
                  actionable trading signals directly from PTN, empowering you
                  to make informed trades manually. Alternatively, Timeless is
                  working to launch an Auto Trading Service, where they will
                  seamlessly configure your accounts for automated trading. To
                  access PTN’s signals, please visit Timeless&apos; Twitter or
                  complete their AT Interest Form to be prepared for the launch
                  of auto trading.
                </Text>
                <Title order={5}>Timeless</Title>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              bg="transparent"
              style={{ border: "1px dashed black" }}
              p="lg"
              h="100%"
            >
              <Card.Section p="lg">
                <Box display="inline-block">
                  <Image
                    component={NextImage}
                    fit="contain"
                    h={50}
                    src={lunarcrush}
                    alt="lunarcrush logo"
                  />
                </Box>
              </Card.Section>
              <Stack justify="space-between" h="100%" gap="lg">
                <Text size="xs">
                  LunarCrush allows our miners to utilize social data, trends,
                  analytics, and sentiment analysis to help train their models.
                  Additionally, LunarCrush is providing a 30% discount to all
                  miners who utilize their data. To learn more and to purchase
                  their data, please visit this link.
                </Text>
                <Title order={5}>LunarCrush</Title>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              bg="transparent"
              style={{ border: "1px dashed black" }}
              p="lg"
              h="100%"
            >
              <Card.Section p="lg">
                <Box display="inline-block">
                  <Image
                    component={NextImage}
                    h={50}
                    fit="contain"
                    src={uphold}
                    alt="uphold logo"
                  />
                </Box>
              </Card.Section>
              <Stack justify="space-between" h="100%">
                <Text size="xs">
                  Uphold will be an integral part of Taoshi’s Request Network,
                  as they’ll be fulfilling client orders by converting
                  stablecoins to $TAO. Clients and users will pay validators in
                  stablecoins through the Request Network, and validators will
                  automatically be able to convert payments to $TAO through our
                  partnership with Uphold.
                </Text>
                <Title order={5}>Uphold Institutional</Title>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              bg="transparent"
              style={{ border: "1px dashed black" }}
              p="lg"
              h="100%"
            >
              <Card.Section p="lg">
                <Box display="inline-block">
                  <Image
                    component={NextImage}
                    h={35}
                    w="auto"
                    fit="contain"
                    src={glassnode}
                    alt="glassnode logo"
                  />
                </Box>
              </Card.Section>
              <Stack justify="space-between" h="100%">
                <Text size="xs">
                  Glassnode is a premier provider of in-depth futures and
                  on-chain Bitcoin data, and greatly enhances the resources
                  available to our community. If you’re interested in reviewing
                  historical data they’ve provided, featuring a selection of
                  their indicators with a 1-year lookback, please visit this
                  link; this dataset represents just a glimpse of
                  Glassnode&apos;s extensive metrics library. Additionally,
                  Glassnode is generously offering a discounted rate to Taoshi
                  miners—simply visit this link and mention your affiliation
                  with us to utilize this offer.
                </Text>
                <Title order={5}>Glassnode</Title>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              bg="transparent"
              style={{ border: "1px dashed black" }}
              p="lg"
              h="100%"
            >
              <Stack justify="space-between" h="100%">
                <Text size="xs">
                  Dale is an advanced trading bot which is enhanced by robust
                  trading signals from our Proprietary Trading Network on Subnet
                  8. In the coming weeks, Dale will be available for copy
                  trading Bitcoin on ByBit, with their teams fine-tuning the
                  strategy using live data from the PTN. Additionally, they’re
                  planning to expand to more coins and trading platforms,
                  broadening the horizons for traders. Stay tuned to Dale’s
                  Twitter to be in the loop when copy trading is launched!
                </Text>
                <Title order={5}>TradeWithDale</Title>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              bg="transparent"
              style={{ border: "1px dashed black" }}
              p="lg"
              h="100%"
            >
              <Stack justify="space-between" h="100%">
                <Text size="xs">
                  Taopey Vaults is an on-chain trading experiment powered by
                  trading signals of Taoshi’s Proprietary Trading Network, and
                  the permissionless on-chain copytrading of Perpy Finance. The
                  experiment aims to evaluate the best signals generated by PTN
                  in real-time. To learn more, please visit Taopey Vault’s
                  website or Twitter.
                </Text>
                <Title order={5}>Taopey Vaults</Title>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      <Container maw="1000px" h="100%">
        <Box my={200} ta="center">
          <Title mb="xl" order={3}>
            Interested in a Partnership with Taoshi?
          </Title>
          <Text>
            Welcome to the dedicated space where we celebrate the collaborative
            spirit and shared vision that helps drive our success at Taoshi. Our
            partners are integral to our journey, bringing unique strengths,
            insights, and innovations that enrich our offerings and empower our
            clients. Here, we proudly showcase the diverse network of alliances
            that help us redefine excellence in the trading world.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
