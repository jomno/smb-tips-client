"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import { SwiperNextBtn } from "./SwiperNextBtn";
import { SwiperPrevBtn } from "./SwiperPrevBtn";
import "./mainbanner.css";

export default function ClassBanner({ videos }) {
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
      {videos?.map((video) => {
        return (
          <SwiperSlide
            key={`강의배너_${video?.id}`}
            className="aspect-[98/113] mt-2 rounded-lg overflow-hidden"
          >
            <a href={`/videos/${video.id}`}>
              <img
                src={video?.thumbnail_url || ""}
                alt="banner"
                className="object-cover w-full h-full"
              />
            </a>
          </SwiperSlide>
        );
      })}
      <SwiperPrevBtn />
      <SwiperNextBtn />
    </Swiper>
  );
}
