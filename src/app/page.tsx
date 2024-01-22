"use client";

import { Container, Flex, Box } from "@chakra-ui/react";

import { Copy } from "@/components/Copy";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <Container maxW="640px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />
          <Nav />
          <Hero />

          <Copy />
        </Box>
      </Flex>
    </Container>
  );
}
