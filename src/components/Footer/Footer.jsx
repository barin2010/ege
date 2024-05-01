import React from "react";
import css from "./Footer.module.css";
import map1 from "../../images/map_1x.png";
import map2 from "../../images/map_2x.png";
import fb from "../../images/fb.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import vk from "../../images/vk.svg";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.map}>
        <div className={css.contacts}>
          <p className={css.header}>Контакты</p>
          <p className={css.title}>+7 987 654-32-10</p>
          <p className={`${css.title} ${css.button}`}>info@constructor.ru</p>
          <p className={css.title}>г. Москва, метро “Китай город”</p>
          <p className={css.title}>ул. Яузская, дом 15/11</p>
        </div>
        <img
          className={css.image}
          srcSet={`${map1} 1x, ${map2} 2x`}
          src={map1}
          alt="map"
        />
      </div>
      <ul className={css.social}>
        <li className={css.socialItem}>
          <img className={css.sociaiSvg} src={fb} alt="fb" />
        </li>
        <li className={css.socialItem}>
          <img className={css.sociaiSvg} src={instagram} alt="instagram" />
        </li>
        <li className={css.socialItem}>
          <img className={css.sociaiSvg} src={twitter} alt="twitter" />
        </li>
        <li className={css.socialItem}>
          <img className={css.sociaiSvg} src={vk} alt="vk " />
        </li>
      </ul>
      <ul className={css.navigation}>
        <li className={css.navigatiomItem}>О компании</li>
        <li className={css.navigatiomItem}>Новости</li>
        <li className={css.navigatiomItem}>Помощь</li>
        <li className={css.navigatiomItem}>Контакты</li>
      </ul>
      <p className={css.year}>© 2020 Подготовка к ЕГЭ</p>
    </div>
  );
};

export default Footer;
