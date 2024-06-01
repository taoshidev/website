"use client";

import { useState } from "react";
import { Box, Anchor, Menu, Button, rem, Group } from "@mantine/core";
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
  IconQuestionMark,
} from "@tabler/icons-react";
import { usePlausible } from "next-plausible";

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

            <Menu.Dropdown style={{ border: "1px dashed black" }}>
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
                onClick={() => sendEvent("request-network")}
                component="a"
                href="/request-network"
                leftSection={
                  <IconGraph style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Request Network
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

              <Menu.Divider variant="dashed" />

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
                href="mailto:knicholson@taoshi.io"
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
        </Group>
      ) : (
        <Group align="center" gap="xl">
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
            onClick={() => sendEvent("request-network")}
            href="/request-network"
            c="orange"
          >
            Request Network
          </Anchor>
          <Anchor
            size="sm"
            onClick={() => sendEvent("dashboard")}
            href="https://dashboard.taoshi.io"
            c="black"
          >
            Dashboard
          </Anchor>
          <Anchor
            size="sm"
            onClick={() => sendEvent("faq")}
            href="/faq"
            c="black"
          >
            FAQ
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
                href="mailto:knicholson@taoshi.io"
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
        </Group>
      )}
    </Box>
  );
};
