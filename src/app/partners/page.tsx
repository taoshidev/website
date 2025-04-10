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
  Group,
  Anchor,
  ActionIcon,
  Button,
} from "@mantine/core";
import { IconBrandX } from "@tabler/icons-react";

import { Hero } from "@/components/Hero";

import partnersLogo from "@/assets/partners.svg";
import glassnode from "@/assets/partners/glassnode.svg";
import lunarcrush from "@/assets/partners/lunarcrush.svg";
import uphold from "@/assets/partners/uphold.jpg";
import timeless from "@/assets/partners/timeless.svg";
import rt21 from "@/assets/partners/roundtable21.png";
import taopay from "@/assets/partners/taopay.png";
import taobot from "@/assets/partners/taobot-labs.jpg";
import dale from "@/assets/partners/dale.png";

const partners = [
  {
    label: "RoundTable21",
    website: "https://www.roundtable21.com/",
    twitter: "https://twitter.com/21RoundTable",
    image: rt21,
    description: (
      <Text size="xs">
        RoundTable21 is a key player in providing infrastructure support and
        fostering open-source innovation within the Bittensor community. Taoshi
        is collaborating with RT21 to deliver the groundbreaking Request
        Network, designed to empower subnet owners by streamlining interactions
        between validators and clients. This initiative will introduce a
        marketplace dynamic to the Bittensor ecosystem, enabling seamless data
        transactions using stablecoins.
      </Text>
    ),
  },
  {
    label: "Timeless",
    website: "https://timeless.trading/",
    twitter: "https://twitter.com/Timeless_io",
    image: timeless,
    description: (
      <Text size="xs">
        Timeless provides services designed to maximize your trading potential,
        directly from Taoshi’s Proprietary Trading Network. This includes a
        signal service, where you&apos;ll receive actionable trading signals
        directly from PTN, empowering you to make informed trades manually.
        Alternatively, Timeless is working to launch an Auto Trading Service,
        where they will seamlessly configure your accounts for automated
        trading. To access PTN’s signals, please visit Timeless&apos; Twitter or
        complete their{" "}
        <Anchor
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQ2JwLH9d6MLKKA59jY4CytLlxfR1luwsxwRxsFXRlQe2iIw/viewform"
          target="_blank"
        >
          AT Interest Form
        </Anchor>{" "}
        to be prepared for the launch of auto trading.
      </Text>
    ),
  },
  {
    label: "LunarCrush",
    website: "https://lunarcrush.com/",
    twitter: "https://twitter.com/LunarCrush",
    image: lunarcrush,
    description: (
      <Text size="xs">
        LunarCrush allows our miners to utilize social data, trends, analytics,
        and sentiment analysis to help train their models. Additionally,
        LunarCrush is providing a 30% discount to all miners who utilize their
        data. To learn more and to purchase their data, please visit this{" "}
        <Anchor
          href="https://docs.google.com/document/d/1KmaulB5GZkQ8LO0hJV92HhXKD0DkyVOKxqj42e_9iSE/edit"
          target="_blank"
        >
          link
        </Anchor>
        .
      </Text>
    ),
  },
  {
    label: "Glassnode",
    website: "https://glassnode.com/",
    twitter: "https://twitter.com/glassnode",
    image: glassnode,
    description: (
      <Text size="xs">
        Glassnode, a premier provider of in-depth futures and on-chain Bitcoin
        data, is working with Taoshi to enhance the resources available to our
        community. If you’re interested in reviewing historical data they’ve
        provided, featuring a selection of their indicators with a 1-year
        lookback, please visit this{" "}
        <Anchor
          href="https://drive.google.com/drive/u/0/folders/1r1H9cqgsxR8wRu3MeY3CJPfqxMA2GkEI"
          target="_blank"
        >
          link
        </Anchor>
        ; this dataset represents just a glimpse of Glassnode&apos;s extensive
        metrics library. Additionally, Glassnode is generously offering a
        favorable rate to Taoshi miners—simply visit this{" "}
        <Anchor
          href="https://docs.google.com/document/d/1hmHHjPZB_npZ-UM0Ysd0KX1J1hrFWhq8iSj6YoYQLIo/edit#heading=h.jedax0urx6v3"
          target="_blank"
        >
          link
        </Anchor>{" "}
        and mention your affiliation with us to utilize this offer.
      </Text>
    ),
  },
  {
    label: "Dale",
    website: "https://twitter.com/tradewithdale",
    twitter: "https://twitter.com/tradewithdale",
    image: dale,
    description: (
      <>
        <Text mb="md" size="xs">
          Dale is a decentralized autonomous liquidity engine that provides a
          seamless and secure trading experience for users. Our collaboration
          with Dale will enable users to access a wide range of trading pairs
          and liquidity pools whilst leveraging PTN’s outputs, empowering them
          to make informed decisions and maximize their trading potential.
        </Text>
        <Text size="xs">
          Stay tuned to Dale’s{" "}
          <Anchor href="" target="_blank">
            Twitter
          </Anchor>{" "}
          to be in the loop when copy trading is launched!
        </Text>
      </>
    ),
  },
  {
    label: "TaoBot Labs",
    website: "https://taopeyvaults.xyz/",
    twitter: "https://x.com/TaoBotLabs",
    image: taobot,
    description: (
      <Text size="xs">
        <Anchor href="https://linktr.ee/taobotlabs" target="_blank">
          TaoBot Labs
        </Anchor>{" "}
        is at the forefront of combining decentralized AI and permissionless
        finance to revolutionize algorithmic trading. By leveraging advanced AI
        technology from the Bittensor Network, TaoBot Labs offers a suite of
        cutting-edge tools, including decentralized{" "}
        <Anchor href="http://hypertensorvaults.xyz" target="_blank">
          Hypertensor Vaults
        </Anchor>{" "}
        for automated copy trading, and premium Tensor Pulse Signals for
        real-time trading signals powered by SN8 (PTN). The platform empowers
        users with powerful quant trading signals from Bittensor&apos;s
        decentralized AI network with the transparency and autonomy of
        decentralized finance using Hyperliquid`&apos;s onchain liquidity.
      </Text>
    ),
  },
];

export default function Page() {
  return (
    <Box my="100">
      <Container maw="1000px" h="100%">
        <Box mb={200} ta="center">
          <Hero
            copy="Our Esteemed Partners & Affiliates"
            image={partnersLogo}
          />
          <Text mb="xl">
            Welcome to the dedicated space where we celebrate the collaborative
            spirit and shared vision that helps drive our success at Taoshi. Our
            partners & affiliates are integral to our journey, bringing unique
            strengths, insights, and innovations that enrich our offerings and
            empower our clients. Here, we proudly showcase the diverse network
            of alliances that help us redefine excellence in the trading world.
          </Text>
          <Button component="a" href="mailto:support@taoshi.io" target="_blank">
            Join Us
          </Button>
        </Box>
      </Container>
      <Container fluid>
        <Grid>
          {partners.map((partner) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={partner.label}>
              <Card bg="transparent" p="lg" h="100%">
                <Card.Section p="lg">
                  <Group justify="space-between" align="center">
                    <Box display="inline-block">
                      {partner.image && (
                        <Image
                          component={NextImage}
                          fit="contain"
                          h={50}
                          src={partner.image}
                          alt={`${partner.label} logo`}
                        />
                      )}
                    </Box>
                    <Box>
                      <ActionIcon
                        component="a"
                        href={partner.twitter}
                        variant="subtle"
                        aria-label={`${partner.label} Twitter`}
                        size="lg"
                        color="black"
                      >
                        <IconBrandX stroke={1.5} />
                      </ActionIcon>
                    </Box>
                  </Group>
                </Card.Section>
                <Stack justify="space-between" h="100%">
                  <Title order={5}>
                    <Anchor href={partner.website} target="_blank">
                      {partner.label}
                    </Anchor>
                  </Title>
                  <Box>{partner.description}</Box>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
      <Container maw="1000px" h="100%">
        <Box my={200} ta="center">
          <Title mb="xl" order={3}>
            Interested in a Partnership with Taoshi?
          </Title>
          <Text mb="lg">
            Are you ready to navigate the cutting-edge intersection of
            decentralized AI and trading? Taoshi calls on visionary businesses
            and entrepreneurial spirits to join us as partners. Our
            collaboration will pave the way for delivering PTN&apos;s services
            to your clientele, fostering innovation, and spearheading growth
            within the Bittensor ecosystem. Embrace the opportunity to redefine
            trading with us. If your business is driven to integrate dAI
            solutions and offer unparalleled trading services, connect with us
            at{" "}
            <Anchor href="mailto:support@taoshi.io">support@taoshi.io</Anchor>.
          </Text>
          <Text mb="xl">
            Together, let&apos;s shape the future of decentralized trading.
          </Text>
          <Button component="a" href="mailto:support@taoshi.io" target="_blank">
            Join Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
