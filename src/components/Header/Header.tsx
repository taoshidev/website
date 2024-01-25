"use client";

import NextImage from "next/image";

import { Center, Heading, VStack } from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";

import logo from "@/app/assets/logo.svg";

export const Header = () => {
  return (
    <Center mb="6">
      <VStack spacing="4">
        <Image
          as={NextImage}
          src={logo}
          width={100}
          height={100}
          alt="taoshi logo"
        />
        <Heading size="md">
          <Link href="/">taoshi</Link>
        </Heading>
      </VStack>
    </Center>
  );
};
