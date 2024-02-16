"use client";

import NextImage from "next/image";

import { Anchor, Group, Title, Image } from "@mantine/core";

import { Nav } from "@/components/Nav";

import logo from "@/app/assets/logo.svg";

export const Header = () => {
  return (
    <Group justify="space-between" align="center">
      <Group>
        <Image
          component={NextImage}
          src={logo}
          width={75}
          height={75}
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
