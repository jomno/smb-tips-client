"use client";

import { Alert, Label, Select, Button, Radio } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { createParentsSurvey } from "@/utils/api";

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
    validationSchema: Yup.object({
      first_question: Yup.string().required("필수 항목입니다."),
      second_question: Yup.string().required("필수 항목입니다."),
      third_basic: Yup.string().required("필수 항목입니다."),
      third_study: Yup.string().required("필수 항목입니다."),
      third_science: Yup.string().required("필수 항목입니다."),
      third_architecture: Yup.string().required("필수 항목입니다."),
      third_humanities: Yup.string().required("필수 항목입니다."),
      third_society: Yup.string().required("필수 항목입니다."),
      third_art: Yup.string().required("필수 항목입니다."),
      fourth_basic: Yup.string().required("필수 항목입니다."),
      fourth_study: Yup.string().required("필수 항목입니다."),
      fourth_science: Yup.string().required("필수 항목입니다."),
      fourth_architecture: Yup.string().required("필수 항목입니다."),
      fourth_humanities: Yup.string().required("필수 항목입니다."),
      fourth_society: Yup.string().required("필수 항목입니다."),
      fourth_art: Yup.string().required("필수 항목입니다."),
      fifth_basic: Yup.string().required("필수 항목입니다."),
      fifth_study: Yup.string().required("필수 항목입니다."),
      fifth_science: Yup.string().required("필수 항목입니다."),
      fifth_architecture: Yup.string().required("필수 항목입니다."),
      fifth_humanities: Yup.string().required("필수 항목입니다."),
      fifth_society: Yup.string().required("필수 항목입니다."),
      fifth_art: Yup.string().required("필수 항목입니다."),
    }),
    onSubmit: (values) => {
      createParentsSurvey(values)
        .then((res) => {
          Swal.fire({
            title: "설문이 제출되었습니다.",
            icon: "success",
          }).then(() => {
            window.location.href = "/";
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "설문 제출에 실패했습니다.",
            text: error.response.data.message,
            icon: "error",
          });
        });
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

          {formik.touched[`first_question`] && formik.errors.first_question && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.first_question}
            </p>
          )}
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
          {formik.touched[`second_question`] &&
            formik.errors.second_question && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.second_question}
              </p>
            )}
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
                  value={`${value.label} (${value.options.join(", ")})`}
                  className="text-gray-500"
                />
              </div>

              <Select
                id={key}
                name={`third_${key}`}
                defaultValue={""}
                onChange={formik.handleChange}
              >
                <option disabled value="">
                  선택
                </option>
                {value.options.map((option, index) => (
                  <option key={index} value={index}>
                    {option}
                  </option>
                ))}
              </Select>

              {formik.touched[`third_${key}`] &&
                formik.errors[`third_${key}`] && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors[`third_${key}`]}
                  </p>
                )}
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
                  value={`${value.label} (${value.options.join(", ")})`}
                  className="text-gray-500"
                />
              </div>

              <Select
                id={key}
                name={`fourth_${key}`}
                defaultValue={""}
                onChange={formik.handleChange}
              >
                <option disabled value="">
                  선택
                </option>
                <option value="1">아주 낮음</option>
                <option value="2">낮음</option>
                <option value="3">보통</option>
                <option value="4">높음</option>
                <option value="5">아주 높음</option>
              </Select>

              {formik.touched[`fourth_${key}`] &&
                formik.errors[`fourth_${key}`] && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors[`fourth_${key}`]}
                  </p>
                )}
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
                  value={`${value.label} (${value.options.join(", ")})`}
                  className="text-gray-500"
                />
              </div>

              <Select
                id={key}
                name={`fifth_${key}`}
                defaultValue={""}
                onChange={formik.handleChange}
              >
                <option disabled value="">
                  선택
                </option>
                <option value="1">아주 낮음</option>
                <option value="2">낮음</option>
                <option value="3">보통</option>
                <option value="4">높음</option>
                <option value="5">아주 높음</option>
              </Select>

              {formik.touched[`fifth_${key}`] &&
                formik.errors[`fifth_${key}`] && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors[`fifth_${key}`]}
                  </p>
                )}
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
