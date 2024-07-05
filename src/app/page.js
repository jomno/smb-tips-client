import { fetcher } from "@/utils/fetcher";
import { cookies } from "next/headers";
import Home from "@/app/home/Home";

import NavRoot from "@/components/NavRoot";

const getCurrentUser = async () => {
  const res = await fetcher("/current_user", cookies());

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const getVideos = async (type = "all") => {
  const res = await fetcher(`/videos?type=${type}`, cookies());

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const getRecommendVideos = async () => {
  const res = await fetcher("/videos/recommended", cookies());

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function Page({ searchParams }) {
  const currentUser = await getCurrentUser();
  let videoType = currentUser?.role || "all";
  const videos = await getVideos(videoType);
  const recommendVideos = await getRecommendVideos();

  console.log(recommendVideos);


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
    <>
      <NavRoot />
      <Home
        currentUser={currentUser}
        recommendVideos={recommendVideos}
        mainBanners={mainBanners}
        videos={videos}
      />
      ;
    </>
  );
}
