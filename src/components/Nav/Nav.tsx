import {
  Box,
  Center,
  Anchor,
  Flex,
  Burger,
  Menu,
  Button,
  Text,
  rem,
} from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import {
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconMail,
  IconBrandTwitter,
  IconBrandDiscord,
} from "@tabler/icons-react";
import { usePlausible } from "next-plausible";

export const Nav = () => {
  const [opened, { toggle }] = useDisclosure();
  const plausible = usePlausible();
  const isMobile = useMediaQuery("(max-width: 400px)");

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box component="nav" flex="1">
      <Center>
        {isMobile && (
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        )}
      </Center>

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
          onClick={() => sendEvent("leaderboard")}
          href="/leaderboard"
          c="black"
        >
          Leaderboard
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

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button variant="outline">More</Button>
          </Menu.Target>

          <Menu.Dropdown>
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
                <IconBrandTwitter style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Twitter
            </Menu.Item>
            <Menu.Item
              onClick={() => sendEvent("discord")}
              component="a"
              href="https://discord.gg/MKtKVYnCDh"
              leftSection={
                <IconBrandDiscord style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Discord
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Box>
  );
};
