import React from "react";

export default function CoursesFor() {
  return (
    <section className="relative py-44 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 p-6">
            <div className="">
              <h2 className="mb-6 font-heading font-bold text-7xl text-gray-900">
                Курсы подойдут для братьев и сестер которые хотят:
              </h2>
              <p className="mb-20 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
              <ul>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>
                    Научиться читать Куран, но нет времени посещать оффлайн
                    курсы
                  </p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Исправить сови ошибки в произношении сур в намазе</p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Свободно читать Куран по правилам таджвида&nbsp;</p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Сделать шаг на пути Всевышнего и укрепить свой Иман</p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Найти довольство Всевышнего</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <div className="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
              <img
                className="relative top-10 mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                src="/assets/gradia-assets/images/features/girl.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
