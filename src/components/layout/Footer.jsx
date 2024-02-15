import React from "react";

export default function Footer() {
  return (
    <footer class="pt-24 overflow-hidden">
      <div class="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <img
            class="mx-auto mb-16 w-[50px]"
            src="/assets/gradia-assets/logos/ifranlogo.png"
            alt=""
          />
        </div>

        <ul class="flex flex-wrap justify-center -m-5 pb-8">
          <li class="p-5">
            <a
              class="font-heading text-base text-gray-900 hover:text-gray-700"
              href="#"
            >
              О курсе
            </a>
          </li>
          <li class="p-5">
            <a
              class="font-heading text-base text-gray-900 hover:text-gray-700"
              href="#"
            >
              Контакты
            </a>
          </li>
          <li class="p-5">
            <a
              class="font-heading text-base text-gray-900 hover:text-gray-700"
              href="#"
            >
              Отзывы
            </a>
          </li>
          <li class="p-5">
            <a
              class="font-heading text-base text-gray-900 hover:text-gray-700"
              href="#"
            >
              Программа курса
            </a>
          </li>
        </ul>
        <div class="border-b border-gray-100"></div>
        <p class="text-gray-600 text-center py-8 text-sm">
          © Irfan 2024. All Rights Reserved by Irfan.kg.
        </p>
      </div>
    </footer>
  );
}
