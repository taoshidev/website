import {
  Box,
  Center,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { usePlausible } from "next-plausible";
import { FaTimes, FaAlignJustify } from "react-icons/fa";

export const Nav = () => {
  const { isOpen, onToggle } = useDisclosure();
  const plausible = usePlausible();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box as="nav" fontSize="0.875rem" position="relative">
      <Center>
        {isMobile && (
          <IconButton
            aria-label={isOpen ? "Close menu" : "Open menu"}
            icon={isOpen ? <FaTimes /> : <FaAlignJustify />}
            onClick={onToggle}
            variant="secondary"
          />
        )}
      </Center>

      <Flex
        direction={["column", "row"]} // Stack on mobile, horizontal on desktop
        display={[isOpen ? "flex" : "none", "flex"]} // Hide on mobile unless open
        position={["absolute", "relative"]} // Take it out of the flow on mobile, put it back on desktop
        width={["100%", "auto"]} // Take up the full width on mobile, shrink to fit on desktop
        top={["70px", "auto"]} // Push it to the bottom on mobile, put it back on desktop
        backgroundColor={["white", "transparent"]} // White background on mobile, transparent on desktop
        borderBottom={["1px dashed black", "none"]} // Black border on mobile, none on desktop
      >
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("subnet")}
          href="/subnet"
          padding={["10px 0", "0"]}
        >
          Subnet 8
        </Link>
        <Link
          flex="1"
          fontSize="xs"
          textAlign="center"
          onClick={() => sendEvent("dashboard")}
          href="https://dashboard.taoshi.io"
          padding={["10px 0", "0"]}
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
          padding={["10px 0", "0"]}
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
          padding={["10px 0", "0"]}
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
          padding={["10px 0", "0"]}
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
          padding={["10px 0", "0"]}
        >
          Contact
        </Link>
      </Flex>
    </Box>
  );
};
