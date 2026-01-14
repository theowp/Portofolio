'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DataPoint {
  x: number;
  y: number;
  opacity: number;
  delay: number;
}

export function DataGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<DataPoint[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    const initPoints = () => {
      const points: DataPoint[] = [];
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.7) {
            points.push({
              x: i * spacing + spacing / 2,
              y: j * spacing + spacing / 2,
              opacity: Math.random() * 0.3 + 0.1,
              delay: Math.random() * 2
            });
          }
        }
      }
      pointsRef.current = points;
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;

      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw data points with pulsing effect
      pointsRef.current.forEach((point) => {
        const pulsePhase = (time / 1000 + point.delay) % 2;
        const pulse = Math.sin(pulsePhase * Math.PI) * 0.5 + 0.5;
        const opacity = point.opacity * (0.5 + pulse * 0.5);

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${opacity})`;
        ctx.fill();

        // Subtle glow
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, 15
        );
        gradient.addColorStop(0, `rgba(0, 255, 136, ${opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(point.x - 15, point.y - 15, 30, 30);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
