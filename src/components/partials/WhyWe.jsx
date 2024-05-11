import React from "react";

export default function WhyWe() {
  return (
    <section class="overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="flex flex-wrap justify-center -m-6">
              <div class="w-full lg:w-auto p-6">
                <div class="xl:mt-24 max-w-max mx-auto">
                  <div class="mb-5">
                    <img
                      className="rounded-3xl w-[80%]"
                      src="/assets/gradia-assets/images/muslims3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="">
              <h2 class="mb-7 font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                Почему выбирают именно нас?
              </h2>

              <ul>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Курсы одобренные Муфтиятом Кыргызксой Республики</p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>
                    Знания от Устаза, обучивший более 3000 учеников за 20 лет
                    преподавания
                  </p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Гибкость формата</p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>
                    Легкая методика по которой можно научиться читать Куран за 1
                    месяц
                  </p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="/assets/gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>
                    Мы даем 100% гарантию на результат при выполнении всех наших
                    заданий
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
