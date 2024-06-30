"use client";
import { Button } from "flowbite-react";

const SubmitButton = ({ text, submittingText, formik, ...props }) => {
  return (
    <>
      {formik.isSubmitting ? (
        <Button disabled>{submittingText}</Button>
      ) : (
        <Button type="submit" {...props}>
          {text}
        </Button>
      )}
    </>
  );
};

export default SubmitButton;
