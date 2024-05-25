"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./mainbanner.css";

export default function MainBanner({ mainBanners }) {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      pagination={{ clickable: false }}
    >
      {mainBanners?.map((banner) => {
        return (
          banner?.is_publish && (
            <SwiperSlide
              key={`메인배너_${banner?.id}`}
              className="aspect-[1195/980] mt-2 rounded-lg overflow-hidden"
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
    </Swiper>
  );
}
