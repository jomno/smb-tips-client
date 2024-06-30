"use client";

import Image from "next/image";
import { Button, Radio, Label } from "flowbite-react";

export default function Content({}) {
  return (
    <div className="flex flex-col">
      <Image src="/icons/smb_logo.png" width={1200} height={200} />

      <div className="flex items-center justify-center my-4">
        <h1 className="text-2xl font-bold">Smallbigclass +</h1>
      </div>

      <form>
        <fieldset className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-200 rounded">
            <Label htmlFor="option-1" className="text-lg font-semibold">
              스몰빅클래스 + 스탠다드 월 9,900원
            </Label>
            <Radio
              id="option-1"
              name="subscribe"
              value="option-1"
              defaultChecked
            />
          </div>
          <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-200 rounded">
            <Label htmlFor="option-2" className="text-lg font-semibold">
              스몰빅클래스 + 프리미엄 월 13,900원
            </Label>
            <Radio id="option-2" name="subscribe" value="option-2" />
          </div>
        </fieldset>

        <div className="flex justify-center mt-16">
          <Button className="w-full" onClick={() => {
            alert("구독이 완료되었습니다.")
            location.href = "/";
          }}>
            구독하기
          </Button>
        </div>
      </form>
    </div>
  );
}
