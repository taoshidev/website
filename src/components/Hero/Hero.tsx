import NextImage from "next/image";

import { Image } from "@chakra-ui/next-js";
import { Box, VStack, Text, ButtonGroup, Button, Link } from "@chakra-ui/react";
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
  tagline?: string;
  ctas: CTA[];
  title?: string;
}

export const Hero = ({ title, copy, tagline, ctas }: HeroProps) => {
  const plausible = usePlausible();

  const sendEvent = (eventName: string) => {
    plausible(eventName);
  };
  return (
    <Box>
      <Box textAlign="center" my="150px">
        {title && (
          <VStack mb="4">
            <Image
              as={NextImage}
              width={50}
              height={50}
              src={subnet}
              alt="Picture of the author"
            />
            <Text fontWeight="bold">{title}</Text>
          </VStack>
        )}
        <Text fontSize="x-large" fontWeight="bold" mb={tagline ? "1" : "6"}>
          {copy}
        </Text>
        {tagline && <Text mb="6">{tagline}</Text>}
        <ButtonGroup spacing="5">
          {ctas.map((cta) => (
            <Link
              key={cta.event}
              onClick={() => sendEvent(cta.event)}
              href={cta.href}
              isExternal={cta.isExternal}
            >
              <Button variant="primary" size="sm" width="150px">
                {cta.text}
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
};
