import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
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
  SimpleGrid,
} from "@mantine/core";
import {
  IconPhoto,
  IconArrowUpRight,
  IconArrowRight,
} from "@tabler/icons-react";

import { Hero } from "@/components/Hero";

import newsroom from "@/assets/newsroom.svg";

export default function Page() {
  return (
    <Container maw="1000px" h="100%" my="100">
      <Center>
        <h2>
          <Image priority src={newsroom} alt="taoshi newsroom" width={400} />
        </h2>
      </Center>

      <Box ta="center" mb="40px">
        <Title order={3} fs="24px" mt="40px" mb="16px">
          Announcements & News
        </Title>
        <Text>Check out the latest updates on Taoshi.</Text>
      </Box>

      <SimpleGrid cols={3} mb="100px">
        <Card withBorder>
          <Stack h="100%" gap="xl">
            <Box flex="1">
              <Text c="orange" fw="bold" size="lg" mb="md">
                Pariatur imitt
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eget nunc nec nisl ultricies ultricies. Donec nec
                nunc nec nisl ultricies ultricies. Donec nec nunc nec nisl
                ultricies ultricies.
              </Text>
            </Box>

            <Flex justify="center">
              <Button
                component="a"
                variant="secondary"
                href="https://blockworks.co/event/permissionless-iii"
                target="_blank"
                rightSection={<IconArrowUpRight size={14} />}
              >
                Learn More
              </Button>
            </Flex>
          </Stack>
        </Card>

        <Card display="flex" withBorder>
          <Stack h="100%" gap="xl">
            <Box flex="1">
              <Text c="orange" fw="bold" size="lg" mb="md">
                Pariatur imit
              </Text>
              <Text>
                Sit eu officia enim anim id laborum ad pariatur dolore nisi sunt
                deserunt Lorem. Quis dolor sunt laborum et mollit qui elit
                nostrud eiusmod labore irure proident nulla consequat. Qui ipsum
                magna aliquip aliqua.
              </Text>
            </Box>
          </Stack>
          <Flex justify="center">
            <Button
              component="a"
              variant="secondary"
              href="https://blockworks.co/event/permissionless-iii"
              target="_blank"
              rightSection={<IconArrowUpRight size={14} />}
            >
              Learn More
            </Button>
          </Flex>
        </Card>

        <Card display="flex" withBorder>
          <Stack h="100%" gap="xl">
            <Box flex="1">
              <Text c="orange" fw="bold" size="lg" mb="md">
                Pariatur imit
              </Text>
              <Text>
                Reprehenderit sit aliquip consequat ut nisi culpa aliqua. Duis
                laborum nostrud eiusmod. Duis aliquip fugiat dolore Lorem labore
                cillum.
              </Text>
            </Box>

            <Flex justify="center">
              <Button
                component="a"
                variant="secondary"
                href="https://blockworks.co/event/permissionless-iii"
                target="_blank"
                rightSection={<IconArrowUpRight size={14} />}
              >
                Learn More
              </Button>
            </Flex>
          </Stack>
        </Card>
      </SimpleGrid>

      <Box>
        <Box ta="center" mb="40px">
          <Title order={3} fs="24px" mt="40px" mb="16px">
            Events
          </Title>
          <p>Join Taoshi at the following events.</p>
        </Box>

        <Card withBorder>
          <Group justify="space-between" align="flex-start" mb="xs">
            <Text c="orange" fw="bold" size="lg" mb="md">
              Permissionless III
            </Text>
            <Badge radius="xs" variant="light" color="orange">
              Conference
            </Badge>
          </Group>
          <Text mb="lg">
            Taoshi will provide insights into our revolutionary subnet on
            Bittensor, the Proprietary Trading Network (PTN), and our upcoming
            Theta token, which will be launched as part of Bittensor’s dynamic
            TAO release.
          </Text>
          <Divider my="md" />
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
    </Container>
  );
}
