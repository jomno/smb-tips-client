import { fetcher } from "@/utils/fetcher";
import { cookies } from "next/headers";

import Navbar from "@/components/Navbar";

const getCurrentUser = async () => {
  const res = await fetcher("/current_user", cookies());

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export default async function NavRoot() {
  const currentUser = await getCurrentUser();

  return <Navbar currentUser={currentUser} />;
}
