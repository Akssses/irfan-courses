import React from "react";

export default function About() {
  return (
    <section className="relative pt-10 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
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
                  Наша методика предоставляет гибкий график обучения, позволяя
                  ученикам выбирать удобное время для занятий. Это освобождает
                  от ограничений и позволяет подстраивать обучение под
                  индивидуальные обстоятельства.
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
                  За 1 год мы обучили более 800 учеников по всему миру!
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
                  Дипломированные кураторы
                </h3>
                <p className="text-gray-600">
                  Все наши кураторы имеют высшее теологическое образование, а
                  так же практический опыт в преподавании
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
