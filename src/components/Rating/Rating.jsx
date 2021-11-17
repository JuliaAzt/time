import React from "react";
import "./Rating.scss";
import ReactRating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <ReactRating
      initialRating={3.5}
      className="react-rating"
      emptySymbol={<FaRegStar />}
      fullSymbol={<FaStar />}
      fractions={2}
      quiet
    />
  );
};

export default Rating;
