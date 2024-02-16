"use client";

import { MantineProvider } from "@mantine/core";

import { HubspotProvider } from "next-hubspot";

import { theme } from "@/theme";

export const Providers = ({ children }: any) => {
  return (
    <MantineProvider theme={theme}>
      <HubspotProvider>{children}</HubspotProvider>
    </MantineProvider>
  );
};
