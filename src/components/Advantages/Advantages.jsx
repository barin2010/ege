import React from "react";
import css from "./Advantages.module.css";
import AdvantItem from "../AdvantItem/AdvantItem";
import { AdvantsDAta } from "../helper/Advant/AdvantsData";

const Advantages = () => {
  return (
    <div className={css.advantage}>
      <div className={css.box}>
        <h2 className={css.header}>Преимущества</h2>
        <p className={css.title}>
          После многолетней подготовки к ЕГЭ и ОГЭ мы ознакомлены со всеми
          «подводными камнями» и основными требованиями, которые необходимы для
          успешной сдачи экзаменов.
        </p>
      </div>

      <ul className={css.advantageList}>
        {AdvantsDAta.map((advant) => (
          <AdvantItem key={advant.id} {...advant} />
        ))}
      </ul>
    </div>
  );
};

export default Advantages;
