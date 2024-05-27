"use client";

import { useState, forwardRef, useEffect, useRef } from "react";
import { Label, TextInput, FileInput, Textarea, Select } from "flowbite-react";
import Image from "next/image";
import DeleteFileIcon from "@public/delete_file.svg";
import { CgMathPlus } from "react-icons/cg";

const DefaultTextInput = ({
  name,
  labelName,
  formik,
  type = "text",
  ...rest
}) => {
  const fieldValue = formik.values[name];

  return (
    <div>
      <div className="block mb-2">
        <Label htmlFor={name} value={labelName} />
      </div>
      <TextInput
        id={name}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={fieldValue}
        {...rest}
      />

      {formik.touched[name] && formik.errors[name] ? (
        <p className="mt-1 text-xs text-red-500">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};

const FieldArrayTextInput = ({
  name,
  labelName,
  formik,
  type = "text",
  ...rest
}) => {
  const rootName = name.split(".")[0];
  const index = name.split(".")[1];
  const last = name.split(".")[2];

  const fieldValue = formik.values[rootName][index][last];

  return (
    <div>
      <div className="block mb-2">
        <Label htmlFor={name} value={labelName} />
      </div>
      <TextInput
        id={name}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={fieldValue}
        {...rest}
      />
    </div>
  );
};

const DefaultAvatarInput = forwardRef(
  ({ name, labelName, formik, defaultPreviewImage = null, ...rest }, ref) => {
    const [avatarImage, setAvatarImage] = useState(null);

    const defaultProfileUrl = () => {
      if (defaultPreviewImage) {
        return defaultPreviewImage;
      }
      return "/images/default_profile.svg";
    };

    return (
      <>
        <div
          className="relative inline-block cursor-pointer"
          onClick={() => {
            ref.current.click();
          }}
        >
          <div className="mb-2 text-sm font-medium text-center text-gray-900 dark:text-white">
            {labelName}
          </div>
          <img
            className="inline-block object-cover w-20 h-20 bg-gray-100 rounded-full dark:bg-gray-600"
            src={
              (formik.values[name] &&
                URL.createObjectURL(formik.values[name])) ||
              defaultProfileUrl()
            }
            alt="Profile image"
          />

          <div className="absolute bottom-0 right-0 z-40 inline-block bg-white border rounded-full">
            <CgMathPlus size={"1.2em"} />
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          name={name}
          ref={ref}
          accept="image/*"
          onChange={(e) => {
            formik.setFieldValue(name, e.target.files[0]);
          }}
          {...rest}
        />
      </>
    );
  }
);

const DefaultFileInput = forwardRef(
  ({ name, labelName, formik, defaultPreviewImage = null, ...rest }, ref) => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleChange = (e) => {
      const file = e.target.files[0];
      formik.setFieldValue(name, file);
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
      } else {
        setPreviewImage(null);
      }
    };

    const handleDelete = () => {
      ref.current.value = "";
      formik.setFieldValue(name, null);
      setPreviewImage(null);
    };

    return (
      <div>
        <div className="block mb-2">
          <Label htmlFor={name} value={labelName} />
        </div>
        <FileInput
          id={name}
          name={name}
          ref={ref}
          onChange={handleChange}
          {...rest}
        />
        {previewImage ? (
          <div className="relative mt-2">
            <Image
              src={previewImage}
              alt="프로필 이미지"
              width={800}
              height={400}
            />
            <button
              type="button"
              onClick={handleDelete}
              className="absolute top-[10px] right-[10px]"
            >
              <DeleteFileIcon alt="삭제 로고" />
            </button>
          </div>
        ) : (
          defaultPreviewImage && (
            <>
              <div className="relative mt-4">
                <Image
                  src={defaultPreviewImage}
                  alt="프로필 이미지"
                  width={800}
                  height={400}
                />
              </div>
            </>
          )
        )}
      </div>
    );
  }
);

const DefaultTextarea = ({ name, labelName, formik, ...rest }) => {
  const fieldValue = formik.values[name];

  return (
    <div>
      <div className="block mb-2">
        <Label htmlFor={name} value={labelName} />
      </div>
      <Textarea
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={fieldValue}
        {...rest}
      />

      {formik.touched[name] && formik.errors[name] ? (
        <p className="mt-1 text-xs text-red-500">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};

const DefaultIconInput = ({
  name,
  labelName,
  type = "text",
  formik,
  icon,
  ...rest
}) => {
  const fieldValue = formik.values[name];

  return (
    <div>
      <div className="block mb-2">
        <Label htmlFor={name} value={labelName} />
      </div>
      <TextInput
        id={name}
        name={name}
        type={type}
        icon={icon}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={fieldValue}
        {...rest}
      />

      {formik.touched[name] && formik.errors[name] ? (
        <p className="mt-1 text-xs text-red-500">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};

const DefaultSelectInput = ({
  name,
  labelName,
  formik,
  options,
  placeholder = "선택",
  ...rest
}) => {
  const fieldValue = formik.values[name];

  return (
    <div>
      <div className="block mb-2">
        <Label htmlFor={name} value={labelName} />
      </div>
      <Select
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={fieldValue}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      {formik.touched[name] && formik.errors[name] ? (
        <p className="mt-1 text-xs text-red-500">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};

export {
  DefaultTextInput,
  FieldArrayTextInput,
  DefaultAvatarInput,
  DefaultFileInput,
  DefaultTextarea,
  DefaultIconInput,
  DefaultSelectInput,
};
