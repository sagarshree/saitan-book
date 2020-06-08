import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <h2>{props.monster.name}</h2>
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}
      alt="monsters"
    />
    <p>email: {props.monster.name}@monster.com</p>
  </div>
);
