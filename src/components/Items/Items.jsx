import React from "react";
import css from "./Items.module.css";

const Items = () => {
  return (
    <div className={css.bacgroud}>
      <div className="container">
        <div className={css.items}>
          <p className={css.title}>Предметы</p>
          <p className={css.description}>Предметы, по которым мы готовим</p>
        </div>
        <ul className={css.itemList}>
          <li className={css.itemItem}>
            <p className={css.Name}>Математика</p>
            <p className={css.price}>от 350 ₽</p>
          </li>
          <li className={css.itemItem}>
            <p className={css.Name}>Русский язык</p>
            <p className={css.price}>от 250 ₽</p>
          </li>
          <li className={css.itemItem}>
            <p className={css.Name}>Английский язык</p>
            <p className={css.price}>от 2000 ₽</p>
          </li>
          <li className={css.itemItem}>
            <p className={css.Name}>Немецкий язык</p>
            <p className={css.price}>от 3000 ₽</p>
          </li>
          <li className={css.itemItem}>
            <p className={css.Name}>География</p>
            <p className={css.price}>от 5000 ₽</p>
          </li>
          <li className={css.itemItem}>
            <p className={css.Name}>Физика</p>
            <p className={css.price}>от 7000 ₽</p>
          </li>
        </ul>
        <p className={css.application}>
          Оставляя заявку, вы соглашаетесь на обработку персональных данных
          <br /> и с условиями бронирования счёта
        </p>
      </div>
    </div>
  );
};

export default Items;
