import { Box, Link, HStack } from "@chakra-ui/react";
import { usePlausible } from "next-plausible";

export const Nav = () => {
  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    console.log(eventName);
    plausible(eventName);
  };

  return (
    <Box as="nav" fontSize="0.875rem">
      <HStack width="100%">
        <Link
          flex="1"
          textAlign="center"
          onClick={() => sendEvent("dashboard")}
          href="https://dashboard.taoshi.io"
          isExternal
        >
          Dashboard
        </Link>
        <Link
          flex="1"
          textAlign="center"
          onClick={() => sendEvent("github")}
          href="https://github.com/taoshidev/time-series-prediction-subnet?tab=readme-ov-file"
          isExternal
        >
          Github
        </Link>
        <Link
          flex="1"
          textAlign="center"
          onClick={() => sendEvent("discord")}
          href="https://discordapp.com"
          isExternal
        >
          Discord
        </Link>
        <Link
          flex="1"
          textAlign="center"
          onClick={() => sendEvent("twitter")}
          href="https://twitter.com/taoshiio"
          isExternal
        >
          Twitter
        </Link>
        <Link
          flex="1"
          textAlign="center"
          onClick={() => sendEvent("contact")}
          href="https://twitter.com/taoshiio"
          isExternal
        >
          Contact
        </Link>
      </HStack>
    </Box>
  );
};
