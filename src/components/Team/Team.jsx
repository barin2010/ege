import React from "react";
import css from "./Team.module.css";
import team_1 from "../../images/tem_1_1x.png";
import team_1_1 from "../../images/tem_1_2x.png";
import team_2 from "../../images/tem_2_1x.png";
import team_2_1 from "../../images/tem_2_2x.png";
import team_3 from "../../images/tem_3_1x.png";
import team_3_1 from "../../images/tem_3_2x.png";
import team_4 from "../../images/tem_4_1x.png";
import team_4_1 from "../../images/tem_4_2x.png";

const Team = () => {
  return (
    <div className="container">
      <div className={css.team}>
        <div className={css.teamBox}>
          <h3 className={css.header}>Команда</h3>
          <p className={css.title}>Наши преподаватели</p>
          <p className={css.description}>
            В нашей компании работают высококвалифицированные специалисты с
            учеными степенями
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <img
              className={css.teamItem}
              srcSet={`${team_1} 1x , ${team_1_1} 2x`}
              src={team_1}
              alt="team_1"
            />
            <p className={css.fullName}>Имя Фамилия</p>
            <p className={css.teaches}>Русский язык</p>
          </li>
          <li className={css.item}>
            <img
              className={css.teamItem}
              srcSet={`${team_2} 1x, ${team_2_1} 2x`}
              src={team_2}
              alt="team_2"
            />
            <p className={css.fullName}>Имя Фамилия</p>
            <p className={css.teaches}>Математика</p>
          </li>
          <li className={css.item}>
            <img
              className={css.teamItem}
              srcSet={`${team_3} 1x, ${team_3_1} 2x`}
              src={team_3}
              alt="team_3"
            />
            <p className={css.fullName}>Имя Фамилия</p>
            <p className={css.teaches}>Физика</p>
          </li>
          <li className={css.item}>
            <img
              className={css.teamItem}
              srcSet={`${team_4} 1x, ${team_4_1} 2x`}
              src={team_4}
              alt="team_4"
            />
            <p className={css.fullName}>Имя Фамилия</p>
            <p className={css.teaches}>География</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
