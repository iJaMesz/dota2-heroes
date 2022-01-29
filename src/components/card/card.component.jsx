import React from "react";
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img alt={props.hero.name} src={props.hero.image_url}></img>
      <h2>{props.hero.name}</h2>
      <p>{props.hero.full_name}</p>
    </div>
  );
};
