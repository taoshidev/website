import { Box, HStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { usePlausible } from "next-plausible";

export const Nav = () => {
  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box as="nav" fontSize="0.875rem">
      <HStack width="100%">
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("subnet")}
          href="/subnet"
        >
          Subnet 8
        </Link>
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("dashboard")}
          href="https://dashboard.taoshi.io"
        >
          Dashboard
        </Link>
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("github")}
          href="https://github.com/taoshidev/time-series-prediction-subnet"
          isExternal
        >
          Github
        </Link>
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("discord")}
          href="https://discord.gg/MKtKVYnCDh"
          isExternal
        >
          Discord
        </Link>
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("twitter")}
          href="https://twitter.com/taoshiio"
          isExternal
        >
          Twitter
        </Link>
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("contact")}
          href="mailto:knicholson@taoshi.io"
          isExternal
        >
          Contact
        </Link>
      </HStack>
    </Box>
  );
};
