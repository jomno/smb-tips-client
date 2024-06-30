import Content from "./Content";
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

  if (!user) {
    redirect("/login?msg=로그인이 필요합니다.");
    return null;
  }

  if (user.role !== "child") {
    redirect("/?msg=role_parent");
    return null;
  }

  const videos = await getVideos("child");
  let classBanners = [];

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

  return <Content user={user} classBanners={classBanners} />;
}
