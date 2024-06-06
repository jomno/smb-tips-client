"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "@/utils/api";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { DefaultTextInput, DefaultAvatarInput } from "@/components/inputs";
import SubmitButton from "../SubmitButton";

import { useRef } from "react";

const Form = ({ role }) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("올바른 이메일 형식이 아닙니다.")
        .required("이메일을 입력해주세요."),
      name: Yup.string().required("이름을 입력해주세요."),
    }),
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("user[email]", values.email);
      formData.append("user[password]", values.password);
      formData.append(
        "user[password_confirmation]",
        values.password_confirmation
      );
      formData.append("user[name]", values.name);
      formData.append("user[role]", role);

      register(formData)
        .then((res) => {
          if (res.status === 200) {
            router.push("/?signup=true");
          }
        })
        .catch((err) => {
          let message;

          if (err.response && err.response.data) {
            message = err.response.data.message;
          } else {
            message = "오류가 발생했습니다. 다시 시도해주세요.";
          }

          Swal.fire({
            icon: "info",
            title: "회원가입에 문제가 발생했습니다.",
            text: message,
            showConfirmButton: true,
          });
        });
    },
  });

  return (
    <form
      className="flex flex-col max-w-md gap-4"
      onSubmit={formik.handleSubmit}
    >
      <DefaultTextInput
        labelName="이메일"
        name="email"
        formik={formik}
      />

      <DefaultTextInput
        labelName="비밀번호"
        name="password"
        formik={formik}
        type="password"
      />

      <DefaultTextInput
        labelName="비밀번호 확인"
        name="password_confirmation"
        formik={formik}
        type="password"
      />

      <DefaultTextInput labelName="이름" name="name" formik={formik} />

      <SubmitButton
        formik={formik}
        text="생성"
        submittingText="생성 중..."
        disabled={!formik.isValid}
      />
    </form>
  );
};

export default Form;
