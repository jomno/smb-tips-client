import RegisterForm from "@/components/register/form";
import { fetcher } from "@/utils/fetcher";
import { cookies } from "next/headers";

async function Page({ searchParams }) {
  return (
    <>
      <h1 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        학부모 회원가입
      </h1>

      <RegisterForm role={"parents"} />
    </>
  );
}

export default Page;
