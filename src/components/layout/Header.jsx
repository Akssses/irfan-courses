import { useRouter } from "next/router";
import React, { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import Link from "next/link";

export default function Header() {
  const [openNavbar, setOpenNavBar] = useState(false);
  const handleOpenNavbar = () => {
    setOpenNavBar(!openNavbar);
  };

  const router = useRouter();

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between  px-8 py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <Link href="/">
                <img
                  className="w-[50px]"
                  src="/assets/gradia-assets/logos/ifranlogo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-10">
                <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg">
                  <Link href="#">О курсе</Link>
                </li>
                <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg">
                  <Link href="#">Контакты</Link>
                </li>
                <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg">
                  <Link href="#">Отзывы</Link>
                </li>
                <li className="font-heading text-gray-900 hover:text-gray-700 text-lg">
                  <Link href="#">Программа курса</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <div className="flex flex-wrap">
                <div className="w-auto">
                  <FeedbackModal />
                </div>
              </div>
            </div>
            <div className="w-auto lg:hidden">
              <button onClick={handleOpenNavbar}>
                <img
                  src="/assets/gradia-assets/logos/burger.svg"
                  alt="burger"
                  className="w-[30px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {openNavbar ? (
        <div className="navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 px-9 py-8 bg-white h-full">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <Link className="inline-block" href="#">
                      <img
                        className="w-[50px]"
                        src="/assets/gradia-assets/logos/ifranlogo.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="w-auto p-2">
                    <button
                      onClick={handleOpenNavbar}
                      className="navbar-burger"
                      href="#"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 w-full">
                <ul>
                  <li className="mb-12">
                    <Link
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      О нас
                    </Link>
                  </li>
                  <li className="mb-12">
                    <Link
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Контакты
                    </Link>
                  </li>
                  <li className="mb-12">
                    <Link
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Отзывы
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Программа курса
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                      <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                      <div className="py-2 px-5 bg-white rounded-lg">
                        <p className="relative z-10">Хочу на курсы</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </section>
  );
}
