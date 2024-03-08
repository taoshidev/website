"use client";

import {
  Title,
  Flex,
  Box,
  Text,
  Grid,
  Accordion,
  Group,
  Avatar,
  Center,
} from "@mantine/core";

import { Map } from "@/components/Map";

const groceries = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    value: "Staff Software Engineer",
    description:
      "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    value: "Staff ML Engineer",
    description:
      "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    value: "Cartoon Character",
    description:
      "Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.",
  },
];

export default function Home() {
  return (
    <Flex direction="column" justify="center">
      <Box mb={100}>
        <Map />

        <Box mb="150px" ta="center">
          <Title>We&apos;re always looking for talented people</Title>
          <Text>
            Ea laborum ipsum cupidatat ea commodo laborum excepteur nisi mollit.
            Velit fugiat commodo nulla nulla eu amet Lorem aliquip ullamco.
          </Text>
        </Box>

        <Box mb="xl" ta="center">
          <Title order={2} mb="xl">
            Perks & Benefits
          </Title>
          <Grid>
            <Grid.Col span={4}>
              <Box>
                <Text fw={700} mb="sm">
                  Competitive Salary
                </Text>
                <Text size="sm">
                  Incididunt reprehenderit veniam aliquip do laboris non. Esse
                  non exercitation quis sint id adipisicing veniam mollit minim
                  labore.
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box>
                <Text fw={700} mb="sm">
                  Flexible working time
                </Text>
                <Text size="sm">
                  Esse non exercitation quis sint id adipisicing veniam mollit
                  minim labore irure reprehenderit eiusmod elit.
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box>
                <Text fw={700} mb="sm">
                  Health Benefits
                </Text>
                <Text size="sm">
                  Sint id adipisicing veniam mollit minim Incididunt
                  reprehenderit veniam aliquip do laboris non. Esse non
                  exercitation quis abore.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>

        <Center>
          <Box w={500} my="xl" ta="center">
            <Title order={2} mb="lg">
              Open Roles
            </Title>
            <Text>
              Taoshi is growing fast, and we are always looking for passionate,
              dynamic, and talented individuals to join our distributed team all
              around the world.
            </Text>
          </Box>
        </Center>

        <Center>
          <Box w={500} my="xl">
            <Accordion>
              {groceries.map((item) => (
                <Accordion.Item key={item.value} value={item.value}>
                  <Accordion.Control>
                    <Group wrap="nowrap">
                      <Avatar src={item.image} radius={0} size="lg" />
                      <Text size="sm" fw={700}>
                        {item.value}
                      </Text>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm">{item.description}</Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Box>
        </Center>
      </Box>
    </Flex>
  );
}
