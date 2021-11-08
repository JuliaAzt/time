import React from "react";
import PropTypes from "prop-types";

import "./Link.scss";

const Link = (props) => {
  function handleClassName() {
    return `link ${props.additionalClass}`;
  }

  return (
    <a href={props.href} className={handleClassName()} style={props.style}>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

Link.defaultProps = {
  additionalClass: "",
  style: {},
  children: "",
};

export default Link;