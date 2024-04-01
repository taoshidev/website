"use client";

import NextImage from "next/image";

import {
  Box,
  Group,
  Title,
  Image,
  Anchor,
  Stack,
  ActionIcon,
  Text,
  Badge,
} from "@mantine/core";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <Group align="flex-start" justify="space-between" gap="xl" h="100%" p="lg">
      <Stack justify="space-between" mr="xl">
        <Group mb="xl">
          <Image
            component={NextImage}
            src={logo}
            width={50}
            height={50}
            alt="taoshi logo"
          />

          <Anchor href="/">
            <Title order={3} c="black">
              taoshi
            </Title>
          </Anchor>
        </Group>
        <Group grow>
          <ActionIcon
            component="a"
            href="https://twitter.com/taoshiio"
            target="_blank"
            variant="light"
            aria-label="Settings"
          >
            <IconBrandTwitter
              style={{ width: "70%", height: "70%" }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://twitter.com/taoshiio"
            target="_blank"
            variant="light"
            aria-label="Settings"
          >
            <IconBrandDiscord
              style={{ width: "70%", height: "70%" }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://twitter.com/taoshiio"
            target="_blank"
            variant="light"
            aria-label="Settings"
          >
            <IconBrandLinkedin
              style={{ width: "70%", height: "70%" }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/company/taoshi/"
            target="_blank"
            variant="light"
            aria-label="Settings"
          >
            <IconBrandGithub
              style={{ width: "70%", height: "70%" }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Stack>
      <Group align="flex-start" gap="xl">
        <Box>
          <Text fw={700} mb="xs">
            Product
          </Text>
          <Stack gap="xs">
            <Anchor size="sm" href="/ptn" c="black">
              Proprietary Trading Network
            </Anchor>
            <Anchor
              size="sm"
              href="https://huggingface.co/Taoshi"
              target="_blank"
              c="black"
            >
              Models
            </Anchor>
            <Anchor
              size="sm"
              href="https://dashboard.taoshi.io/"
              c="black"
              target="_blank"
            >
              Dashboard
            </Anchor>
            <Anchor size="sm" href="/faq" c="black">
              FAQ
            </Anchor>
          </Stack>
        </Box>

        <Box>
          <Text fw={700} mb="xs">
            Company
          </Text>
          <Stack gap="xs">
            <Anchor size="sm" href="/partners" c="black">
              Partners
            </Anchor>
            <Anchor size="sm" href="/#team" c="black">
              Our Team
            </Anchor>
            <Anchor size="sm" href="mailto:support@taoshi.io" c="black">
              Contact Us
            </Anchor>
            <Anchor size="sm" href="/partners" c="black">
              Partners
            </Anchor>
            {/* <Anchor size="sm" href="/careers" c="black">
              Careers <Badge size="xs">We&apos;re hiring!</Badge>
            </Anchor> */}
          </Stack>
        </Box>
      </Group>
    </Group>
  );
};
