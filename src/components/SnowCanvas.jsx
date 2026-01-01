// src/components/SnowCanvas.jsx
import React, { useEffect, useRef } from "react";

const drawSnowflake = (ctx, x, y, size, opacity) => {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
  gradient.addColorStop(0, `rgba(255,255,255,${opacity})`);
  gradient.addColorStop(0.7, `rgba(255,255,255,${opacity * 0.5})`);
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
};

const SnowCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const isMobile = width <= 768;

    // ثلاث طبقات للثلج (عمق)
    const layers = isMobile
      ? [
          { count: 20, size: [1, 2], speed: [0.2, 0.5], sway: 0.005 }, // small
          { count: 15, size: [2, 3], speed: [0.3, 0.6], sway: 0.004 }, // medium
          { count: 10, size: [3, 4], speed: [0.4, 0.7], sway: 0.003 }, // large
        ]
      : [
          { count: 30, size: [1, 2], speed: [0.5, 1], sway: 0.01 }, // small
          { count: 20, size: [2, 4], speed: [1, 1.5], sway: 0.008 }, // medium
          { count: 10, size: [3, 6], speed: [1.5, 2], sway: 0.005 }, // large
        ];

    const flakes = [];

    layers.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        const size = Math.random() * (layer.size[1] - layer.size[0]) + layer.size[0];
        flakes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: isMobile ? size * 0.6 : size,
          speedY: Math.random() * (layer.speed[1] - layer.speed[0]) + layer.speed[0],
          speedX: Math.random() * 0.5,
          swing: Math.random() * Math.PI * 2,
          swingSpeed: Math.random() * layer.sway + layer.sway,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      flakes.forEach(flake => {
        drawSnowflake(
          ctx,
          flake.x + Math.sin(flake.swing) * 15,
          flake.y,
          flake.size,
          flake.opacity
        );
      });
      update();
    };

    const update = () => {
      flakes.forEach(flake => {
        flake.y += flake.speedY;
        flake.x += Math.sin(flake.swing) * flake.speedX;
        flake.swing += flake.swingSpeed;

        if (flake.y > height + 20) flake.y = -flake.size;
        if (flake.x > width + 20) flake.x = -flake.size;
      });
    };

    let animationId;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    />
  );
};

export default SnowCanvas;
