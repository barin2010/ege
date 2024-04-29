import React from "react";
import css from "./Reviews.module.css";
import david1x from "../../images/david_1x.png";
import david2x from "../../images/david_2x.png";
import uylia1x from "../../images/uylia_1x.png";
import uylia2x from "../../images/uylia_2x.png";
import mark1x from "../../images/mark_1x.png";
import mark2x from "../../images/mark_2x.png";
import triangle from "../../images/triangle.svg";
import left from "../../images/left.png";
import barBlue from "../../images/barblue.svg";
import barGrey from "../../images/bargrey.png";

const Reviews = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h3 className={css.title}>Видео отзывы</h3>
        <p className={css.description}>
          Более 10-ти лет мы помогаем нашим ученикам поступить в ВУЗ своей мечты
          на бюджетную форму обучения.
          <br /> С нами у Вас все шансы на успех!
        </p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.leftBox}>
            <img className={css.leftSvg} src={left} alt="left" />
          </div>
          <div className={css.boxImage}>
            <img className={css.triangle} src={triangle} alt="triangle" />
          </div>
          <img
            className={css.image}
            srcSet={`${david1x} 1x, ${david2x} 2x`}
            src={david1x}
            alt="david"
          />
          <div className={css.fullname}>
            <h4 className={css.name}>Юрий Ставничий</h4>
            <p className={css.profession}>фотограф</p>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.boxImage}>
            <img className={css.triangle} src={triangle} alt="triangle" />
          </div>
          <img
            className={css.image}
            srcSet={`${uylia1x} 1x , ${uylia2x} 2x`}
            src={uylia1x}
            alt="uylia"
          />
          <div className={css.fullname}>
            <h4 className={css.name}>Юлия Ставничия</h4>
            <p className={css.profession}>фотограф</p>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.rightBox}>
            <img className={css.rightSvg} src={left} alt="left" />
          </div>
          <div className={css.boxImage}>
            <img className={css.triangle} src={triangle} alt="triangle" />
          </div>
          <img
            className={css.image}
            srcSet={`${mark1x} 1x, ${mark2x} 2x`}
            src={mark1x}
            alt="mark"
          />
          <div className={css.fullname}>
            <h4 className={css.name}>Юрий Ставничий</h4>
            <p className={css.profession}>фотограф</p>
          </div>
        </li>
      </ul>
      <ul className={css.bar}>
        <li className={css.barLine}>
          <img className={css.barImage} src={barBlue} alt="barBlue" />
        </li>
        <li className={css.barLine}>
          <img className={css.barImage} src={barGrey} alt="barGrey" />
        </li>
        <li className={css.barLine}>
          <img className={css.barImage} src={barGrey} alt="barGrey" />
        </li>
        <li className={css.barLine}>
          <img className={css.barImage} src={barGrey} alt="barGrey" />
        </li>
        <li className={css.barLine}>
          <img className={css.barImage} src={barGrey} alt="barGrey" />
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
