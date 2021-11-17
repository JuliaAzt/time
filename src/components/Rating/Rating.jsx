import React from "react";
import "./Rating.scss";
import ReactRating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Rating = (props) => {
  return (
    <ReactRating
      initialRating={props.value}
      className="react-rating"
      emptySymbol={<FaRegStar />}
      fullSymbol={<FaStar />}
      fractions={2}
      quiet
    />
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
