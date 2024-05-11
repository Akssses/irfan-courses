import React from "react";

export default function CoursesFor() {
  return (
    <section className="relative py-44 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 p-6">
            <div className="">
              <h2 className="mb-6 font-heading font-bold text-7xl text-gray-900">
                Для кого подойдут курсы?
              </h2>

              <p>
                Для братьев и сестер, которые хотят начать поклонение ради
                довольства Всевышнего и выйти на новый уровень духовности. Для
                тех, кто хочет получить награды за чтение Курана и его
                заступничество в судный день.
              </p>
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
