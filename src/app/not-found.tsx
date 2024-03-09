import Link from "next/link";
import NextImage from "next/image";
import { Box, Title, Center, Anchor, Text, Image } from "@mantine/core";

import NotFoundImage from "../../public/404.gif";

export default function NotFound() {
  return (
    <Center>
      <Box ta="center">
        <Box style={{ border: "1px dashed black" }} p="xs" mb="md">
          <Image
            alt="Taoshi"
            h={250}
            fit="contain"
            component={NextImage}
            src={NotFoundImage}
          />
        </Box>

        <Title>Not Found</Title>
        <Text>Could not find requested resource</Text>
        <Anchor component={Link} href="/">
          Return Home
        </Anchor>
      </Box>
    </Center>
  );
}
