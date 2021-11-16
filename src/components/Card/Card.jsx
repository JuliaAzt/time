import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import Paragraph from "../../Typography/Paragraph/Paragraph";
import Tag from "../Tag";
import { FaStar } from "react-icons/fa";

const Card = (props) => {
  function handleColorTag(tag) {
    const colors = {
      Matemática: "#ff8934",
      Esporte: "#f46466",
      Lazer: "#ffbf2f",
      Geometria: "#66d6a7",
      Pessoal: "#c664f4",
      Organização: "#2fcdff",
    };
    return colors[tag];
  }

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="card-content">
        <span className="card-content__title">{props.title}</span>
        <span className="card-content__author">por {props.author}</span>
        <Paragraph additionalClass="card-content__text">
          {props.content}
        </Paragraph>
        <div className="card-content__footer">
          <div className="card-content__footer-tags">
            {props.categories &&
              props.categories.map((el) => {
                return (
                  <Tag key={el} color={handleColorTag(el)}>
                    {el}
                  </Tag>
                );
              })}
          </div>
          <span className="card-content__footer-rating">
            <FaStar />
            <span>{props.rating}</span>
          </span>
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
