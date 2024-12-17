"use client";

import Link from "next/link";

import {
  Box,
  Container,
  Center,
  Badge,
  Button,
  Divider,
  Stack,
  Card,
  Group,
  Title,
  Text,
  Flex,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Page() {
  return (
    <Container maw="1000px" display="flex" my="100px">
      <Box>
        <Center>
          <Title my="60px">Newsroom</Title>
        </Center>

        <Box ta="center" mb="40px">
          <Title order={3} fs="24px" mt="40px" mb="16px">
            Announcements & News
          </Title>
          <Text>Check out the latest updates on Taoshi.</Text>
        </Box>

        <Box mb="100px">
          <Stack>
            <Card withBorder flex="1">
              <Stack h="100%" gap="xl">
                <Box flex="1">
                  <Group justify="space-between" align="flex-start">
                    <Box flex="1">
                      <Text c="orange" fw="bold" size="lg">
                        Taoshi to Showcase World&apos;s First Decentralized and
                        Fair Proprietary Trading Challenge, Built on Bittensor,
                        at Permissionless III
                      </Text>
                    </Box>
                    <Box>
                      <Badge radius="xs" variant="light" color="orange">
                        Press Release
                      </Badge>
                    </Box>
                  </Group>
                  <Divider my="lg" />
                  <Text mb="lg">
                    <Text fw="bold" component="span">
                      SAN FRANCISCO, October 8, 2024 –{" "}
                    </Text>
                    Taoshi, a forefront innovator in decentralized finance, will
                    showcase its Proprietary Trading Network (PTN) at the
                    upcoming Permissionless III conference in Salt Lake City,
                    Utah, from October 9 to 11, 2024.{" "}
                  </Text>
                </Box>

                <Flex justify="center">
                  <Button
                    component={Link}
                    variant="secondary"
                    href="/newsroom/permissionless"
                  >
                    Learn More
                  </Button>
                </Flex>
              </Stack>
            </Card>
            <Card withBorder flex="1">
              <Stack h="100%" gap="xl">
                <Box flex="1">
                  <Group justify="space-between" align="flex-start">
                    <Box flex="1">
                      <Text c="orange" fw="bold" size="lg">
                        Taoshi Launches New Subsidiary, Glitch: A Revolutionary
                        Wealth Generating Platform with AI-Powered Trading
                        Strategies for the Masses
                      </Text>
                    </Box>
                    <Box>
                      <Badge radius="xs" variant="light" color="orange">
                        Press Release
                      </Badge>
                    </Box>
                  </Group>
                  <Divider my="lg" />
                  <Text mb="lg">
                    <Text fw="bold" component="span">
                      SAN FRANCISCO, October 25, 2024 –{" "}
                    </Text>
                    Taoshi, a leader in decentralized finance, today announced
                    the launch of Glitch, a first-of-its-kind SaaS platform
                    poised to revolutionize financial trading with advanced
                    AI-based strategies that provide everyday individuals with
                    automated wealth generation opportunities.
                  </Text>
                </Box>

                <Flex justify="center">
                  <Button
                    component={Link}
                    variant="secondary"
                    href="/newsroom/glitch"
                  >
                    Learn More
                  </Button>
                </Flex>
              </Stack>
            </Card>
          </Stack>
        </Box>

        <Box mb="160px">
          <Box ta="center" mb="40px">
            <Title order={3} fs="24px" mt="40px" mb="16px">
              Events
            </Title>
            <p>Join Taoshi at the following events.</p>
          </Box>

          <Card withBorder>
            <Group justify="space-between" align="flex-start">
              <Text c="orange" fw="bold" size="lg">
                Permissionless III
              </Text>
              <Badge radius="xs" variant="light" color="orange">
                Conference
              </Badge>
            </Group>
            <Divider my="lg" />
            <Text mb="lg">
              Taoshi will provide insights into our revolutionary subnet on
              Bittensor, the Proprietary Trading Network (PTN).
            </Text>
            <Box mb="xl">
              <Group gap="xs">
                <Text fw="bold">Location:</Text>
                <Text>Salt Lake City, UT</Text>
              </Group>
              <Group gap="xs">
                <Text fw="bold">Dates:</Text>
                <Text>October 9-11</Text>
              </Group>
              <Group gap="xs">
                <Text fw="bold">Booth:</Text>
                <Text>#1433</Text>
              </Group>
            </Box>
            <Group justify="center">
              <Button
                component="a"
                variant="secondary"
                href="https://blockworks.co/event/permissionless-iii"
                target="_blank"
                rightSection={<IconArrowUpRight size={14} />}
              >
                Learn More
              </Button>
            </Group>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
