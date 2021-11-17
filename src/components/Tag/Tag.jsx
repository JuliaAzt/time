import React from "react";
import "./Tag.scss";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { IoMdClose } from "react-icons/io";

const Tag = (props) => {
  function handleClassName() {
    return ClassNames("tag", props.outline && "outline");
  }
  return (
    <span
      className={handleClassName()}
      style={{ backgroundColor: props.outline ? "transparent" : props.color }}
    >
      {props.children}
      {props.hasCloseIcon && <IoMdClose />}
    </span>
  );
};

Tag.propTypes = {
  color: PropTypes.string,
  outline: PropTypes.bool,
  hasCloseIcon: PropTypes.bool,
};

Tag.defaultProps = {
  color: "transparent",
  outline: false,
  hasCloseIcon: false,
};

export default Tag;
