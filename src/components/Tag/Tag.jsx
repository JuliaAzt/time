import React from "react";
import "./Tag.scss";
import PropTypes from "prop-types";

const Tag = (props) => {
  return (
    <span className="tag" style={{ backgroundColor: props.color }}>
      {props.children}
    </span>
  );
};

Tag.propTypes = {
  color: PropTypes.string,
};

Tag.defaultProps = {
  color: "#000",
};

export default Tag;
