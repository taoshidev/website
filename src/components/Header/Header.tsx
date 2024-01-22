"use client";

import NextImage from "next/image";

import { Center, Heading, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";

import logo from "@/app/assets/logo.svg";

export const Header = () => {
  return (
    <Center mb="8">
      <VStack spacing="4">
        <Image
          as={NextImage}
          src={logo}
          width={100}
          height={100}
          alt="taoshi logo"
        />
        <Heading size="md">taoshi</Heading>
      </VStack>
    </Center>
  );
};
