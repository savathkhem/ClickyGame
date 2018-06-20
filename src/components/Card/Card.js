import React from "react";
import "./Card.css";


const Card = props => (
  <div className="card">
    <div className="img-container">
      <img id={props.index} alt={props.name} src={props.image} onClick={props.handleClick} />
    </div>
    <span onClick={() => props.handleClick(props.id)} className="remove">
      {props.name}
    </span>
  </div>
);




export default Card;
