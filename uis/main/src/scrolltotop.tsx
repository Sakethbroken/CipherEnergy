import { useEffect, RefObject } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  scrollRef: RefObject<HTMLDivElement>;
};

const ScrollToTop = ({ scrollRef }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
