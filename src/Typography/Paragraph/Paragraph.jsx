import React from "react";

import PropTypes from "prop-types";

import "./Paragraph.scss";

const Paragraph = (props) => {
  function handleClassName() {
    return `p ${props.additionalClass}`;
  }

  return (
    <p className={handleClassName()} style={props.style}>
      {props.children}
    </p>
  );
};

Paragraph.propTypes = {
  additionalClass: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

Paragraph.defaultProps = {
  additionalClass: "",
  style: {},
  children: "",
};

export default Paragraph;
