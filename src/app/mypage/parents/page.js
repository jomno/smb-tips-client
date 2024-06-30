import Content from "./Content";
import { sampleSize } from "lodash";

import { fetcher } from "@/utils/fetcher";
import { cookies } from "next/headers";

async function getCurrentUser() {
  const res = await fetcher("/current_user", cookies());

  if (!res.ok) {
    return null;
  }
  return res.json();
}

const getVideos = async (type = "all") => {
  const res = await fetcher(`/videos?type=${type}`, cookies());

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export default async function Page({ searchParams }) {
  const user = await getCurrentUser();
  let classBanners = [];

  if (user.role !== "parents") {
    redirect("/?msg=role_parent");
    return null;
  }

  const videos = await getVideos("parents");

  if (videos === null || videos?.length < 6) {
    classBanners = [
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
  } else {
    classBanners = videos.map((video) => ({
      id: video.id,
      url: video.thumbnail_url,
      link: `/videos/${video.id}`,
      is_publish: true,
    }));
  }

  const data01 = [
    { name: "기초 영역", value: 70, color: "#0088FE" },
    { name: "학습 역량", value: 100, color: "#00C49F" },
    { name: "과학", value: 50, color: "#FFBB28" },
    { name: "기술/공학", value: 100, color: "#FF8042" },
    { name: "인문", value: 100, color: "#8D6EFF" },
    { name: "사회", value: 100, color: "#725B2D" },
    { name: "예체능/기타", value: 100, color: "#97AAE0" },
  ];
  const data02 = [
    { name: "수학", value: 10, color: "#0088FE" },
    { name: "영어", value: 20, color: "#0088FE" },
    { name: "국어", value: 20, color: "#0088FE" },
    { name: "S/W", value: 20, color: "#0088FE" },
    { name: "공부법", value: 40, color: "#00C49F" },
    { name: "문해력", value: 30, color: "#00C49F" },
    { name: "글쓰기", value: 10, color: "#00C49F" },
    { name: "자기경영", value: 20, color: "#00C49F" },
    { name: "물리", value: 10, color: "#FFBB28" },
    { name: "생물", value: 10, color: "#FFBB28" },
    { name: "화학", value: 10, color: "#FFBB28" },
    { name: "지구과학", value: 20, color: "#FFBB28" },
    { name: "항공/우주", value: 40, color: "#FF8042" },
    { name: "로봇/기계", value: 30, color: "#FF8042" },
    { name: "건축/교통", value: 10, color: "#FF8042" },
    { name: "의학", value: 20, color: "#FF8042" },
    { name: "역사", value: 40, color: "#8D6EFF" },
    { name: "철학", value: 30, color: "#8D6EFF" },
    { name: "문학", value: 10, color: "#8D6EFF" },
    { name: "예술/종교", value: 20, color: "#8D6EFF" },
    { name: "정치/법", value: 40, color: "#725B2D" },
    { name: "경제/경영", value: 30, color: "#725B2D" },
    { name: "지리/문화", value: 10, color: "#725B2D" },
    { name: "언론/미디어", value: 20, color: "#725B2D" },
    { name: "스포츠", value: 40, color: "#97AAE0" },
    { name: "음악", value: 30, color: "#97AAE0" },
    { name: "그림/디자인", value: 10, color: "#97AAE0" },
    { name: "메이커활동", value: 20, color: "#97AAE0" },
  ];

  const data03 = [
    {
      subject: "기초 영역",
      A: 20,
      B: 70,
      fullMark: 100,
    },
    {
      subject: "학습 역량",
      A: 100,
      B: 100,
      fullMark: 100,
    },
    {
      subject: "과학",
      A: 20,
      B: 50,
      fullMark: 100,
    },
    {
      subject: "기술/공학",
      A: 99,
      B: 100,
      fullMark: 100,
    },
    {
      subject: "인문",
      A: 85,
      B: 90,
      fullMark: 100,
    },
    {
      subject: "사회",
      A: 65,
      B: 80,
      fullMark: 100,
    },
    {
      subject: "예체능/기타",
      A: 65,
      B: 77,
      fullMark: 100,
    },
  ];

  return (
    <Content
      recommendclassName={sampleSize(classBanners, 2)}
      watchingclassName={sampleSize(classBanners, 2)}
      data01={data01}
      data02={data02}
      data03={data03}
    />
  );
}
