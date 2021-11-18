import React from "react";
import InputMask from "react-input-mask";
import "./Input.scss";
import PropTypes from "prop-types";

const Input = (props) => {
  function handleClassName() {
    return `input__group ${props.additionalClass} ${
      props.error ? "error" : ""
    }`;
  }

  const hasError = props.error ? <span>{props.errorMessage}</span> : "";
  const label = props.label !== "" ? <label>{props.label}</label> : "";

  return (
    <div className={handleClassName()}>
      {label}
      <InputMask
        mask={props.mask}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
      />
      {hasError}
    </div>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "email"]),
  value: PropTypes.string,
  mask: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  additionalClass: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  disabled: false,
  required: false,
  value: "",
  mask: "",
  error: false,
  errorMessage: "",
  additionalClass: "",
  placeholder: "Enter your input",
  label: "",
};

export default Input;
