import React from "react";
import css from "./Success.module.css";
import success_1 from "../../images/success_1.png";
import success_2 from "../../images/success_2.png";
import success_3 from "../../images/success_3.png";

const Success = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.successWrapper}>
          <h3 className={css.title}>Отзывы</h3>
          <p className={css.description}>
            Наш успех – это успех наших учеников!
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <img className={css.image} src={success_1} alt="success_1" />
            <p className={css.header}>
              Это супер крутая инструкция и вы делаете очень полезную вещь 🙂
              Спасибо ❤️
            </p>
            <p className={css.family}>Юрий Ставничий</p>
            <p className={css.profession}>фотограф</p>
          </li>
          <li className={css.item}>
            <img className={css.image} src={success_2} alt="success_2" />
            <p className={css.header}>
              Работа с сервисом приносит радость, потому что высочайший
              профессионализм, удобство, оперативность, и просто приятные люди!
            </p>
            <p className={css.family}>Александра Селезнева</p>
            <p className={css.profession}>фотограф</p>
          </li>
          <li className={css.item}>
            <img className={css.image} src={success_3} alt="success_3" />
            <p className={css.header}>
              Спасибо большое за помощь и содействие!
            </p>
            <p className={css.family}>Александра Селезнева</p>
            <p className={css.profession}>фотограф</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Success;
