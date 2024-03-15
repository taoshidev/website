"use client";

import React, { useEffect, useRef } from "react";
import { Box, Group, Accordion, Text } from "@mantine/core";
import { gsap } from "gsap";

import { markets } from "@/constants";

import styles from "./asset-list.module.css";

export const AssetList = () => {
  return (
    <Box>
      <Group align="flex-start" my="xl">
        <Accordion flex="1">
          <Accordion.Item value="BTCUSD">
            <Accordion.Control className={styles.control}>
              <Text fw={700} size="sm">
                Crypto
              </Text>
            </Accordion.Control>

            <Accordion.Panel>
              {markets.crypto.map((item) => (
                <Text ta="center" my="sm" size="xs" key={item.label}>
                  {item.label}
                </Text>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion flex="1">
          <Accordion.Item value="BTCUSD">
            <Accordion.Control className={styles.control}>
              <Text fw={700} size="sm">
                Forex
              </Text>
            </Accordion.Control>

            <Accordion.Panel>
              {markets.forex.map((item) => (
                <Text ta="center" my="sm" size="xs" key={item.label}>
                  {item.label}
                </Text>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Accordion flex="1">
          <Accordion.Item value="BTCUSD">
            <Accordion.Control className={styles.control}>
              <Text fw={700} size="sm">
                Indices
              </Text>
            </Accordion.Control>

            <Accordion.Panel>
              {markets.indices.map((item) => (
                <Text ta="center" my="sm" size="xs" key={item.label}>
                  {item.label}
                </Text>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Group>
    </Box>
  );
};
