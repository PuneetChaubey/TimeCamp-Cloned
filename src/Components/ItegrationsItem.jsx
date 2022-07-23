import React from 'react'
import style from "../Styles/Integrations.module.css";

export const ItegrationsItem = ({ind, item}) => {
  return (
    <div key={ind} className={style.grid_cont}>
      <div className={style.img_div}>
        <img src={item.image} alt="" />
      </div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
