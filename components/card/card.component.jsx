import React from "react";
import "./card.style.css";
export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.employee.id}?set=set2&size=180x180`}
      alt="employee"
    />
    <h1>{props.employee.name}</h1>
    <p>{props.employee.email} </p>
  </div>
);
