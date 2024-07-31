import NextImage from "next/image";

import {
  Box,
  Text,
  Button,
  Group,
  Title,
  Stack,
  Anchor,
  Image,
  Center,
} from "@mantine/core";
import { usePlausible } from "next-plausible";
import logo from "@/assets/wordmark.png";

export interface CTA {
  text: string;
  href: string;
  event: string;
  isExternal: boolean;
}

export interface HeroProps {
  copy?: string;
  ctas?: CTA[];
  title?: string;
  image?: string;
  wordmark?: boolean;
}

export const Hero = ({ title, copy, ctas, image, wordmark }: HeroProps) => {
  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box>
      <Box ta="center">
        <Stack mb={wordmark ? '0' : 'lg'} align="center">
          {image && (
            <Image
              component={NextImage}
              w={100}
              h={100}
              src={image}
              alt="Hero Image"
            />
          )}

          {title && <Text>{title}</Text>}
        </Stack>

        { wordmark ? (
          <Center mb='70'>
            <Image
              component={NextImage}
              w={150}
              h='auto'
              src={logo}
              alt="Taoshi Logo"
            />
          </Center>
        ) : null}

        {copy && (
          <Title order={2} mb="xl">
            {copy}
          </Title>
        )}

        <Group justify="center">
          {ctas?.length &&
            ctas.map((cta) => (
              <Anchor
                key={cta.event}
                onClick={() => sendEvent(cta.event)}
                href={cta.href}
              >
                <Button variant="primary" size="sm" w="200px">
                  {cta.text}
                </Button>
              </Anchor>
            ))}
        </Group>
      </Box>
    </Box>
  );
};
