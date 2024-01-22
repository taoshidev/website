"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@/styles/theme";

export const Providers = ({ children }: any) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
