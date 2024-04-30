import React from "react";
import css from "./Cases.module.css";
import case_1 from "../../images/case_1.png";
import case_2 from "../../images/case_2.png";
import case_3 from "../../images/case_3.png";
import case_4 from "../../images/case_4.png";
import case_5 from "../../images/case_5.png";
import case_6 from "../../images/case_6.png";

const Cases = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.cases}>
          <p className={css.header}>Успешные кейсы</p>
          <p className={css.title}>Наши результаты</p>
          <p className={css.description}>
            Хочешь поступить в престижный вуз на бюджет?
            <br /> Тогда запишись на курсы ЕГЭ в Петрозаводске уже сейчас!
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <img className={css.image} src={case_1} alt="case_1" />
            <div className={css.fullName}>
              <p className={css.name}>Имя Фамилия</p>
              <p className={css.caseItem}>Математика - 99 баллов</p>
            </div>
          </li>
          <li className={css.item}>
            <img className={css.image} src={case_2} alt="case_2" />
            <div className={css.fullName}>
              <p className={css.name}>Имя Фамилия</p>
              <p className={css.caseItem}>География - 99 баллов</p>
            </div>
          </li>
          <li className={css.item}>
            <img className={css.image} src={case_3} alt="case_3" />
            <div className={css.fullName}>
              <p className={css.name}>Имя Фамилия</p>
              <p className={css.caseItem}>Физика - 99 баллов</p>
            </div>
          </li>
          <li className={css.item}>
            <img className={css.image} src={case_4} alt="case_4" />
            <div className={css.fullName}>
              <p className={css.name}>Имя Фамилия</p>
              <p className={css.caseItem}>Русский язык - 99 баллов</p>
            </div>
          </li>
          <li className={css.item}>
            <img className={css.image} src={case_5} alt="case_5" />
            <div className={css.fullName}>
              <p className={css.name}>Имя Фамилия</p>
              <p className={css.caseItem}>Английский язык - 99 баллов</p>
            </div>
          </li>
          <li className={css.item}>
            <img className={css.image} src={case_6} alt="case_6" />
            <div className={css.fullName}>
              <p className={css.name}>Имя Фамилия</p>
              <p className={css.caseItem}>Биология - 99 баллов</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cases;
