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

async function getVideo(id) {
  const res = await fetcher(`/videos/${id}`, cookies());

  if (!res.ok) {
    return null;
  }
  return res.json();
}

const getRecommendVideos = async () => {
  const res = await fetcher("/videos/recommended", cookies());

  if (!res.ok) {
    return [];
  }

  return res.json();
};

export default async function Page({ params, searchParams }) {
  const { id } = params;
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div>
        <h1>로그인이 필요합니다</h1>

        <a href="/login">로그인하러 가기</a>
      </div>
    );
  }
  const video = await getVideo(id);
  const recommendVideos = await getRecommendVideos();

  if (!video) {
    return (
      <div>
        <h1>Video not found</h1>

        <a href="/">처음으로 돌아가기</a>
      </div>
    );
  }

  return <Content recommendVideos={recommendVideos} video={video} />;
}
