import React from "react";
import css from "./Courses.module.css";

const Courses = () => {
  return (
    <div className={css.courses}>
      <div clasName="container">
        <div className={css.coursesWrapper}>
          <p className={css.kompany}>О компании</p>
          <p className={css.title}>
            Курсы по подготовке
            <br /> к ЕГЭ и ОГЭ
          </p>
          <p className={css.description}>
            Через сдачу ЕГЭ и ОГЭ проходит каждый старшеклассник – именно эти
            экзамены становятся для него ключом к дверям того учебного
            заведения, куда он мечтает попасть. А для того, чтобы сдать их
            максимально успешно, нужно предварительного готовиться, долго и
            упорно. Самостоятельная работа далеко не всегда дает ожидаемые
            результаты – ученику сложно выбрать из большого количества школьного
            материала.
          </p>
          <button className={css.button}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
