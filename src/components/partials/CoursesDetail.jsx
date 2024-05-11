import React from "react";
import s from "@/styles/CoursesDetail.module.scss";
import { FaVideo } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdWidgets } from "react-icons/md";

export default function CoursesDetail() {
  return (
    <div className="bg-[#81d1ff52] py-20 mt-20">
      <h1 className="text-center text-6xl font-bold">
        Как проходит обучение на наших курсах?
      </h1>
      <div className={s.process_steps}>
        <div className={s.step}>
          <div className={s.step_text}>
            <FaVideo size={40} />

            <p>
              Получите 41 качественных видеурок на платформе геткурс с доступом
              на 6 месяцев для постоянного повторения знаний
            </p>
          </div>
          <img
            src="/assets/icons/arrow_right.svg"
            alt="icon"
            className={s.arrow}
          />
        </div>

        <div className={s.step_right}>
          <img
            src="/assets/icons/arrow_left.svg"
            alt="icon"
            className={s.arrow}
          />
          <div className={s.step_text}>
            <IoIosTime size={40} />

            <p>Проверка домашних заданий от дипломированных кураторов 24/7</p>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.step_text}>
            <span className={s.icon}>
              <FaBookOpen size={40} />
            </span>

            <p>
              Обучение по по книге Фархат Ажы Юсупова, написанная по новой
              методике для достижения лучших результатов{" "}
            </p>
          </div>
          <img
            src="/assets/icons/arrow_right.svg"
            alt="icon"
            className={s.arrow}
          />
        </div>

        <div className={s.step_right}>
          <img
            src="/assets/icons/arrow_left.svg"
            alt="icon"
            className={s.arrow}
          />
          <div className={s.step_text}>
            <span className={s.icon}>
              <BsFillCalendar2DateFill size={40} />
            </span>

            <p>Еженедельные созвоны с практикой по пройденным темам</p>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.step_text}>
            <span className={s.icon}>
              <MdWidgets size={40} />
            </span>

            <p>
              Получите 41 качественных видеурок на платформе геткурс с доступом
              на 6 месяцев для постоянного повторения знаний
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
