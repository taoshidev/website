import NextImage from "next/image";

import {
  Box,
  Card,
  Title,
  Image,
  SimpleGrid,
  Center,
  Text,
} from "@mantine/core";

import glassnode from "@/assets/partners/glassnode.svg";
import lunarcrush from "@/assets/partners/lunarcrush.svg";
import uphold from "@/assets/partners/uphold-white.jpg";
import rt21 from "@/assets/partners/roundtable21.png";

export const Partners = () => {
  return (
    <Box>
      <Box mb="xl" ta='center'>
        <Text fw="bold" mb="sm" size="sm">
          Supported by the best
        </Text>
        <Title order={3}>Partners & Affiliates</Title>
      </Box>
      <SimpleGrid cols={{ sm: 2 }}>
        <Card
          withBorder
          component="a"
          href="https://uphold.com/en-us/institutional"
          target="_blank"
        >
          <Center h="100%">
            <Image
              component={NextImage}
              h={50}
              fit="contain"
              src={uphold}
              alt="uphold logo"
            />
          </Center>
        </Card>
        <Card
          withBorder
          component="a"
          href="https://glassnode.com"
          target="_blank"
        >
          <Center h="100%">
            <Image
              component={NextImage}
              h={35}
              w="auto"
              fit="contain"
              src={glassnode}
              alt="glassnode logo"
            />
          </Center>
        </Card>
        <Card
          withBorder
          component="a"
          href="https://lunarcrush.com"
          target="_blank"
        >
          <Center h="100%">
            <Image
              component={NextImage}
              h={35}
              w="auto"
              fit="contain"
              src={lunarcrush}
              alt="lunarcrush logo"
            />
          </Center>
        </Card>
        <Card
          withBorder
          component="a"
          href="https://www.roundtable21.com"
          target="_blank"
        >
          <Center h="100%">
            <Image
              component={NextImage}
              h={66}
              w="auto"
              fit="contain"
              src={rt21}
              alt="rt21 logo"
            />
          </Center>
        </Card>
      </SimpleGrid>
    </Box>
  );
};
