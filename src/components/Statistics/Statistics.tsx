import { HStack, Text, VStack } from "@chakra-ui/react";

export const Statistics = () => {
  return (
    <HStack justify="space-around" alignItems="center" my="8">
      <VStack spacing="0">
        <Text fontWeight="bold">$1.3m</Text>
        <Text fontSize="sm">Miner Payouts</Text>
      </VStack>
      <VStack spacing="0">
        <Text fontWeight="bold">$345k</Text>
        <Text fontSize="sm">Daily Mining Rewards</Text>
      </VStack>
      <VStack spacing="0">
        <Text fontWeight="bold">10/hr</Text>
        <Text fontSize="sm">Payout Velocity</Text>
      </VStack>
    </HStack>
  );
};
