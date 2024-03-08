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
    <AppShell header={{ height: 80 }} padding="md">
      <AppShell.Header
        pos="relative"
        style={{ borderBottom: "1px dashed black" }}
      >
        <Container maw="800px" h="100%">
          <Header />
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container maw="800px" h="100%">
          {children}
        </Container>
      </AppShell.Main>

      <AppShell.Footer
        pos="relative"
        mt={250}
        style={{ borderTop: "1px dashed black" }}
      >
        <Container maw="800px" h="100%">
          <Footer />
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
