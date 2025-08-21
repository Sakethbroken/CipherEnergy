// src/hooks/useTilt.ts
import { useRef, useEffect } from "react";

export const useTilt = (maxTilt = 15) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = ((y / height - 0.5) * maxTilt * -2).toFixed(2);
      const rotateY = ((x / width - 0.5) * maxTilt * 2).toFixed(2);

      element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    };

    const resetTilt = () => {
      element.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", resetTilt);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", resetTilt);
    };
  }, [maxTilt]);

  return tiltRef;
};
