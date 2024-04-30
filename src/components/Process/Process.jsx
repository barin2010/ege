import React from "react";
import css from "./Process.module.css";
import imageOne1x from "../../images/image_one_1x.png";
import imageOne2x from "../../images/image_one_2x.png";
import imageTwo1x from "../../images/image_two_1x.png";
import imageTwo2x from "../../images/image_two_2x.png";
import imagethree1x from "../../images/image_three_1x.png";
import imagethree2x from "../../images/image_three_2x.png";

const Process = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.oneWrapper}>
          <img
            className={css.imageBig}
            srcSet={`${imageOne1x} 1x , ${imageOne2x} 2x`}
            src={imageOne1x}
            alt="imageOne1x"
          />
        </div>
        <div className={css.twoWrapper}>
          <img
            className={css.imageSmall}
            srcSet={`${imageTwo1x}1x,${imageTwo2x} 2x`}
            src={imageTwo1x}
            alt="imageTwo"
          />
          <img
            className={css.imageSmall}
            srcSet={`${imagethree1x} 1x ,${imagethree2x} 2x`}
            src={imagethree1x}
            alt="imagethree"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
