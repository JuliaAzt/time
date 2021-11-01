import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  function handleClassName() {
    return `button button__${props.buttonType} ${
      props.additionalClass && props.additionalClass
    }`;
  }

  return (
    <>
      <button
        className={handleClassName()}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(["primary"]),
  additionalClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  onClick: () => {},
  buttonType: "primary",
  additionalClass: "",
};

export default Button;
