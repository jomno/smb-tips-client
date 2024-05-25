import { useSwiper } from "swiper/react";

export const SwiperNextBtn = () => {
  const swiper = useSwiper();
  return (
    <button
      className="swiper_navigation_btn next"
      type="button"
      onClick={() => swiper.slideNext()}
    ></button>
  );
};
