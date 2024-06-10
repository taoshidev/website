"use client";

import { ReactNode } from "react";
import { AppShell, Container } from "@mantine/core";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <AppShell>
      <AppShell.Header pos="relative">
        <Container maw="1000px" h="100%">
          <Header />
        </Container>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer pos="relative">
        <Container maw="1000px" h="100%">
          <Footer />
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
