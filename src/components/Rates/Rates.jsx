import React from "react";
import css from "./Rates.module.css";
import vector from "../../images/Vector.svg";
import cross from "../../images/cross.svg";

const Rates = () => {
  return (
    <div className={css.rates}>
      <div className={css.ratesWrapper}>
        <h3 className={css.ratesHeader}>Тарифы</h3>
        <p className={css.ratesTitle}>
          По­че­му 90% уче­ни­ков вы­би­ра­ют за­ня­тия в ми­ни-груп­пах?
        </p>
      </div>
      <div className={css.wrapper}>
        <div className={css.wrapperBox}>
          <div className={css.wrapperMini}>
            <p className={css.wrapperText}>Ми­ни-груп­пы</p>
            <p className={css.wrapperCoast}>245 ₽</p>
          </div>
          <ul className={css.wrapperList}>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>
              Ин­ди­виду­аль­ный под­ход
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>
              Кон­суль­та­ции с пе­даго­гом во
              <br /> вне­уроч­ное вре­мя
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>
              Про­реши­вание за­даний
              <br /> из Бан­ка ФИ­ПИ
            </li>
            <li className={css.wrapperIcon}>
              <img
                className={css.cross}
                src={cross}
                alt="cross"
                width="12"
                height="12"
              ></img>
              Про­верен­ный го­дами ре­пети­тор
            </li>
            <li className={css.wrapperIcon}>
              <img
                className={css.cross}
                src={cross}
                alt="cross"
                width="12"
                height="12"
              ></img>
              Проб­ные уро­ки
            </li>
            <li className={css.wrapperIcon}>
              <img
                className={css.cross}
                src={cross}
                alt="cross"
                width="12"
                height="12"
              ></img>
              Обо­рудо­ван­ные клас­сы
            </li>
            <li className={css.wrapperIcon}>
              <img
                className={css.cross}
                src={cross}
                alt="cross"
                width="12"
                height="12"
              ></img>
              Кон­ку­рен­тная ра­бота в кол­лекти­ве
            </li>
          </ul>
          <button className={css.wrapperBtn}>Выбрать</button>
        </div>
        <div className={css.wrapperBox}>
          <div className={css.wrapperMini}>
            <p className={css.wrapperText}>Час­тный ре­пети­тор</p>
            <p className={css.wrapperCoast}>450 ₽</p>
          </div>
          <ul className={css.wrapperList}>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>Ин­ди­виду­аль­ный под­ход
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>
              Кон­суль­та­ции с пе­даго­гом во
              <br /> вне­уроч­ное вре­мя
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>
              Про­реши­вание за­даний <br />
              из Бан­ка ФИ­ПИ
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>
              Про­верен­ный го­дами ре­пети­тор
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>Проб­ные уро­ки
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>Обо­рудо­ван­ные клас­сы
            </li>
            <li className={css.wrapperIcon}>
              <img src={vector} alt="vector"></img>
              Кон­ку­рен­тная ра­бота в кол­лекти­ве
            </li>
          </ul>
          <button className={css.wrapperBtn}>Выбрать</button>
        </div>
      </div>
    </div>
  );
};

export default Rates;
