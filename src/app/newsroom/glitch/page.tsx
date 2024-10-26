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
  List,
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
    "Taoshi Launches New Subsidiary, Glitch: A Revolutionary Wealth Generating Platform with AI-Powered Trading Strategies for the Masses";

  useEffect(() => {
    const _url = window.location.href;

    setUrl(_url);
  }, []);

  return (
    <Container maw="1000px" my="100px">
      <Box>
        <Group mb="xl">
          <div>October 25, 2024</div>
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
            SAN FRANCISCO, October 25, 2024 –{" "}
          </Text>
          Taoshi, a leader in decentralized finance, today announced the launch
          of Glitch, a first-of-its-kind SaaS platform poised to revolutionize
          financial trading with advanced AI-based strategies that provide
          everyday individuals with automated wealth generation opportunities.
          Designed for ease of use, Glitch allows users to integrate trading
          strategies into their exchange and brokerage accounts with just a few
          clicks while maintaining full control over their funds in a secure,
          non-custodial environment.
        </Text>
        <Text mb="lg">
          &quot;Glitch aims to disrupt traditional financial market trading by
          cultivating a more inclusive and innovative ecosystem,&quot; said
          Arrash Yasavolian, CEO and Founder of Taoshi. &quot;Our goal is to
          create significant wealth opportunities for as many people as
          possible. We&quot;re dedicated to advancing this vision and making a
          positive impact on a broad scale.&quot;
        </Text>
        <Text fw="bold" mb="xs">
          Glitch Roadmap: From Alpha to Full Launch
        </Text>
        <Text mb="lg">
          Glitch&apos;s platform is currently in a closed alpha, providing a
          select group of users with initial access for testing. This phase
          focuses on gathering feedback on user experience, functionality, and
          performance. Following the alpha, a beta release is planned for early
          Q1 2025, expanding access to early adopters and partnered wealth
          managers. Improvements based on user feedback will ensure stability as
          more waitlisted users are onboarded, with a full launch anticipated by
          the end of Q1 2025.
        </Text>
        <Text fw="bold" mb="xs">
          What Sets Glitch Apart
        </Text>
        <Text mb="lg">
          Glitch distinguishes itself by offering sophisticated AI-based trading
          strategies that require no extensive user knowledge or experience in
          trading. As a non-custodial platform, it allows users to maintain full
          control over their funds while providing a user-friendly interface for
          seamless integration into existing brokerage and exchange accounts.
        </Text>
        <Text mb="lg">
          Glitch&apos;s mission is to democratize wealth generation by making
          institutional-grade trading strategies accessible to the masses. The
          platform addresses the lack of high-performing automated trading
          solutions for individual investors by offering advanced AI-based
          strategies that are even more sophisticated than those typically
          available to institutional investors. Its plug-and-play interface
          simplifies automation, enabling users to implement these strategies
          without prior trading knowledge.
        </Text>
        <Text fw="bold" mb="lg">
          Technological Innovations
        </Text>
        <List mb="xl">
          <List.Item>
            <Text fw="bold" component="span">
              Sophisticated AI-Based Trading Models:{" "}
            </Text>
            <Text component="span">
              Deliver powerful trading strategies that optimize risk-adjusted
              returns.
            </Text>
          </List.Item>
          <List.Item>
            <Text fw="bold" component="span">
              Intelligent Automated Trading:{" "}
            </Text>
            <Text component="span">
              Enable efficient order execution, even with large trade sizes.
            </Text>
          </List.Item>
          <List.Item>
            <Text fw="bold" component="span">
              Enhanced Security Measures:{" "}
            </Text>
            <Text component="span">
              Trade-only access to accounts and a non-custodial model ensuring
              users maintain control over their funds.
            </Text>
          </List.Item>
          <List.Item>
            <Text fw="bold" component="span">
              Compliance Initiatives:{" "}
            </Text>
            <Text component="span">
              Pursuing ISO 27001 and SOC 2 compliance to ensure robust data
              protection and privacy standards.
            </Text>
          </List.Item>
        </List>

        <Text fw="bold" mb="xs">
          Target Audience
        </Text>
        <Text mb="lg">
          Glitch caters to retail investors seeking advanced trading strategies,
          wealth managers looking to enhance their client offerings,
          institutional investors needing efficient automated trading systems,
          and brokerages and exchanges aiming to integrate cutting-edge
          solutions into their services. Glitch&apos;s long-term vision is to
          become the premier platform for automated trading, democratizing
          access to advanced AI-driven trading strategies for a global audience.
        </Text>
        <Text fw="bold" mb="xs">
          About Taoshi:
        </Text>
        <Text mb="lg">
          Founded in 2023, Taoshi, Inc. is a software company that creates
          blockchain subnetworks built on Bittensor to revolutionize financial
          market trading. Taoshi is a trusted leader in the crypto space,
          celebrated for its innovative solutions and commitment to community
          impact. Explore how Taoshi is shaping the future of technology at{" "}
          <Anchor href="https://www.taoshi.io" target="_blank">
            www.taoshi.io
          </Anchor>
          .
        </Text>
        <Text fw="bold" mb="xs">
          About Glitch:
        </Text>
        <Text mb="lg">
          Founded in 2024 as a subsidiary of Taoshi, Inc., Glitch is a
          first-of-its-kind SaaS platform that leverages advanced AI-based
          trading strategies to offer users automated wealth generation
          opportunities. Designed for ease of use, Glitch empowers everyday
          individuals and institutional investors alike to harness sophisticated
          trading models without the need for extensive trading experience. By
          democratizing access to these advanced trading strategies through
          innovative AI-driven technology, Glitch is redefining the trading
          landscape. Discover more at{" "}
          <Anchor href="https://www.glitch.financial" target="_blank">
            www.glitch.financial
          </Anchor>
        </Text>
        <Text>SOURCE Taoshi, Inc</Text>
      </Box>
    </Container>
  );
}
