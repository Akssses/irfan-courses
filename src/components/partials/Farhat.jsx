import React from "react";

export default function Farhat() {
  return (
    <section class="py-20 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="flex flex-wrap justify-center -m-6">
              <div class="w-full lg:w-auto p-6">
                <div class="xl:mt-24 max-w-max mx-auto">
                  <div class="mb-5">
                    <img
                      className="rounded-3xl w-[80%]"
                      src="/assets/gradia-assets/images/hero/farhat2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="max-w-lg">
              <p class="mb-5 max-w-max text-transparent bg-clip-text bg-gradient-cyan font-heading text-xs uppercase font-semibold tracking-px">
                обучил более 2000 учеников!
              </p>
              <h2 class="mb-7 font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                Фархат Ажы Юсупов
              </h2>

              <ul>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>
                    20 лет неустанно обучает людей Курану ради довольства
                    Всевышнего и желания студентов обучаться
                  </p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>
                    Является зам. председателем советов Улемов Кыргызской
                    Республики
                  </p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>
                    Его пятничные баяны, лекции и учения публикуются, таких как
                    YouTube и instagram. Минимум 2 миллиона просмотра в
                    социальных сетях
                  </p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Показывает самый лёгкий путь полюбить Ислам!</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
