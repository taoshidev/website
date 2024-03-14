import React, { useEffect, useState, useRef } from "react";
import { Box, Center } from "@mantine/core";

import { create, set, render, frame, globe } from "@/utils/logo";

import styles from "./ptn-hero.module.css";

export const PTNHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = []; // Array that contains the stars
    const FPS = 60; // Frames per second
    const x = canvas.width; // Number of stars

    // Push stars to array
    for (let i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5,
      });
    }

    // Draw the scene
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0, x = stars.length; i < x; i++) {
        const s = stars[i];
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Update star locations
    function update() {
      for (let i = 0, x = stars.length; i < x; i++) {
        const s = stars[i];
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;
        if (s.x < 0 || s.x > canvas.width) s.x = -s.x;
        if (s.y < 0 || s.y > canvas.height) s.y = -s.y;
      }
    }

    // Update and draw
    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Center c="black" mb="xl">
      <canvas ref={canvasRef} />
    </Center>
  );
};
