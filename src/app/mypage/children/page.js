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

  return <Content user={user} />;
}
