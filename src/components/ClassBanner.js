"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import { SwiperNextBtn } from "./SwiperNextBtn";
import { SwiperPrevBtn } from "./SwiperPrevBtn";
import "./mainbanner.css";

export default function ClassBanner({ classBanners }) {
  return (
    <Swiper
      autoplay={{
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={2}
      spaceBetween={10}
      loop={true}
      navigation={true}
    >
      {classBanners?.map((banner) => {
        return (
          banner?.is_publish && (
            <SwiperSlide
              key={`강의배너_${banner?.id}`}
              className="aspect-[98/113] mt-2 rounded-lg overflow-hidden"
            >
              <a href={banner?.link}>
                <img
                  src={banner?.url || ""}
                  alt="banner"
                  className="object-cover w-full h-full"
                />
              </a>
            </SwiperSlide>
          )
        );
      })}
      <SwiperPrevBtn />
      <SwiperNextBtn />
    </Swiper>
  );
}
