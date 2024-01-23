"use client";

import { Container, Flex, Box, Center, Divider } from "@chakra-ui/react";

import { Copy } from "@/components/Copy";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Statistics } from "@/components/Statistics";

export default function Home() {
  return (
    <Container maxW="640px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />
          <Nav />
          <Hero />
          <Statistics />
          <Center mb="10">
            <Divider w="50px" borderStyle="dashed" />
          </Center>
          <Copy />
        </Box>
      </Flex>
    </Container>
  );
}
