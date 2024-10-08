"use client";

import { useEffect, useState } from "react";
import {
  Anchor,
  Button,
  Box,
  Container,
  Center,
  Divider,
  Group,
  Title,
  Text,
} from "@mantine/core";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { isEmpty } from "lodash";
import { IconBrandX, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Page() {
  const [url, setUrl] = useState("");

  const title =
    "Taoshi to Showcase World's First Decentralized and Fair Proprietary Trading Challenge, Built on Bittensor, at Permissionless III";

  useEffect(() => {
    const _url = window.location.href;

    setUrl(_url);
  }, []);

  return (
    <Container maw="1000px" my="100px">
      <Box>
        <Group mb="xl">
          <div>October 8, 2024</div>
          <Divider orientation="vertical" />
          <div>Press Release </div>
        </Group>
        <Text size="34px" fw={900} mb="xl">
          {title}
        </Text>
        {!isEmpty(url) && (
          <Group gap="xl">
            <Button component={TwitterShareButton} url={url} title={title}>
              <IconBrandX size={20} />
            </Button>
            <Button component={LinkedinShareButton} url={url} title={title}>
              <IconBrandLinkedin size={20} />
            </Button>
            <Button component={EmailShareButton} url={url} subject={title}>
              <IconMail size={20} />
            </Button>
          </Group>
        )}
      </Box>
      <Divider mt="xl" mb="60px" />
      <Box mb="xl">
        <Text fw="bold" tt="uppercase" mb="xl">
          For immediate release
        </Text>
        <Text mb="lg">
          <Text fw="bold" component="span">
            SAN FRANCISCO, October 8, 2024 –{" "}
          </Text>
          Taoshi, a forefront innovator in decentralized finance, will showcase
          its Proprietary Trading Network (PTN) at the upcoming Permissionless
          III conference in Salt Lake City, Utah, from October 9 to 11, 2024.
          Exhibiting at{" "}
          <Text fw="bold" component="span">
            Booth #1433
          </Text>
          , Taoshi’s Manager of Research and Development, Thomas Dougherty, PhD,
          will be present to provide insights into the company’s breakthrough
          tool.
        </Text>
        <Text mb="lg">
          PTN is the world&apos;s first fair, decentralized proprietary trading
          challenge. Built on Bittensor, PTN allows traders to compete
          transparently and earn significantly more than they would with
          traditional proprietary firms, incentivizing some of the world’s best
          traders to provide actionable trading insights.
        </Text>
        <Text mb="lg">
          Taoshi’s PTN sets itself apart from most traditional proprietary
          trading firms, whose revenue comes from charging entry fees to
          traders. “When a disproportionate reliance is placed on the entry
          fees, there is little motivation to ensure long-term success for
          traders. Ironically, existing profit-sharing models are incentivized
          by traders failing their challenge period. With PTN, we want to change
          this,” said Dougherty.
        </Text>
        <Text mb="lg">
          Taoshi&apos;s mission is to disrupt financial market trading by
          democratizing access to sophisticated and ever-evolving trading
          strategies. Taoshi&apos;s PTN is leading the way in innovation through
          its decentralized AI technology that delivers exceptional advantages
          for traders.
        </Text>
        <Center my="xl">
          <Text fw="bold" tt="uppercase">
            Ends
          </Text>
        </Center>
        <Text fw="bold" mb="xs">
          About Taoshi:
        </Text>
        <Text mb="lg">
          Founded in 2023, Taoshi, Inc. is a software company that creates
          blockchain subnetworks built on Bittensor to revolutionize financial
          market trading. Taoshi is a trusted leader in the crypto space,
          celebrated for its innovative solutions and commitment to community
          impact. Explore how Taoshi is shaping the future of technology at{" "}
          <Anchor href="taoshi.io" target="_blank">
            www.taoshi.io
          </Anchor>
          .
        </Text>
        <Text fw="bold" mb="xs">
          About Thomas Dougherty, PhD:
        </Text>
        <Text mb="lg">
          Thomas Dougherty, PhD, is the Manager of Research & Development at
          Taoshi, where he applies his extensive expertise in machine learning
          and computer vision to advance financial technology innovation. With a
          doctorate from Stanford University, he oversees the research and
          development division, focusing on creating sophisticated trading
          strategies that balance predictability, risk exposure, and returns
          while addressing statistical instabilities.
        </Text>
        <Text mb="lg">
          At Taoshi, Thomas is the primary architect of the SN8 incentive
          mechanism, a cornerstone of the company`&apos;s Proprietary Trading
          Network (PTN). He spearheaded the development of SN8`&apos;s scoring
          system, which evaluates traders through a comprehensive approach that
          includes risk-adjusted returns, Sharpe ratio, and Omega ratio.
        </Text>
        <Text fw="bold" mb="xs">
          About Permissionless:
        </Text>
        <Text mb="lg">
          Permissionless is a conference for founders, application developers,
          investors, policymakers, and users. Permissionless III will gather the
          most influential minds in crypto for three days of networking,
          engaging content, and live conversations.
        </Text>
      </Box>
      <Box>
        <Text fw="bold" tt="uppercase">
          Media contact
        </Text>
        <Text>Mairi Morrison</Text>
        <Anchor href="mailto:mairi@prlab.co" target="_blank">
          mairi@prlab.co
        </Anchor>
        <br />
        <Anchor href="tel:+15127314977" target="_blank">
          +15127314977
        </Anchor>
      </Box>
    </Container>
  );
}
