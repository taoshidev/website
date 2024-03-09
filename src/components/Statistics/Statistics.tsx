import { Box, Center, Divider, Flex, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const Statistics = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box mb="100px">
      <Box my="xl">
        <Flex justify="space-between" align="center" mb="lg">
          <Stack gap="0" align="center">
            <Text fw="bold">
              $12.6m
              <Text component="sup" size="xs">
                *
              </Text>
            </Text>
            <Text ta="center" size="sm">
              Miner Payouts
            </Text>
          </Stack>
          {!isMobile && (
            <Center h="20px">
              <Divider orientation="vertical" variant="dashed" bg="black" />
            </Center>
          )}

          <Stack gap="0" align="center">
            <Text fw="bold">
              $175k
              <Text component="sup" size="xs">
                *
              </Text>
            </Text>
            <Text ta="center" size="sm">
              Daily Mining Rewards
            </Text>
          </Stack>
          {!isMobile && (
            <Center h="20px">
              <Divider orientation="vertical" variant="dashed" bg="black" />
            </Center>
          )}
          <Stack gap="0" align="center">
            <Text fw="bold">
              10/hr
              <Text component="sup" size="xs">
                *
              </Text>
            </Text>
            <Text ta="center" size="sm">
              Payout Velocity
            </Text>
          </Stack>
        </Flex>
      </Box>

      <Center>
        <Box ta="center">
          <Text size="sm">
            <Text component="span" fs="italic">
              Estimated annual miner payout:
            </Text>{" "}
            <Text component="span" fw="bold">
              $64m/yr<Text component="sup">*</Text>
            </Text>
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text size="xs">*updated weekly</Text>
        </Box>
      </Center>
    </Box>
  );
};
