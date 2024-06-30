import Content from "./Content";

export default async function Page({ searchParams }) {
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
  return <Content classBanners={classBanners} />;
}
