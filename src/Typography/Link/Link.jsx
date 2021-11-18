import React from "react";
import PropTypes from "prop-types";
import { Link as LinkRouter } from "react-router-dom";
import "./Link.scss";

const Link = (props) => {
  function handleClassName() {
    return `link ${props.additionalClass}`;
  }

  return (
    <LinkRouter
      to={{ pathname: props.href }}
      className={handleClassName()}
      style={props.style}
    >
      {props.children}
    </LinkRouter>
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
