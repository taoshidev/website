"use client";

import { Box, Text, Anchor, Container } from "@mantine/core";

export default function Page() {
  return (
    <Container maw="1000px" h="100%">
      <Box>
        <Text>
          No, its called{" "}
          <Anchor
            target="_blank"
            href="https://youtu.be/dQw4w9WgXcQ?si=Xua9eUjQkCKrVIFj"
          >
            $TAO
          </Anchor>
          .
        </Text>
      </Box>
    </Container>
  );
}
