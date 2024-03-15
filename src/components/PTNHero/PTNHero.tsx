"use client";

import React, { useEffect, useRef } from "react";
import { Box, Center } from "@mantine/core";
import { gsap } from "gsap";

import styles from "./ptn-hero.module.css";

export const PTNHero = () => {
  const lineContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lineContainer = lineContainerRef.current;

    if (!lineContainer) return;

    const radius =
      Math.min(lineContainer.clientWidth, lineContainer.clientHeight) / 2;
    const centerX = lineContainer.clientWidth / 2;
    const centerY = lineContainer.clientHeight / 2;

    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * radius * 0.8; // Random distance from the center
      const innerOffset = 0.2 * radius; // Space to keep clear in the middle
      const x1 = centerX + Math.cos(angle) * innerOffset;
      const y1 = centerY + Math.sin(angle) * innerOffset;
      const x2 = centerX + Math.cos(angle) * length;
      const y2 = centerY + Math.sin(angle) * length;

      const line = document.createElement("div");
      line.className = "line";

      // Calculate rotation angle
      const angleDeg = angle * (180 / Math.PI);

      line.style.transform = `rotate(${angleDeg}deg)`;
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.width = `${Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)}px`;

      lineContainer.appendChild(line);
    }

    gsap.to(".line", {
      width: "30%",
      stagger: {
        each: 0.007,
        from: "end",
        repeat: -1,
        yoyo: true,
        grid: "auto",
      },
    });
  }, []);

  return (
    <Box>
      <Center>
        <Box
          h={200}
          w={200}
          ref={lineContainerRef}
          className={styles["line-container"]}
        />
      </Center>
    </Box>
  );
};
