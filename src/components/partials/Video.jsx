import { useRouter } from "next/router";
import React from "react";

export default function Video() {
  const router = useRouter();

  return (
    <section className="py-48 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -m-6">
          <div className="w-full lg:w-1/2 p-6">
            <div className="bg-gradient-blue mx-auto max-w-lg h-96 rounded-3xl">
              <img
                className="relative top-10 mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                src="/assets/gradia-assets/images/features/man2.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative w-full md:w-1/2 p-6">
            <img
              className="absolute top-0 left-0"
              src="gradia-assets/elements/applications/radial.svg"
              alt=""
            />
            <div className="relative z-10 max-w-2xl text-center">
              <h2 className="mb-6 font-heading font-bold text-6xl sm:text-8xl xl:text-10xl text-gray-900">
                Пробные уроки
              </h2>
              <p className="mb-16 text-gray-600 text-lg">
                Специально для вас мы подготовили 2 пробных урока, чтобы
                показать качество наших видеокурсов и лёгкость донесения
                информации от наших кураторов
              </p>
              <div className="flex flex-wrap justify-center -m-2.5 mb-7">
                <div className="w-auto p-2.5">
                  <button
                    onClick={() =>
                      router.push("https://youtu.be/MyXiTqE8XSM?feature=shared")
                    }
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Урок 1
                  </button>
                </div>
                <div className="w-auto p-2.5">
                  <button
                    onClick={() =>
                      router.push("https://youtu.be/g3MldNiUAkg?feature=shared")
                    }
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Урок 2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
