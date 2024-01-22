"use client";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import { theme } from "@/styles/theme";

export const Providers = ({ children }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
};
