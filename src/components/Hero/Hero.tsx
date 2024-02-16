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
} from "@mantine/core";
import { usePlausible } from "next-plausible";

import subnet from "@/app/assets/subnet.svg";
export interface CTA {
  text: string;
  href: string;
  event: string;
  isExternal: boolean;
}

export interface HeroProps {
  copy: string;
  ctas?: CTA[];
  title?: string;
}

export const Hero = ({ title, copy, ctas }: HeroProps) => {
  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };
  return (
    <Box>
      <Box ta="center">
        {title && (
          <Stack mb="lg" align="center">
            <Image
              component={NextImage}
              w={50}
              h={50}
              src={subnet}
              alt="Hero Image"
            />
            <Text>{title}</Text>
          </Stack>
        )}
        <Title order={2} mb="xl">
          {copy}
        </Title>
        <Group justify="center">
          {ctas?.length &&
            ctas.map((cta) => (
              <Anchor
                key={cta.event}
                onClick={() => sendEvent(cta.event)}
                href={cta.href}
              >
                <Button variant="primary" size="sm" w="150px">
                  {cta.text}
                </Button>
              </Anchor>
            ))}
        </Group>
      </Box>
    </Box>
  );
};
