import Content from "./Content";
import { fetcher } from "@/utils/fetcher";
import { cookies } from "next/headers";

async function getVideo(id) {
  const res = await fetcher(`/videos/${id}`, cookies());

  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function Page({ params, searchParams }) {
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

  const { id } = params;
  const video = await getVideo(id);

  if (!video) {
    return <div>
      <h1>Video not found</h1>

      <a href="/">처음으로 돌아가기</a>
    </div>;
  }

  return <Content classBanners={classBanners} video={video} />;
}
