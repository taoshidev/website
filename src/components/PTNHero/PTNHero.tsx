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

    const centerCircle = document.createElement("div");

    centerCircle.className = "center-circle";

    centerCircle.className = "center-circle";
    centerCircle.style.width = `${radius * 0.5}px`;
    centerCircle.style.height = `${radius * 0.5}px`;
    centerCircle.style.borderRadius = "50%";
    centerCircle.style.position = "absolute";
    centerCircle.style.left = `${centerX - radius * 0.25}px`;
    centerCircle.style.top = `${centerY - radius * 0.25}px`;
    centerCircle.style.border = "2px solid #F7F6F3";
    centerCircle.style.zIndex = "1";

    lineContainer.appendChild(centerCircle);

    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * radius * 0.8;
      const innerOffset = 0.2 * radius;

      const x1 = centerX + Math.cos(angle) * innerOffset;
      const y1 = centerY + Math.sin(angle) * innerOffset;

      const dotsCount = 10;
      const dotSpacing = (length / dotsCount) * 2;

      for (let j = 0; j < dotsCount; j++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.style.position = "absolute";
        dot.style.width = "1px";
        dot.style.height = "1px";
        dot.style.borderRadius = "50%";
        dot.style.backgroundColor = "#000000";
        dot.style.left = `${x1 + Math.cos(angle) * (innerOffset + j * dotSpacing)}px`;
        dot.style.top = `${y1 + Math.sin(angle) * (innerOffset + j * dotSpacing)}px`;
        dot.style.opacity = "0";
        lineContainer.appendChild(dot);

        // Fade in and out animation for each dot
        gsap.to(dot, {
          opacity: 1,
          duration: 0.5,
          delay: j * 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    }

    gsap.to(lineContainer, {
      rotation: 360,
      duration: 50,
      repeat: -1,
      ease: "linear",
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
        ></Box>
      </Center>
    </Box>
  );
};
