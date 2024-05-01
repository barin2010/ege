import React from "react";
import css from "./Lesson.module.css";

const Lesson = () => {
  return (
    <div className={css.background}>
      <div className="container">
        <div className={css.wrapper}>
          <p className={css.header}>Запишись на пробный урок</p>
          <p className={css.title}>
            Получи большой пакет знаний от преподавателей,
            <br />
            которые знают предмет на 100%
          </p>
          <form className={css.form}>
            <input
              className={css.input}
              placeholder="+7 (000) 000-0000"
            ></input>
            <button className={css.btn}>Записаться</button>
          </form>
          <p className={css.application}>
            Оставляя заявку, вы соглашаетесь на обработку
            <br /> персональных данных и с условиями бронирования счёта
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
