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
import uphold from "@/assets/partners/uphold.png";
import rt21 from "@/assets/partners/roundtable21.png";

export const Partners = () => {
  return (
    <Box my="xl">
      <Box mb="xl">
        <Text fw="bold" mb="sm" size="sm">
          Supported by the best
        </Text>
        <Title order={3}>Partners & Affiliates</Title>
      </Box>
      <SimpleGrid cols={2}>
        <Card style={{ border: "1px dashed black" }}>
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
        <Card style={{ border: "1px dashed black" }}>
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
        <Card style={{ border: "1px dashed black" }}>
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
        <Card style={{ border: "1px dashed black" }}>
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
