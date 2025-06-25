import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import leaficon from '../../assets/images/leaficon.png';
import gearanimation from "/videos/gearanimation.mp4";
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollSectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const VIDEO_DURATION = 8;
  const FPS = 24;
  const TOTAL_FRAMES = VIDEO_DURATION * FPS;
  const SCROLL_SECTION_HEIGHT = 5000; // px, adjust as needed

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  useEffect(() => {
    if (!isVideoLoaded) return;
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const video = videoRef.current;
      if (video && video.duration && !isNaN(video.duration)) {
        const clampedProgress = Math.max(0, Math.min(1, latest));
        const currentFrame = Math.floor(clampedProgress * TOTAL_FRAMES);
        const frameTime = currentFrame / FPS;
        if (!video.paused) video.pause();
        if (Math.abs(video.currentTime - frameTime) > 0.01) {
          video.currentTime = frameTime;
        }
      }
    });
    return () => unsubscribe();
  }, [smoothProgress, isVideoLoaded, TOTAL_FRAMES, FPS]);

  return (
    <>
      <div className="w-full max-w-[1004px] px-4 py-6 md:py-8 mx-auto flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="flex items-center gap-2 md:gap-3 bg-blue-100 rounded-3xl px-2 md:px-3">
          <img src={leaficon} alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
          <p className="text-xs text-black font-medium">
            Saving ₹800+ Billion in Energy Losses While Reducing Carbon
            Emissions.
          </p>
        </div>

        <div className="w-full max-w-[870px]">
          <h1 className="text-center leading-[100%] font-extrabold">
            <em className="playfair bg-gradient-to-r text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em] from-black to-[#074FF7] bg-clip-text text-transparent italic">
              Revolutionary
            </em>{' '}
            <span className="body font-medium text-[32px] md:text-[48px] lg:text-[64px] leading-[100%] tracking-[-0.02em] text-center">
              Axial Flux
            </span>
            <br className="hidden sm:block" />
            <span className="body font-medium text-[32px] md:text-[48px] lg:text-[64px] leading-[100%] tracking-[-0.02em] text-center">
              Electric Motors for India's
            </span>
            <br className="hidden sm:block" />
            <span className="body font-medium text-[32px] md:text-[48px] lg:text-[64px] leading-[100%] tracking-[-0.02em] text-center">
              Energy
            </span>{' '}
            <em className="playfair bg-gradient-to-r font-['Playfair'] text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em] from-black to-[#074FF7] bg-clip-text text-transparent italic">
              Future.
            </em>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-5 sm:gap-8 w-full sm:w-auto">
          <Link
            to="./contactus"
            className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-[128px] h-[40px] rounded-sm
            bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
            text-white transition"
          >
            REQUEST DEMO
          </Link>
          <Link
            to="./products"
            className="flex justify-center items-center text-xs sm:text-sm font-semibold w-[187px] sm:w-auto px-6 h-[40px] rounded-md border-2 border-[#074FF7] transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
          >
            EXPLORE PRODUCTS
          </Link>
        </div>
      </div>

    {/* <div className="">
      <video src={gearanimation}/>
    </div> */}
    </>
  );
};

export default Hero;