"use client";

import React from "react";
import { FaFire } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { PiVideoFill } from "react-icons/pi";
import { MdCategory } from "react-icons/md";

import ClassBanner from "@/components/ClassBanner";
import { sampleSize } from "lodash";

import dayjs from "dayjs";

export default function Content({ user, videos, recommendVideos }) {
  function getDaysPassedSinceCreation(user) {
    const currentDate = dayjs();
    const createdAt = dayjs(user.created_at);

    const daysDifference = currentDate.diff(createdAt, "day");

    return daysDifference;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center py-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center">
            <p className="text-[55px] my-2">👍</p>
            <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
              나이스 잡, {user?.name} 님!
            </h5>

            <span className="mt-1 bg-gray-100 text-black text-xs font-bold inline-flex items-center px-2.5 py-0.5 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
              <FaFire className="text-red-500 me-1" />
              {getDaysPassedSinceCreation(user)}일 연속 공부 중
            </span>
            <div className="grid w-64 grid-cols-3 mt-4 mb-8">
              <div className="flex flex-col items-center">
                <PiVideoFill className="text-4xl text-purple-500" />
                <p className="font-bold">
                  {getDaysPassedSinceCreation(user) > 0 ? 2 : 0}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <AiFillFire className="text-4xl text-red-500" />
                <p className="font-bold">{getDaysPassedSinceCreation(user)}</p>
              </div>

              <div className="flex flex-col items-center">
                <MdCategory className="text-4xl text-green-500" />
                <p className="font-bold">
                  {getDaysPassedSinceCreation(user) > 0 ? 4 : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold">추천 클래스</h1>

        <ClassBanner videos={recommendVideos} />
      </div>

      <div>
        <h1 className="text-xl font-bold">수강 중인 클래스</h1>

        <ClassBanner videos={videos} />
      </div>
    </div>
  );
}
