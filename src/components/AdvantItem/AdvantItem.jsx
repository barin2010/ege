import React from "react";
import css from "./AdvantItem.module.css";
import persent from "../../images/persent.svg";

const AdvantItem = ({ title, description }) => {
  return (
    <li className={css.item}>
      <div className={css.data}>
        <div className={css.imageWrapper}>
          <img className={css.image} src={persent} alt="persent" />
        </div>
        <h3 className={css.title}>{title}</h3>
        <p className={css.description}>{description}</p>
      </div>
    </li>
  );
};

export default AdvantItem;
