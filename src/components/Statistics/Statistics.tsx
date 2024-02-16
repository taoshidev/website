import { Box, Center, Divider, Group, Stack, Text } from "@mantine/core";

export const Statistics = () => {
  return (
    <Box mb="100px">
      <Box my="xl">
        <Group justify="space-between" align="center" mb="lg">
          <Stack gap="0" align="center">
            <Text fw="bold">
              $7.6m
              <Text component="sup" size="xs">
                *
              </Text>
            </Text>
            <Text ta="center" size="sm">
              Miner Payouts
            </Text>
          </Stack>
          <Center h="20px">
            <Divider orientation="vertical" variant="dashed" bg="black" />
          </Center>
          <Stack gap="0" align="center">
            <Text fw="bold">
              $133k
              <Text component="sup" size="xs">
                *
              </Text>
            </Text>
            <Text ta="center" size="sm">
              Daily Mining Rewards
            </Text>
          </Stack>
          <Center h="20px">
            <Divider orientation="vertical" variant="dashed" bg="black" />
          </Center>
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
        </Group>
      </Box>

      <Center>
        <Box>
          <Text size="sm">
            <Text component="span" fs="italic">
              Estimated annual miner payout:
            </Text>{" "}
            <Text component="span" fw="bold">
              $32m/yr<Text component="sup">*</Text>
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
