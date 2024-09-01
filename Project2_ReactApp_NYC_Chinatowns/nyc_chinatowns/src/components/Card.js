import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, image, description, link }) {
  const content = (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="card-link">
        {content}
      </Link>
    );
  }

  return content;
}

export default Card;
