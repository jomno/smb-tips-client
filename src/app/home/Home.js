"use client";

import React from "react";
import Navbar from "@/components/Navbar";

import MainBanner from "./MainBanner";
import ClassBanner from "./ClassBanner";

import { sampleSize } from "lodash";

export default function Home({ isLogin }) {
  const initialTheme = localStorage?.getItem("theme") || "light";
  const mainBanners = [
    {
      id: 1,
      url: "/banners/main_banner_1.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 2,
      url: "/banners/main_banner_2.jpg",
      link: "/",
      is_publish: true,
    },
  ];

  const classBanners = [
    {
      id: 1,
      url: "/class/class1.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 2,
      url: "/class/class2.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 3,
      url: "/class/class3.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 4,
      url: "/class/class4.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 5,
      url: "/class/class5.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 6,
      url: "/class/class6.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 7,
      url: "/class/class7.png",
      link: "/",
      is_publish: true,
    },
    {
      id: 8,
      url: "/class/class8.png",
      link: "/",
      is_publish: true,
    },
  ];
  return (
    <div>
      <Navbar />
      <MainBanner mainBanners={mainBanners} />

      <div className="flex flex-col gap-2">
        {isLogin ? (
          <>
            <div>
              <h1 className="mt-2 text-xl font-bold">
                <span className="text-[#00a2d0]">윤태진</span>님 추천 클래스
              </h1>

              <ClassBanner classBanners={sampleSize(classBanners, 3)} />
            </div>

            <div>
              <h1 className="mt-2 text-xl font-bold">
                <span className="text-[#00a2d0]">윤태진</span>님 시청 클래스
              </h1>

              <ClassBanner classBanners={sampleSize(classBanners, 3)} />
            </div>
          </>
        ) : (
          <div>
            <h1 className="mt-2 text-xl font-bold">스몰빅 오리지널 클래스</h1>

            <ClassBanner classBanners={sampleSize(classBanners, 3)} />
          </div>
        )}

        <div>
          <h1 className="text-xl font-bold">
            SMALLBIG <span className="text-red-600">TOP5</span> CLASS
          </h1>

          <ClassBanner classBanners={sampleSize(classBanners, 3)} />
        </div>

        <div>
          <h1 className="text-xl font-bold">
            스몰빅 오리지널 <span className="text-base">with</span>{" "}
            <span className="">학부모님</span>
          </h1>

          <ClassBanner classBanners={sampleSize(classBanners, 3)} />
        </div>
      </div>
    </div>
  );
}
