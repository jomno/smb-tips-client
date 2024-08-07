"use client";

import React from "react";

import MainBanner from "@/components/MainBanner";
import ClassBanner from "@/components/ClassBanner";

import { sampleSize } from "lodash";

export default function Home({ currentUser, mainBanners, videos, recommendVideos }) {
  const initialTheme = localStorage?.getItem("theme") || "light";

  return (
    <div>
      <MainBanner mainBanners={mainBanners} />

      <div className="flex flex-col gap-4">
        {currentUser ? (
          <>
            <div>
              <h1 className="mt-4 text-xl font-bold">
                <span className="text-[#00a2d0]">{currentUser?.name}</span>님
                추천 클래스
              </h1>

              <ClassBanner videos={recommendVideos} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                <span className="text-[#00a2d0]">{currentUser?.name}</span>님
                시청 클래스
              </h1>

              <ClassBanner videos={videos} />
            </div>
          </>
        ) : (
          <div>
            <h1 className="mt-4 text-xl font-bold">스몰빅 오리지널 클래스</h1>

            <ClassBanner videos={videos} />
          </div>
        )}

        <div>
          <h1 className="text-xl font-bold">
            SMALLBIG <span className="text-red-600">TOP5</span> CLASS
          </h1>

          <ClassBanner videos={videos} />
        </div>
      </div>
    </div>
  );
}
