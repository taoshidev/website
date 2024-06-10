"use client";

import NextImage from "next/image";

import { Anchor, Group, Title, Image } from "@mantine/core";

import { Nav } from "@/components/Nav";

import logo from "@/assets/logo.svg";

export const Header = () => {
  return (
    <Group justify="space-between" align="center" h="100%" py="md">
      <Group flex="1">
        <Image
          component={NextImage}
          src={logo}
          width={50}
          height={50}
          alt="taoshi logo"
        />

        <Anchor href="/">
          <Title order={3} c="black">
            taoshi
          </Title>
        </Anchor>
      </Group>
      <Nav />
    </Group>
  );
};
