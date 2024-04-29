import React from "react";
import Button from "../Buttons/Button";
import css from "./Border.module.css";
import poligon from "../../images/Polygon_1.svg";

const title = "Оставить заявку";

const Border = () => {
  return (
    <div className={css.border}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Подготовка к ЕГЭ и ОГЭ</h1>
        <p className={css.text}>
          Стильный и эксклюзивный дизайн вашей квартиры <br />
          по индивидуальному проекту
        </p>
        <div className={css.form}>
          <input className={css.input} placeholder="Введите почту"></input>
          <Button title={title} />
        </div>
      </div>
      <img className={css.svg} src={poligon} alt="poligon" />
    </div>
  );
};

export default Border;
