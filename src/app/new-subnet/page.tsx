"use client";

import { Container, Flex, Box, Text, Center, Divider } from "@mantine/core";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hubspot } from "@/components/PropNetHubspot";

import newsubnet from "@/app/assets/propnet.svg";

export default function Page() {
  return (
    <Container maw="800px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />

          <Box my="150px">
            <Hero
              title="Subnet ???"
              image={newsubnet}
              copy="The Future of Trading Awaits"
            />
          </Box>

          <Box
            pl="20px"
            mb="xl"
            style={{
              borderLeft: "1px dashed black",
            }}
          >
            <Text>
              <Text
                component="span"
                style={{
                  borderBottom: "1px dashed black",
                }}
              >
                Welcome to the home of Taoshi&apos;s newest subnet! We&apos;re
                continuing to build as we prepare for launch. More information
                will be available soon.
              </Text>
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="sm">
              Public Announcement
            </Text>
            <Text>
              Friday, March 15th - we&apos;ll be releasing a full overview of
              our new subnet. Miners will be able to begin preparing their
              strategies in the testnet environment.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="sm">
              Launch
            </Text>
            <Text>
              Monday, April 1st is the planned release date for Taoshi&apos;s
              second subnet!
            </Text>
          </Box>
        </Box>
      </Flex>
      <Center my="xl">
        <Divider variant="dashed" w="50%" bg="black" />
      </Center>
      <Hubspot />
    </Container>
  );
}
