import React from "react";
import "./Card.css";
import { data } from "../../helper/data";

const Card = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => {
        const{id,title,desc,image}=item
        return (
          <div className="cards" key={id}>
            <h3 className="title">{title}</h3>
            <img className="image" src={image} alt={title} />
            <p className="text">{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
