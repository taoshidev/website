"use client";

import { useState } from "react";
import {
  Box,
  Center,
  Anchor,
  Flex,
  Burger,
  Menu,
  Button,
  rem,
} from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import {
  IconMail,
  IconBrandTwitter,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconChevronDown,
  IconChevronUp,
  IconBrandGithub,
  IconDashboard,
  IconTournament,
  IconNumber8,
  IconSquareNumber8,
} from "@tabler/icons-react";
import { usePlausible } from "next-plausible";

export const Nav = () => {
  const [opened, { toggle }] = useDisclosure();
  const [menuOpened, setMenuOpened] = useState(false);

  const plausible = usePlausible();
  const isMobile = useMediaQuery("(max-width: 400px)");

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box component="nav" flex="1">
      {isMobile ? (
        <Flex justify="flex-end">
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
                onClick={() => sendEvent("subnet")}
                component="a"
                href="/subnet"
                leftSection={
                  <IconSquareNumber8
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }
              >
                Subnet 8
              </Menu.Item>
              <Menu.Item
                onClick={() => sendEvent("competition")}
                component="a"
                href="/competition"
                leftSection={
                  <IconTournament style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Competition
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
                href="https://github.com/taoshidev/time-series-prediction-subnet"
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
        </Flex>
      ) : (
        <Flex align="center">
          <Anchor
            flex="1"
            size="sm"
            ta="center"
            onClick={() => sendEvent("subnet")}
            href="/subnet"
            c="black"
          >
            Subnet 8
          </Anchor>
          <Anchor
            flex="1"
            size="sm"
            ta="center"
            onClick={() => sendEvent("competition")}
            href="/competition"
            c="black"
          >
            Competition
          </Anchor>
          <Anchor
            flex="1"
            size="sm"
            ta="center"
            onClick={() => sendEvent("dashboard")}
            href="https://dashboard.taoshi.io"
            c="black"
          >
            Dashboard
          </Anchor>
          <Anchor
            flex="1"
            size="sm"
            ta="center"
            onClick={() => sendEvent("github")}
            href="https://github.com/taoshidev/time-series-prediction-subnet"
            c="black"
          >
            Github
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

            <Menu.Dropdown style={{ border: "1px dashed black" }}>
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
        </Flex>
      )}
    </Box>
  );
};
