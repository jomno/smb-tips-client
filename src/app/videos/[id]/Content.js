"use client";

import ReactPlayer from "react-player";
import ClassBanner from "@/components/ClassBanner";
import { sampleSize } from "lodash";

export default function Content({ classBanners, video }) {
  // const initialTheme = localStorage?.getItem("theme") || "light";
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{video.title}</h1>
      <div className="relative pt-[56.25%]">
        <ReactPlayer
          url={video.url}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          controls
          playsinline
          controlsList="nodownload"
        />
      </div>

      <div>
        <h1 className="mt-4 text-xl font-bold">
          <span className="text-[#00a2d0]">추천 클래스</span>
        </h1>

        <ClassBanner classBanners={sampleSize(classBanners, 3)} />
      </div>
    </div>
  );
}
