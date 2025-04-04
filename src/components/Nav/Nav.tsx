"use client";

import { useState } from "react";
import { Box, Anchor, Menu, Button, rem, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconMail,
  IconBrandTwitter,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconChevronDown,
  IconChevronUp,
  IconBrandGithub,
  IconDashboard,
  IconGraph,
  IconHandLoveYou,
  IconArticle,
  IconBriefcase2
} from "@tabler/icons-react";
import { usePlausible } from "next-plausible";
import NextImage from "next/image";
import rnLogo from "@/assets/rn/logo.svg";

export const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const plausible = usePlausible();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box component="nav">
      {isMobile ? (
        <Group justify="flex-end">
          <Menu
            width={200}
            position="bottom-end"
            offset={15}
            opened={menuOpened}
            onChange={setMenuOpened}
          >
            <Menu.Target>
              <Button
                variant="light"
                rightSection={
                  menuOpened ? (
                    <IconChevronUp size={14} />
                  ) : (
                    <IconChevronDown size={14} />
                  )
                }
              >
                Menu
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                onClick={() => sendEvent("trader")}
                component="a"
                href="/trader"
                leftSection={
                  <IconBriefcase2 style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Become a Trader
              </Menu.Item>
              <Menu.Item
                component="a"
                href="/theta"
                leftSection={
                  <Image
                    component={NextImage}
                    w={rem(8)}
                    h="auto"
                    fit="contain"
                    src={rnLogo}
                    alt="Hero Image"
                  />
                }
              >
                Theta
              </Menu.Item>
              <Menu.Item
                onClick={() => sendEvent("ptn")}
                component="a"
                href="/ptn"
                leftSection={
                  <IconGraph style={{ width: rem(14), height: rem(14) }} />
                }
              >
                PTN
              </Menu.Item>
              <Menu.Item
                onClick={() => sendEvent("dashboard")}
                component="a"
                href="https://dashboard.taoshi.io"
                leftSection={
                  <IconDashboard style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Dashboard
              </Menu.Item>

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

              <Menu.Divider variant="dashed" />
              
              <Menu.Item
                onClick={() => sendEvent("request-network")}
                component="a"
                href="https://request.taoshi.io/"
                leftSection={
                  <IconDashboard style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Request Network
              </Menu.Item>

              <Menu.Item
                onClick={() => sendEvent("contact")}
                component="a"
                href="mailto:support@taoshi.io"
                style={{
                  "&:hover": {
                    background: "red",
                  },
                }}
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
                href="https://www.linkedin.com/company/taoshiio/"
                leftSection={
                  <IconBrandLinkedin
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }
              >
                LinkedIn
              </Menu.Item>
              <Menu.Item
                onClick={() => sendEvent("newsroom")}
                component="a"
                href="/newsroom/"
                leftSection={
                  <IconArticle style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Newsroom
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      ) : (
        <Group align="center" gap="xl">
          <Anchor
            size="sm"
            onClick={() => sendEvent("trader")}
            href='/trader'
            c="black"
          >
            Become a Trader
          </Anchor>
          <Anchor
            size="sm"
            href="/theta"
            c="black"
          >
            Theta
          </Anchor>
          <Anchor
            size="sm"
            onClick={() => sendEvent("ptn")}
            href="/ptn"
            c="black"
          >
            PTN
          </Anchor>
          <Anchor
            size="sm"
            onClick={() => sendEvent("dashboard")}
            href="https://dashboard.taoshi.io"
            c="black"
          >
            Dashboard
          </Anchor>

          <Menu
            width={200}
            position="bottom-end"
            offset={15}
            opened={menuOpened}
            onChange={setMenuOpened}
          >
            <Menu.Target>
              <Button
                variant="light"
                rightSection={
                  menuOpened ? (
                    <IconChevronUp size={14} />
                  ) : (
                    <IconChevronDown size={14} />
                  )
                }
              >
                More
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                onClick={() => sendEvent("request-network")}
                component="a"
                href="https://request.taoshi.io/"
                leftSection={
                  <IconDashboard style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Request Network
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
                href="https://www.linkedin.com/company/taoshiio/"
                leftSection={
                  <IconBrandLinkedin
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }
              >
                LinkedIn
              </Menu.Item>
              <Menu.Item
                onClick={() => sendEvent("github")}
                component="a"
                href="https://github.com/taoshidev/proprietary-trading-network"
                leftSection={
                  <IconBrandGithub style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Github
              </Menu.Item>
              <Menu.Item
                onClick={() => sendEvent("newsroom")}
                component="a"
                href="/newsroom"
                leftSection={
                  <IconArticle style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Newsroom
              </Menu.Item>

              <Menu.Item
                onClick={() => sendEvent("jobs")}
                component="a"
                href="https://www.linkedin.com/company/taoshiio/jobs/"
                target="_blank"
                leftSection={
                  <IconBriefcase2 style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Jobs
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      )}
    </Box>
  );
};
