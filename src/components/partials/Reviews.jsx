import React from "react";

export default function Reviews() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
          800+ довольных учеников
        </h2>
        <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">
          За все время с нами обучились более 800 учеников и вот их отзывы о
          наших курсах
        </p>
        <div className="flex flex-wrap -m-5">
          <div className="w-full md:w-1/3 p-5">
            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
              <div className="h-full px-7 py-8 bg-white rounded-lg">
                <img
                  className="mb-8"
                  src="/assets/gradia-assets/images/testimonials/avatar.png"
                  alt=""
                />
                <p className="mb-8 text-[16px] text-gray-900">
                  Меня зовут Акберди, мне 23 года. Научился читать Куран за 2
                  месяца. Я часто посещал онлайн конференции Фархат устаза, и
                  через его лекции я записался на онлайн обучение Курана. Из-за
                  работы заграницей не получалось выделить время на обучение, но
                  ИнШаАллаh в этом году я смог читать Куран. Мы выбрали Ирфан
                  академию из-за того что знали Фархат устаза. Все уроки были
                  очень понятными и простыми. Мне особенно понравилось что можно
                  в любое время смотреть уроки. И занятия очень интересные.
                  Система обучения соответствует все современным нормам. Большая
                  благодарность Фархат устазу и моему куратору Ислам устазу.
                  Пусть Всевышний Алла будет доволен вашей академией. И обрадует
                  вас всех благом в обоих мирах🤲🏻👍🏻👍🏻👍🏻
                </p>
                <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                  Акберди
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-5">
            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
              <div className="h-full px-7 py-8 bg-white rounded-lg">
                <img
                  className="mb-8"
                  src="/assets/gradia-assets/images/testimonials/avatar2.png"
                  alt=""
                />
                <p className="mb-8 text-[16px] text-gray-900">
                  Меня зовут Ильнар, мне 23 года Курсы прошел меньше чем за 2.5
                  месяца, темп учебы очень понравился. Я успевал сдавать дз в
                  нужный срок. Академию Ирфан выбрал полагаясь на отзывы и на
                  видеоролики в интернете Учебное содержание очень доступно и
                  понятно. Если возникают вопросы, устаз отвечает на них и все
                  разъясняет Больше всего понравилось то, что я достиг своей
                  поставленной цели АльхьамдулилЛях1 Большое спасибо академии
                  Ирфан
                </p>
                <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                  Ильнар
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-5">
            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
              <div className="h-full px-7 py-8 bg-white rounded-lg">
                <img
                  className="mb-8"
                  src="/assets/gradia-assets/images/testimonials/avatar3.png"
                  alt=""
                />
                <p className="mb-8 text-[16px] text-gray-900">
                  Меня зовут Эржан, мне 23 года За 3 месяца я научился читать
                  Куран с нуля. Я понял что нужно читать Куран, в тот самый
                  момент, что это книга для мусульман, инструкция счастливой
                  жизни в обоих мирах🤲🏻 Я Наткнулся на рекламу в инсте на
                  семинар Фархат устаза об важности чтения Курана для
                  повседневной жизни мусусульман, что и повлияло на меня в
                  следствии чего записался на курсы как были деньги Уроки
                  предельно понятные и доступные. Мне понравился свой куратор в
                  академии ирфан и структурированные уроки для практики и более
                  лучшего понимания. Очень вдохновляюсь чтением Курана с
                  кыраатом устаза😍
                </p>
                <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                  Эржан
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
