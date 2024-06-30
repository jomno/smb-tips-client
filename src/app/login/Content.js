"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, getCurrentUser } from "@/utils/api";

import Swal from "sweetalert2";

import { toast } from "react-toastify";

const Content = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ user: { email, password } })
      .then((res) => {
        if (res.status === 200) {
          toast.success("로그인 되었습니다.", {
            onClose: () => {
              window.location.href = "/";
            },
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "로그인에 실패하였습니다.",
          text: "아이디와 비밀번호를 확인해주세요.",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="flex items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          회원로그인
        </h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={email}
              onChange={handleEmailChange}
            ></input>
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="flex flex-col mt-5">
            <button
              type="submit"
              className="h-[45px] mt-[7px] rounded-[5px] flex justify-center items-center cursor-pointer w-full shadow border bg-black"
            >
              <div className="flex justify-center font-bold text-white">
                로그인
              </div>
            </button>
            <div className="flex mx-auto text-sm font-medium text-gray500 items-center mt-[20px] mb-[24px]">
              <a
                className="ml-auto cursor-pointer"
                onClick={() => {
                  alert("준비 중입니다.");
                }}
              >
                <span>아이디 찾기</span>
              </a>
              <span className="mx-[26px]">|</span>
              <a
                className="cursor-pointer"
                onClick={() => {
                  alert("준비 중입니다.");
                }}
              >
                <span>비밀번호 찾기</span>
              </a>
              <span className="mx-[26px]">|</span>
              <a
                className="mr-auto cursor-pointer"
                onClick={() => {
                  router.push("/register/step1");
                }}
              >
                <span>회원가입</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Content;
