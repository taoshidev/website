import {
  HStack,
  Text,
  VStack,
  Divider,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";

export const Statistics = () => {
  return (
    <Box mb="100px">
      <Box my="8">
        <HStack justify="space-between" alignItems="center" mb="2">
          <VStack spacing="0">
            <Text fontWeight="bold">
              $6.8m
              <Text as="sup" fontSize="x-small">
                *
              </Text>
            </Text>
            <Text fontSize="sm">Miner Payouts</Text>
          </VStack>
          <Center height="20px">
            <Divider orientation="vertical" borderStyle="dashed" />
          </Center>
          <VStack spacing="0">
            <Text fontWeight="bold">
              $87k
              <Text as="sup" fontSize="x-small">
                *
              </Text>
            </Text>
            <Text fontSize="sm">Daily Mining Rewards</Text>
          </VStack>
          <Center height="20px">
            <Divider orientation="vertical" borderStyle="dashed" />
          </Center>
          <VStack spacing="0">
            <Text fontWeight="bold">
              10/hr
              <Text as="sup" fontSize="x-small">
                *
              </Text>
            </Text>
            <Text fontSize="sm">Payout Velocity</Text>
          </VStack>
        </HStack>
      </Box>

      <Center>
        <Box>
          <Text fontSize="small">
            <Text as="span" fontStyle="italic">
              Estimated annual miner payout:
            </Text>{" "}
            <Text as="span" fontWeight="bold">
              $32m/yr<Text as="sup">*</Text>
            </Text>
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text fontSize="xx-small">*updated weekly</Text>
        </Box>
      </Center>
    </Box>
  );
};
