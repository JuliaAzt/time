import React from "react";
import PropTypes from "prop-types";

import "./Heading.scss";

const Heading = (props) => {
  function handleClassName() {
    return `heading ${props.variant} ${props.additionalClass}`;
  }

  return (
    <props.variant className={handleClassName()} style={props.style}>
      {props.children}
    </props.variant>
  );
};

Heading.propTypes = {
  variant: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

Heading.defaultProps = {
  additionalClass: "",
  style: {},
  children: "",
};

export default Heading;
