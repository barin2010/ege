import React from "react";
import css from "./Vuz.module.css";
import vuz_1 from "../../images/vuz_1.png";
import vuz_2 from "../../images/vuz_2.png";
import vuz_3 from "../../images/vuz_3.png";
import vuz_4 from "../../images/vuz_4.png";

const Vuz = () => {
  return (
    <div className={css.backgroud}>
      <div className="container">
        <div className={css.wrapper}>
          <h3 className={css.partner}>Партнеры</h3>
          <p className={css.title}>Поступите в ВУЗ</p>
          <p className={css.description}>
            Наши ученики поступают в престижные вузы нашей страны.
            <br /> Обратитесь к нам и поступите в ВУЗ своей мечты
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <img className={css.img} src={vuz_1} alt="vuz_1" />
          </li>
          <li className={css.item}>
            <img className={css.img} src={vuz_2} alt="vuz_2" />
          </li>
          <li className={css.item}>
            <img className={css.img} src={vuz_3} alt="vuz_3" />
          </li>
          <li className={css.item}>
            <img className={css.img} src={vuz_4} alt="vuz_4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Vuz;
