"use client";

import { useState, useEffect } from "react";
import { DefaultSelectInput } from "@/components/inputs";
import { Alert, Label, Select, Button, Radio } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useFormik } from "formik";

export default function Content({ categories }) {
  const formik = useFormik({
    initialValues: {
      first_question: "",
      second_question: "",
      third_basic: "",
      third_study: "",
      third_science: "",
      third_architecture: "",
      third_humanities: "",
      third_society: "",
      third_art: "",
      fourth_basic: "",
      fourth_study: "",
      fourth_science: "",
      fourth_architecture: "",
      fourth_humanities: "",
      fourth_society: "",
      fourth_art: "",
      fifth_basic: "",
      fifth_study: "",
      fifth_science: "",
      fifth_architecture: "",
      fifth_humanities: "",
      fifth_society: "",
      fifth_art: "",
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
            <span className="font-bold">1. </span>학부모로써 자녀를 위해
            관심있는 항목에 대해 체크해주세요.
          </h3>

          <Select
            id="first_question"
            name="first_question"
            className="mt-2"
            defaultValue={""}
            onChange={formik.handleChange}
          >
            <option disabled value="">
              선택
            </option>
            {Object.entries(categories).map(([key, value], index) => (
              <option key={index} value={key}>
                {value.label} ({value.options.join(", ")})
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-4">
          <h3 className="text-base">
            <span className="font-bold">2. </span>자녀가 더 관심을 가져주었으면
            하는 항목을 체크해주세요.
          </h3>

          <Select
            id="second_question"
            name="second_question"
            className="mt-2"
            defaultValue={""}
            onChange={formik.handleChange}
          >
            <option disabled value="">
              선택
            </option>
            {Object.entries(categories).map(([key, value], index) => (
              <option key={index} value={key}>
                {value.label} ({value.options.join(", ")})
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-4">
          <h3 className="text-base">
            <span className="font-bold">3. </span>현재 자녀의 각 아래 항목에
            대한 가장
            <span className="font-bold"> 흥미</span>가 높은 영역을 체크해주세요.
          </h3>

          {Object.entries(categories).map(([key, value], index) => (
            <div className="mt-1" key={index}>
              <div className="block mb-1">
                <Label
                  htmlFor={key}
                  value={value.label}
                  className="text-gray-500"
                />
              </div>

              <Select id={key} name={`third_${key}`} defaultValue={""}>
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
            <span className="font-bold">4. </span>3번 문항에 선택한 항목에 대해
            현재 자녀의 아래 항목에 대한{" "}
            <span className="font-bold">성취도</span>를 체크해주세요.
          </h3>
          {Object.entries(categories).map(([key, value], index) => (
            <div className="mt-1" key={index}>
              <div className="block mb-1">
                <Label
                  htmlFor={key}
                  value={value.label}
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

        <div className="mt-4">
          <h3 className="text-base">
            <span className="font-bold">5. </span>3번 문항에 선택한 항목에 대해
            현재 자녀가 아래 항목에 대해 느끼는{" "}
            <span className="font-bold">자신감</span>의 정도를 체크해주세요.
          </h3>
          {Object.entries(categories).map(([key, value], index) => (
            <div className="mt-1" key={index}>
              <div className="block mb-1">
                <Label
                  htmlFor={key}
                  value={value.label}
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
