import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import Paragraph from "../../Typography/Paragraph/Paragraph";

const Card = (props) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="card-content">
        <span>{props.title}</span>
        <span>por {props.author}</span>
        <Paragraph>{props.content}</Paragraph>
        <div>
          {props.categories &&
            props.categories.map((el) => {
              return <span>{el}</span>;
            })}
          <span>{props.rating}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
};

export default Card;
