import React from "react";
import css from "./Button.module.css";

const Button = () => {
  return (
    <div className={css.button}>
      <p className={css.buttonText}>Заказать звонок</p>
    </div>
  );
};

export default Button;
