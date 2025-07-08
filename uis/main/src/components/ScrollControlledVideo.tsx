import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useMemo, useRef } from "react";

const ScrollVideo = () => {
    const videoRef = useRef(null);

    const {scrollYProgress} = useScroll({target : videoRef, offset: ['center end', 'start start']});

    const images = useMemo(()=>{
        const loadedImages : HTMLImageElement[] = [];

        for(let i = 1; i<= 63; i++){
            const img = new Image();
            img.src = `/images/${i}.webp`;
            loadedImages.push(img);
        }

        return loadedImages;
    }, [])
 
    const currentIndex = useTransform(scrollYProgress, [0,1], [1,63]);

    const render = useCallback((index : number)=>{
        if(images[index-1]){
            videoRef.current?.getContext('2d')?.drawImage(images[index - 1] , 0, 0)
        }
    },[])

    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(Number(latest.toFixed()))
    })

    return (
        <>
        <div className="video-container h-[2000px] bg-gray-500 flex items-center justify-center">
            <div className= "h-[500px]"/>
            <motion.canvas
            ref={videoRef}
            className="video-canvas"
            width={1000}
            height={1000}
            >

            </motion.canvas>
        </div>
        </>
    )
    ;
};


export default ScrollVideo;
