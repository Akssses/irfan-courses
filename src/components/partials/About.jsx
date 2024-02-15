import React from "react";

export default function About() {
  return (
    <section className="relative pt-10 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <p className="mb-5 font-heading text-xs text-gray-600 font-semibold text-center uppercase tracking-px">
          ТУТ КАКОЙ- ТО ПРИКОЛЬНЫЙ ТЕКСТ
        </p>
        <h2 className="mb-20 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
          О нас
        </h2>
        <div className="flex flex-wrap -m-7">
          <div className="w-full md:w-1/3 p-7">
            <div className="h-full p-0.5 bg-gradient-cyan rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
              <div className="h-full p-8 bg-white rounded-lg">
                <img
                  className="relative -left-2 mb-12"
                  src="/assets/gradia-assets/images/features/chart.png"
                  alt=""
                />
                <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                  Личная методика
                </h3>
                <p className="text-gray-600">
                  Курсы составлены по личной методике Фархат Ажы Юсупова с 20
                  летним стажем.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-7">
            <div className="h-full p-0.5 bg-gradient-cyan rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
              <div className="h-full p-8 bg-white rounded-lg">
                <img
                  className="relative -left-2 mb-12"
                  src="/assets/gradia-assets/images/features/messages.png"
                  alt=""
                />
                <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                  В онлайн формате более года
                </h3>
                <p className="text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-7">
            <div className="h-full p-0.5 bg-gradient-cyan rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
              <div className="h-full p-8 bg-white rounded-lg">
                <img
                  className="relative -left-2 mb-12"
                  src="/assets/gradia-assets/images/features/warning.png"
                  alt=""
                />
                <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                  Более 800+ учеников
                </h3>
                <p className="text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
