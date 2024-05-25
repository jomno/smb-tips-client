import Image from "next/image";
import Home from "@/app/home/Home";

export default async function Page({ searchParams }) {
  // 로그인 기능 개발 후 지워짐.. 지금은 더미 데이터
  const isLogin = searchParams?.isLogin === "true" ? true : false;

  return <Home isLogin={isLogin} />;
}
