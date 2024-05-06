import { useRouter } from "next/router";
import React from "react";
import FeedbackModal from "../layout/FeedbackModal";

export default function Preview() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center -m-6  pb-36">
        <div className="w-full lg:w-1/2 p-6">
          <div className="lg:max-w-xl">
            <p className="mb-8 font-heading max-w-max px-5 py-2.5 uppercase font-semibold text-xs tracking-wider text-indigo-900 bg-gradient-blue2 rounded-full">
              IRFAN - Твой путиводитель в Исламе
            </p>
            <h1 className="mb-6 font-heading text-7xl md:text-10xl xl:text-7xl text-gray-900 font-bold">
              Изучение Курана с 0 по авторской методике Фархат Ажы Юсупова
            </h1>
            <p className="mb-9 text-gray-600 text-lg">
              Открой Куран - Открой сердце
            </p>
            {/* <button
              onClick={() =>
                router.push("https://wa.me/message/SMWZPUSFXBG7A1")
              }
              className="group relative font-heading px-10 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md"
            >
              <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800" />
              <p className="relative z-10">ХОЧУ НА КУРС</p>
            </button>{" "} */}
            <FeedbackModal />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            className="block mx-auto"
            src="/assets/gradia-assets/images/hero/heroo.png"
            alt="images"
          />
        </div>
      </div>
    </div>
  );
}
