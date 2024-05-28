"use client";

import React from "react";
import { FaFire } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { PiVideoFill } from "react-icons/pi";
import { MdCategory } from "react-icons/md";

import ClassBanner from "@/app/home/ClassBanner";
import { sampleSize } from "lodash";

export default function Content() {
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center py-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center">
            <p className="text-[55px] my-2">👍</p>
            <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
              나이스 잡, 솜이맘 님!
            </h5>

            <span class="mt-1 bg-gray-100 text-black text-xs font-bold inline-flex items-center px-2.5 py-0.5 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
              <FaFire class="text-red-500 me-1" />
              27일 연속 공부 중
            </span>
            <div class="mt-4 mb-8 grid grid-cols-3 w-64">
              <div className="flex flex-col items-center">
                <PiVideoFill className="text-4xl text-purple-500" />
                <p className="font-bold">10</p>
              </div>

              <div className="flex flex-col items-center">
                <AiFillFire className="text-4xl text-red-500" />
                <p className="font-bold">27</p>
              </div>

              <div className="flex flex-col items-center">
                <MdCategory className="text-4xl text-green-500" />
                <p className="font-bold">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold">추천 클래스</h1>

        <ClassBanner classBanners={sampleSize(classBanners, 2)} />
      </div>

      <div>
        <h1 className="text-xl font-bold">수강 중인 클래스</h1>

        <ClassBanner classBanners={sampleSize(classBanners, 2)} />
      </div>
    </div>
  );
}
