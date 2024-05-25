import { useSwiper } from "swiper/react";

export const SwiperPrevBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      className="swiper_navigation_btn prev"
      type="button"
      onClick={() => swiper.slidePrev()}
    ></button>
  );
};
