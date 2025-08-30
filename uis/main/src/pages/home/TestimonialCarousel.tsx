import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Stephenie",
    title: "Founder of Claire’s",
    text: `Our team meetings became more efficient and productive. The AI-powered transcriptions and summaries saved us countless hours, and the action item tracking kept us on top of our tasks. It's been a game-changer for our team!`,
    img: "/asserts/w.png",
  },
  {
    name: "Neha",
    title: "Founder of Altech",
    text: `Team collaboration has significantly improved. With automated meeting transcriptions and concise summaries, we’ve cut down on post-meeting follow-ups. The built-in task tracking ensures everyone stays aligned and accountable.`,
    img: "/asserts/neha.png",
  },
  {
    name: "Akash",
    title: "Founder of Softtech",
    text: `Meetings used to be chaotic, but not anymore. The AI does the heavy lifting—summarizing discussions, capturing key points, and even tracking action items. Now we can focus on getting things done.`,
    img: "/asserts/akash.png",
  },
];

// 🔁 Ensure at least 5 slides for looping
const MIN_SLIDES = 5;
const paddedTestimonials =
  testimonials.length >= MIN_SLIDES
    ? testimonials
    : Array.from({ length: MIN_SLIDES }, (_, i) => testimonials[i % testimonials.length]);

const TestimonialCarousel: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="w-full max-w-[1512px] mx-auto relative">
      <Swiper
        loop={true}
        centeredSlides={true}
        watchSlidesProgress={true}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
        }}
        className="testimonialSwiper pb-[70px]"
      >
        {paddedTestimonials.map((t, index) => (
          <SwiperSlide key={index} className="md:!max-w-[510px]">
            <div className="transition-all duration-300 ease-in-out testimonial-card h-full">
              <div className="flex flex-col h-full p-[20px] gap-[20px] border border-[#E5E7EB] rounded-[20px] bg-white">
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt="Advisor"
                    className="w-[81.6px] h-[81.6px] rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-[4px]">
                    <p className="md:text-[24px] text-[20px] font-['Nunito'] font-semibold leading-[150%] text-black">
                      {t.name}
                    </p>
                    <p className="text-[16px] font-['Inter'] leading-[150%] text-[#A1A1A1]">
                      {t.title}
                    </p>
                  </div>
                </div>
                <p className="md:text-[19.2px] text-[16px] font-normal text-[#000000] font-['Inter']">
                  {t.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="pt-10 flex justify-center w-full items-center gap-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex cursor-pointer items-center justify-center"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 12.6H5" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 19.6L5 12.6L12 5.6" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex cursor-pointer items-center justify-center"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12.6H19" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 5.6L19 12.6L12 19.6" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Slide Styling for desktop */}
      <style>{`
        @media (min-width: 768px) {
          .testimonialSwiper .swiper-slide {
            transition: transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease;
            width: 510px !important;
            transform: scale(0.9);
            opacity: 0.5;
            filter: blur(1px);
          }

          .testimonialSwiper .swiper-slide.swiper-slide-active {
            width: 612px !important;
            transform: scale(1);
            opacity: 1;
            filter: blur(0);
            z-index: 10;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
