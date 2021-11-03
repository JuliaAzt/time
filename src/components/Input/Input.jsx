import React from "react";
import "./Input.scss";
import PropTypes from "prop-types";

const Input = (props) => {

  function handleClassName() {
    return `input__group ${props.additionalClass} ${
      props.error ? 'error' : ''
    }`;
  }

  const hasError = props.error ? <span>{props.errorMessage}</span> : "";

  return (
    <div className={handleClassName()}>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      {hasError}
    </div>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  additionalClass: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  disabled: false,
  value: "",
  error: false,
  errorMessage: "",
  additionalClass: "",
  placeholder: "Enter your input",
  label: "",
};

export default Input;
