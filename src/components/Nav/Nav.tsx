import { Box, Link, HStack, Center, Divider } from "@chakra-ui/react";

export const Nav = () => {
  return (
    <Box as="nav" fontSize="0.875rem">
      <HStack width="100%">
        <Link
          flex="1"
          textAlign="center"
          href="https://github.com/taoshidev/time-series-prediction-subnet?tab=readme-ov-file"
          isExternal
        >
          Get Started
        </Link>
        <Link
          flex="1"
          textAlign="center"
          href="https://github.com/taoshidev/time-series-prediction-subnet?tab=readme-ov-file"
          isExternal
        >
          Github
        </Link>
        <Link
          flex="1"
          textAlign="center"
          href="https://discordapp.com"
          isExternal
        >
          Discord
        </Link>
        <Link
          flex="1"
          textAlign="center"
          href="https://twitter.com/taoshiio"
          isExternal
        >
          Twitter
        </Link>
        <Link
          flex="1"
          textAlign="center"
          href="https://twitter.com/taoshiio"
          isExternal
        >
          Contact
        </Link>
      </HStack>
    </Box>
  );
};
