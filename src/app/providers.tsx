"use client";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { HubspotProvider } from "next-hubspot";

import { theme } from "@/styles/theme";

export const Providers = ({ children }: any) => {
  return (
    <HubspotProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        {children}
      </ChakraProvider>
    </HubspotProvider>
  );
};
