"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";

import ClassBanner from "@/components/ClassBanner";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Avatar } from "flowbite-react";

import { FiEdit3 } from "react-icons/fi";

export default function Content({
  recommendClass,
  watchingClass,
  data01,
  data02,
  data03,
  user,
}) {
  // const initialTheme = localStorage?.getItem("theme") || "light";

  const [theme, setTheme] = useState(
    isCreatedAtOlderThanOneMonth(user) ? "enough" : "not-enough"
  );

  function isCreatedAtOlderThanOneMonth(user) {
    const currentDate = dayjs();
    const createdAt = dayjs(user.created_at);

    const monthDifference = currentDate.diff(createdAt, "month");

    console.log("monthDifference", monthDifference);

    return monthDifference >= 1;
  }

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
    name,
  }) => {
    const RADIAN = Math.PI / 180;

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: "10px", fontWeight: "bold" }}
      >
        {name}
      </text>
    );
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="w-full bg-[#232339] flex flex-row py-2 px-4 rounded">
          <Avatar rounded />

          <div className="flex flex-col ml-4">
            <h1 className="text-lg font-bold text-white">{user.name}</h1>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>

          <div className="flex flex-row ml-auto">
            <button className="text-white">
              <FiEdit3 />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">
          {new Date().getMonth() + 1}월{" "}
          <span className="text-blue-700">자녀</span>의 영역별 선호도 분포
        </h1>
        <div className="flex flex-col items-center justify-center">
          {theme === "enough" ? (
            <PieChart width={600} height={400}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color}>
                    {entry.name}
                  </Cell>
                ))}
              </Pie>
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={150}
                label={(entry) => entry.name}
              >
                {data02.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          ) : (
            <div className="p-4 mt-4 bg-red-500 rounded">
              <p className="text-white">현재 자녀의 선호도 데이터가 부족합니다.</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold">
          전월 대비 <span className="text-blue-700">자녀</span>의 선호도 변화
        </h1>
        <div className="flex flex-col items-center justify-center">
          {
            theme === "enough" ? (<RadarChart
            width={600}
            height={500}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data03}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name={`${new Date().getMonth()}월`}
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name={`${new Date().getMonth() + 1}월`}
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>) : (
            <div className="p-4 mt-4 bg-red-500 rounded">
              <p className="text-white">현재 자녀의 선호도 데이터가 부족합니다.</p>
            </div>
          )
          }
          
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">추천 클래스</h1>

        <ClassBanner classBanners={recommendClass} />
      </div>
      <div>
        <h1 className="text-xl font-bold">수강 중인 클래스</h1>

        <ClassBanner classBanners={watchingClass} />
      </div>
    </div>
  );
}
