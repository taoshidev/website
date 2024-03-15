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
    centerCircle.style.width = `${radius * 0.5}px`;
    centerCircle.style.height = `${radius * 0.5}px`;
    centerCircle.style.borderRadius = "50%";
    centerCircle.style.position = "absolute";
    centerCircle.style.left = `${centerX - radius * 0.25}px`;
    centerCircle.style.top = `${centerY - radius * 0.25}px`;
    centerCircle.style.backgroundColor = "#282828";
    lineContainer.appendChild(centerCircle);

    for (let i = 0; i < 25; i++) {
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * radius * 0.9;
      const innerOffset = 0.3 * radius;

      const x1 = centerX + Math.cos(angle) * innerOffset;
      const y1 = centerY + Math.sin(angle) * innerOffset;
      const x2 = centerX + Math.cos(angle) * length;
      const y2 = centerY + Math.sin(angle) * length;

      const line = document.createElement("div");

      line.className = "line";

      const angleDeg = angle * (180 / Math.PI);

      line.style.transform = `rotate(${angleDeg}deg)`;
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.width = `${Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)}px`;
      line.style.borderTop = "1px dotted #282828";
      line.style.borderSpacing = "2px";

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
