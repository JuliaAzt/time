import React from "react";
import PropTypes from "prop-types";
import "./Select.scss";

const Select = (props) => {
  function handleClassName() {
    return `select__group ${props.additionalClass}${
      props.error ? " error" : ""
    }`;
  }

  const hasError = props.error ? <span>{props.errorMessage}</span> : "";
  const label = props.label !== "" ? <label>{props.label}</label> : <br />;

  return (
    <div className={handleClassName()}>
      {label}
      <select onChange={() => props.onChange()}>
        {props.options.map((opt, index) => {
          return (
            <option key={index} value={index}>
              {opt}
            </option>
          );
        })}
      </select>
      {hasError}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  additionalClass: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  disabled: false,
  required: false,
  value: "",
  error: false,
  errorMessage: "",
  additionalClass: "",
  label: "",
};

export default Select;
