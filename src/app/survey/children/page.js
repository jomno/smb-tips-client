import Content from "./Content";

export default async function Page({ searchParams }) {
  const categories = {
    basic: {
      label: "기초 영역",
      options: ["수학", "영어", "국어", "S/W"],
    },
    study: {
      label: "학습 역량",
      options: ["공부법", "문해력", "글쓰기", "자기경영"],
    },
    science: {
      label: "과학",
      options: ["물리", "생물", "화학", "지구과학"],
    },
    architecture: {
      label: "기술/공학",
      options: ["항공/우주", "로봇/기계", "건축/교통", "의학"],
    },
    humanities: {
      label: "인문",
      options: ["역사", "철학", "문학", "예술/종교"],
    },
    society: {
      label: "사회",
      options: ["정치/법", "경제/경영", "지리/문화", "언론/미디어"],
    },
    art: {
      label: "예체능/기타",
      options: ["스포츠", "음악", "그림/디자인", "메이커활동"],
    },
  };

  return <Content categories={categories} />;
}