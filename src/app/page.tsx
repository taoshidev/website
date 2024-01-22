import type { Metadata } from "next";
import { Container, Flex, Box } from "@chakra-ui/react";

import { Copy } from "@/components/Copy";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Taoshi",
};

export default function Home() {
  return (
    <Container maxW="640px">
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
