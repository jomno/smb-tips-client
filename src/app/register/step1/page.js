"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <>
      <h1 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        회원가입
      </h1>

      <div className="mx-auto mt-[30px] max-w-[650px] px-4">
        <button
          type="button"
          onClick={() => {
            router.push("/register/parents");
          }}
          className="mt-[30px] flex h-[140px] w-full items-center justify-between rounded-[10px] pl-[25px] pr-[35px] bg-[#F5F5F5]"
        >
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold">학부모</span>
            <span className="mt-[6px] text-start text-sm font-[500] text-[#999999]">
              회원가입하기
            </span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => {
            router.push("/register/child");
          }}
          className="mt-[10px] flex h-[140px] w-full items-center justify-between rounded-[10px] pl-[25px] pr-[35px] bg-[#F5F5F5]"
        >
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold">아이</span>
            <span className="mt-[6px] text-start text-sm font-[500] text-[#999999]">
              회원가입하기
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default RegisterPage;
