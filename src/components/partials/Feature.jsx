import React, { useState } from "react";

export default function Feature() {
  const [openCards, setOpenCards] = useState({});

  // Функция для переключения состояния открытия для конкретной карточки
  const toggleAccordion = (id) => {
    setOpenCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const courseCards = [
    {
      id: 1,
      title: "На первых уроках вы изучите",
      description:
        "Вы изучите вероубеждение и получите ответ на вопрос «Кто такой мусульманин?». Этот раздел курса направлен на понимание основных принципов и ценностей Ислама.",
    },
    {
      id: 2,
      title: "Чтение Курана",
      description:
        "С нуля научитесь полноценному и свободному чтению Курана в оригинале по всем правилам махража и таджвида",
    },
    {
      id: 3,
      title: "Улучшение молитв",
      description:
        "2 модуля, посвященные исправлению и улучшению качества ваших пятикратных намазов",
    },
    {
      id: 4,
      title: "Личный куратор",
      description:
        "На протяжении трех месяцев у вас будет личный куратор, который будет сопровождать вас, отвечать на вопросы и помогать в освоении новых тем.",
    },
    {
      id: 5,
      title: "Практические созвоны от устазов",
      description:
        "Зум созвоны с устазами для закрепления пройденных тем и исправлений ошибок в произношении",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -m-6">
          <div className="w-full lg:w-7/12 p-8">
            <img
              className="relative rounded-2xl transform hover:scale-105 transition ease-in-out duration-500"
              src="/assets/gradia-assets/images/muslims.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-5/12 p-8 lg:p-16">
            <div className="lg:max-w-md">
              <h2 className="mb-10 font-heading font-bold text-4xl sm:text-5xl text-gray-900">
                На курсе вы получите:
              </h2>
              {courseCards.map((card) => (
                <div key={card.id}>
                  <div className="mb-6 bg-gradient-cyan h-px"></div>
                  <div className="mb-5 flex flex-wrap items-center justify-between">
                    <h3 className="font-heading font-bold text-lg text-gray-900">
                      {card.id}. {card.title}
                    </h3>
                    <button
                      onClick={() => toggleAccordion(card.id)}
                      className="transform transition duration-500"
                    >
                      <svg
                        className={
                          openCards[card.id] ? "rotate-180" : "rotate-0"
                        }
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transition: "transform 0.2s" }}
                      >
                        <path
                          d="M3.75 11.25L9 6L14.25 11.25"
                          stroke="#18181B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    style={{
                      maxHeight: openCards[card.id] ? "1000px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.5s ease-in-out",
                    }}
                  >
                    <p className="text-base text-gray-600 pb-5">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
