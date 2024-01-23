import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export interface StatisticsProps {
  prop?: string;
}

export const Statistics = ({ prop = "default value" }: StatisticsProps) => {
  return (
    <HStack justify="space-between" alignItems="center" my="8">
      <VStack spacing="0">
        <Text fontWeight="bold">$345k</Text>
        <Text fontSize="sm">Emissions</Text>
      </VStack>
      <VStack spacing="0">
        <Text fontWeight="bold">$1.3m</Text>
        <Text fontSize="sm">Dividends</Text>
      </VStack>
      <VStack spacing="0">
        <Text fontWeight="bold">10/hr</Text>
        <Text fontSize="sm">Payouts</Text>
      </VStack>
      <VStack spacing="0">
        <Text fontWeight="bold">345k</Text>
        <Text fontSize="sm">Emissions</Text>
      </VStack>
    </HStack>
  );
};
