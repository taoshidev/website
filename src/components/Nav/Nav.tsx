"use client";

import { Box, Menu, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconMail,
  IconBrandTwitter,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBolt,
  IconBrandGithub,
  IconGraph,
  IconHandLoveYou,
  IconQuestionMark,
  IconChartAreaLine,
} from "@tabler/icons-react";
import { usePlausible } from "next-plausible";

export const Nav = () => {
  const [opened, { toggle }] = useDisclosure();

  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box component="nav">
      <Menu width={200}>
        <Menu.Target>
            <Burger size="sm" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            onClick={() => sendEvent("ptn")}
            component="a"
            href="https://github.com/taoshidev/proprietary-trading-network"
            leftSection={
              <IconChartAreaLine style={{ width: rem(14), height: rem(14) }} />
            }
          >
            PTN
          </Menu.Item>
          <Menu.Item
            onClick={() => sendEvent("request-network")}
            component="a"
            href="https://request.taoshi.io/"
            leftSection={
              <IconBolt style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Request Network
          </Menu.Item>
          <Menu.Item
            onClick={() => sendEvent("dashboard")}
            component="a"
            href="https://dashboard.taoshi.io"
            leftSection={
              <IconGraph style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            onClick={() => sendEvent("faq")}
            component="a"
            href="/faw"
            leftSection={
              <IconQuestionMark
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            FAQ
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item
            onClick={() => sendEvent("github")}
            component="a"
            href="https://github.com/taoshidev/proprietary-trading-network"
            leftSection={
              <IconBrandGithub
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            GitHub
          </Menu.Item>

          <Menu.Item
            onClick={() => sendEvent("contact")}
            component="a"
            href="mailto:support@taoshi.io"
            leftSection={
              <IconMail style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Contact
          </Menu.Item>

          <Menu.Item
            onClick={() => sendEvent("partners")}
            component="a"
            href="/partners"
            leftSection={
              <IconHandLoveYou
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            Partners
          </Menu.Item>

          <Menu.Item
            onClick={() => sendEvent("twitter")}
            component="a"
            href="https://twitter.com/taoshiio"
            leftSection={
              <IconBrandTwitter
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            Twitter
          </Menu.Item>
          <Menu.Item
            onClick={() => sendEvent("discord")}
            component="a"
            href="https://discord.gg/MKtKVYnCDh"
            leftSection={
              <IconBrandDiscord
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            Discord
          </Menu.Item>
          <Menu.Item
            onClick={() => sendEvent("linkedin")}
            component="a"
            href="https://www.linkedin.com/company/taoshi/"
            leftSection={
              <IconBrandLinkedin
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            LinkedIn
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};
