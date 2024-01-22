import { Box, Text, VStack } from "@chakra-ui/react";

export const Copy = () => {
  return (
    <VStack spacing="8">
      <Box>
        <Text fontWeight="bold" align="center" mb="4">
          Taoshi
        </Text>
        <Text>
          Taoshi is leading the Bittensor revolution. We harness the full
          potential of Bittensor to create dynamic and rewarding subnetworks
          that incentivize intelligence, revolutionizing how individuals and
          businesses interact with the Bittensor blockchain.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" align="center" mb="4">
          Bittensor
        </Text>

        <Text>
          Bittensor is more than just a blockchain; it&apos;s the doorway to a
          new era of decentralized intelligence. It&apos;s a platform that
          celebrates innovation, creativity, and expertise. At Taoshi,
          we&apos;re not only leveraging this remarkable technology; we&apos;re
          actively constructing specialized subnetworks, such as our
          cutting-edge time series prediction subnetwork, on top of it. This
          approach empowers users to access a wide array of possibilities within
          the Bittensor network, tailored to their unique needs.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" align="center" mb="4">
          Our Mission
        </Text>

        <Text>
          Taoshi&apos;s mission is to create an intuitive, user-friendly
          environment that inspires individuals and enterprises to explore,
          innovate, and thrive within the Bittensor ecosystem. Whether
          you&apos;re an AI developer, a data scientist, or an entrepreneur with
          a vision, our solutions serve as your gateway to a world of
          opportunities. At Taoshi, we&apos;re shaping the future by harnessing
          Bittensor to build a brighter, more decentralized world, one
          specialized subnetwork at a time.
        </Text>
      </Box>
    </VStack>
  );
};
