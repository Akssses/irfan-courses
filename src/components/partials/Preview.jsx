import React from "react";

export default function Preview() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center -m-6  pb-36">
        <div className="w-full lg:w-1/2 p-6">
          <div className="lg:max-w-xl">
            <p className="mb-8 font-heading max-w-max px-5 py-2.5 uppercase font-semibold text-xs tracking-wider text-indigo-900 bg-gradient-blue2 rounded-full">
              Тут какой то текст
            </p>
            <h1 className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl text-gray-900 font-bold">
              Ирфан - Твой путеводитель в исаламе
            </h1>
            <p className="mb-9 text-gray-600 text-lg">
              Начните изучение религии вместе с нами
            </p>
            <button className="group relative font-heading px-10 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md">
              <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800" />
              <p className="relative z-10">ХОЧУ НА КУРС</p>
            </button>
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
