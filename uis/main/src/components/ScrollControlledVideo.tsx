import { useEffect, useMemo, useRef, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const ScrollVideo = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  // Load all frames as images (1 to 63)
  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 63; i++) {
      const img = new Image();
      img.src = `/images/${i}.webp`; // Must be in public/images/
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  // Get canvas 2D context after mount
  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext("2d");
    }
  }, []);

  // Setup scroll tracking on the canvas section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Convert scrollYProgress (0–1) → image index (1–63)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 63]);

  // Draw the image on canvas
  const render = useCallback(
    (index: number) => {
      const img = images[Math.floor(index) - 1];
      if (img && img.complete && contextRef.current) {
        contextRef.current.clearRect(0, 0, 1000, 1000);
        contextRef.current.drawImage(img, 0, 0, 1000, 1000);
      }
    },
    [images]
  );

  // Listen to scroll progress and draw the right frame
  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(latest);
  });

  return (
    <div
      ref={containerRef}
      className="h-[2000px] flex items-center justify-center bg-gray-500"
    >
      <canvas
        ref={canvasRef}
        className="video-canvas"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default ScrollVideo;
