import { Box, Link, HStack } from "@chakra-ui/react";

export const Nav = () => {
  return (
    <Box as="nav" fontSize="0.875rem">
      <HStack width="100%">
        <Link flex="1" textAlign="center" href="/get-started">
          Get Started
        </Link>
        <Link flex="1" textAlign="center" href="/learn">
          Github
        </Link>
        <Link flex="1" textAlign="center" href="https://discordapp.com">
          Discord
        </Link>
        <Link flex="1" textAlign="center" href="https://twitter.com">
          Twitter
        </Link>
      </HStack>
    </Box>
  );
};
