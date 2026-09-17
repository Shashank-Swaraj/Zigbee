// File: components/graphics/NetworkMeshCanvas.tsx
"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  label?: string;
  isAccent?: boolean;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export function NetworkMeshCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initial Mesh Nodes (Cyan & Orange accents from the wireframe)
    const nodeCount = 18;
    const nodes: Node[] = [];
    const colors = ["#06B6D4", "#F97316", "#0D9488", "#71717A"];

    for (let i = 0; i < nodeCount; i++) {
      const isAccent = i % 3 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: isAccent ? 6 : 4,
        color: isAccent ? (i % 2 === 0 ? "#F97316" : "#06B6D4") : "#A1A1AA",
        isAccent,
        label: isAccent ? `NODE_${i.toString(16).toUpperCase().padStart(2, "0")}` : undefined,
      });
    }

    // Active Data Packets traveling between nodes
    const packets: Packet[] = [
      { fromNode: 0, toNode: 2, progress: 0, speed: 0.008, color: "#F97316" },
      { fromNode: 3, toNode: 5, progress: 0.5, speed: 0.006, color: "#06B6D4" },
      { fromNode: 6, toNode: 1, progress: 0.2, speed: 0.01, color: "#F97316" },
    ];

    const maxDistance = 160;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background coordinate grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Update & Draw Links between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(161, 161, 170, ${alpha * 0.4})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]); // Dashed connection line
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // 3. Render Packets (data pulses)
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.fromNode = Math.floor(Math.random() * nodes.length);
          p.toNode = Math.floor(Math.random() * nodes.length);
        }

        const source = nodes[p.fromNode];
        const target = nodes[p.toNode];
        if (source && target) {
          const px = source.x + (target.x - source.x) * p.progress;
          const py = source.y + (target.y - source.y) * p.progress;

          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });

      // 4. Update & Draw Nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from boundaries
        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Node Outer Ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAccent ? node.color : "#FFFFFF";
        ctx.fill();

        // Optional Node Label
        if (node.label) {
          ctx.font = "9px monospace";
          ctx.fillStyle = "#71717A";
          ctx.fillText(node.label, node.x + 10, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block pointer-events-none ${className}`}
    />
  );
}