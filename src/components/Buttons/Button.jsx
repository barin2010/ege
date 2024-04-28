import React from "react";
import css from "./Button.module.css";

const Button = ({ title }) => {
  return (
    <div className={css.button}>
      <p className={css.buttonText}>{title}</p>
    </div>
  );
};

export default Button;
