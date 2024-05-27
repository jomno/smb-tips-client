"use client";

import { useState, useEffect } from "react";
import { DefaultSelectInput } from "@/components/inputs";
import { Alert, Label, Select, Button, Radio } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useFormik } from "formik";

export default function Content({ categories }) {
  const formik = useFormik({
    initialValues: {
      first_basic: "",
      first_study: "",
      first_science: "",
      first_architecture: "",
      first_humanities: "",
      first_society: "",
      first_art: "",
      second_basic: "",
      second_study: "",
      second_science: "",
      second_architecture: "",
      second_humanities: "",
      second_society: "",
      second_art: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Alert type="info" className="mt-2 mb-4">
        <p className="text-sm">
          해당 설문조사는 선호하는 콘텐츠 정보를 습득하고 추천해주기 위한
          설문입니다.
        </p>
        <p className="text-sm">
          아래의 설문에 참석해주시면 보다 정확한 추천을 받을 수 있습니다.
        </p>
      </Alert>

      <form onSubmit={formik.handleSubmit}>
        <div className="mt-2">
          <h3 className="text-base">
            <span className="font-bold">1. </span>아래 항목중 가장 좋아하는
            과목은 무엇인가요?
          </h3>

          {Object.entries(categories).map(([key, value], index) => (
            <div className="mt-1" key={index}>
              <div className="block mb-1">
                <Label
                  htmlFor={key}
                  value={`${value.label} (${value.options.join(", ")})`}
                  className="text-gray-500"
                />
              </div>

              <Select id={key} name={`first_${key}`} defaultValue={""}>
                <option disabled value="">
                  선택
                </option>
                {value.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="text-base">
            <span className="font-bold">2. </span>1번 문항의 선택에 대한 가장
            <span className="font-bold"> 흥미</span>가 높은 과목을 체크해주세요.
          </h3>

          {Object.entries(categories).map(([key, value], index) => (
            <div className="mt-1" key={index}>
              <div className="block mb-1">
                <Label
                  htmlFor={key}
                  value={`${value.label} (${value.options.join(", ")})`}
                  className="text-gray-500"
                />
              </div>

              <Select id={key} name={`fifth_${key}`} defaultValue={""}>
                <option disabled value="">
                  선택
                </option>
                <option value="1">아주 낮음</option>
                <option value="2">낮음</option>
                <option value="3">보통</option>
                <option value="4">높음</option>
                <option value="5">아주 높음</option>
              </Select>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 z-0 py-4 bg-white">
          <Button type="submit" className="w-full">
            제출하기
          </Button>
        </div>
      </form>
    </>
  );
}
