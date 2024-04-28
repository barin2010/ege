import React from "react";
import css from "./Header.module.css";
import Button from "../Buttons/Button.jsx";

const title = "Заказать звонок";

const Header = () => {
  return (
    <div className={css.footer}>
      <div className={`container ${css.footerWraper}`}>
        <p className={css.reading}>Подготовка к ЕГЭ</p>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            <li className={css.navigationItem}>О компании</li>
            <li className={css.navigationItem}>Новости</li>
            <li className={css.navigationItem}>Помощь</li>
            <li className={css.navigationItem}>Отзывы</li>
            <li className={css.navigationItem}>Контакты</li>
          </ul>
          <div className={css.navigationContacts}>
            <p className={css.navigationService}>Cлужба продаж</p>
            <p className={css.navigationNumber}>+7 495 123-45-67</p>
          </div>
          <Button title={title} />
        </nav>
      </div>
    </div>
  );
};

export default Header;
