import React from "react";
import { agi, attr_agi_img_src, attr_int_img_src, attr_str_img_src, int, str } from "../../resources/constants";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt={props.hero.name} src={props.hero.image_url}></img>
      <h2>{props.hero.name}</h2>
      <p><i>{props.hero.full_name}</i></p>
      <img
        id="type"
        alt={props.hero.type}
        src={(() => {
          switch (props.hero.type) {
            case str:
              return attr_str_img_src;
            case agi:
              return attr_agi_img_src;
            case int:
              return attr_int_img_src;
            default:
              return attr_str_img_src;
          }
        })()}
      ></img>
    </div>
  );
};
