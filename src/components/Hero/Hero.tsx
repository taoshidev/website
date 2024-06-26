import NextImage from "next/image";

import {
  Box,
  Text,
  Title,
  Stack,
  Image,
} from "@mantine/core";
import { usePlausible } from "next-plausible";
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
}

export const Hero = ({ title, copy, ctas, image }: HeroProps) => {
  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };

  return (
    <Box>
      <Box ta="center">
        <Stack mb="lg" align="center">
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
        {copy && (
          <Title order={2} mb="xl">
            {copy}
          </Title>
        )}

      </Box>
    </Box>
  );
};
