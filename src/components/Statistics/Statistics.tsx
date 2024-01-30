import { HStack, Text, VStack, Divider, Center, Box } from "@chakra-ui/react";

export const Statistics = () => {
  return (
    <Box mb="100px">
      <Box my="8">
        <HStack justify="space-between" alignItems="center" mb="2">
          <VStack spacing="0">
            <Text fontWeight="bold">
              $7.6m
              <Text as="sup" fontSize="x-small">
                *
              </Text>
            </Text>
            <Text textAlign="center" fontSize={{ base: "12px", sm: "14px" }}>
              Miner Payouts
            </Text>
          </VStack>
          <Center height="20px">
            <Divider orientation="vertical" borderStyle="dashed" />
          </Center>
          <VStack spacing="0">
            <Text fontWeight="bold">
              $133k
              <Text as="sup" fontSize="x-small">
                *
              </Text>
            </Text>
            <Text textAlign="center" fontSize={{ base: "12px", sm: "14px" }}>
              Daily Mining Rewards
            </Text>
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
            <Text textAlign="center" fontSize={{ base: "12px", sm: "14px" }}>
              Payout Velocity
            </Text>
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
