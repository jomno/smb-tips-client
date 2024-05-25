"use client";

import React from "react";
import Navbar from "@/components/Navbar";

import MainBanner from "./MainBanner";

export default function Home() {
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
  return (
    <div>
      <Navbar />
      <MainBanner mainBanners={mainBanners} />
    </div>
  );
}
