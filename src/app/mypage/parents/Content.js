"use client";

import React from "react";

import ClassBanner from "@/app/home/ClassBanner";

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
  ResponsiveContainer,
} from "recharts";

import { Avatar } from "flowbite-react";

import { FiEdit3 } from "react-icons/fi";

export default function Content({
  recommendClass,
  watchingClass,
  data01,
  data02,
  data03,
}) {
  // const initialTheme = localStorage?.getItem("theme") || "light";

  const data04 = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

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
            <h1 className="text-lg font-bold text-white">승우맘</h1>
            <p className="text-sm text-gray-400">test@test.com</p>
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
          <span className="text-blue-700">승우</span>의 영역별 선호도 분포
        </h1>
        <div className="flex flex-col items-center justify-center">
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
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold">
          전월 대비 <span className="text-blue-700">승우</span>의 선호도 변화
        </h1>
        <div className="flex flex-col items-center justify-center">
          <RadarChart
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
          </RadarChart>
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
