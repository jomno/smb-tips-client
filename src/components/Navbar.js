"use client";

import MenuIcon from "@public/icons/menu.svg";
import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { logout } from "@/utils/api";
import { toast } from "react-toastify";

export default function Component({ currentUser }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl py-2 mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/icons/nav_logo.png"
            className="max-w-[189px]"
            alt="Flowbite Logo"
          />
        </a>
        <Dropdown
          label="Dropdown"
          renderTrigger={() => (
            <div className="cursor-pointer">
              <MenuIcon />
            </div>
          )}
        >
          {currentUser ? (
            <Dropdown.Item
              onClick={() => {
                logout().then((res) => {
                  toast.success("로그아웃 되었습니다.", {
                    onClose: () => {
                      window.location.href = "/";
                    },
                  });
                });
              }}
            >
              로그아웃
            </Dropdown.Item>
          ) : (
            <>
              <Dropdown.Item onClick={() => router.push("/login")}>
                로그인/회원가입
              </Dropdown.Item>
            </>
          )}

          <Dropdown.Item onClick={() => alert("구독하기")}>
            구독하기
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              router.push("/survey/parents");
            }}
          >
            설문조사 - 부모
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              router.push("/survey/child");
            }}
          >
            설문조사 - 아이
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              router.push("/mypage/parents");
            }}
          >
            마이페이지 - 부모
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              router.push("/mypage/children");
            }}
          >
            마이페이지 - 아이
          </Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  );
}
