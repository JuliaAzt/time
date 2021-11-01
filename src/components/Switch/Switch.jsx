import React from "react";
import "./Switch.scss";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const Switch = (props) => {
  return (
    <>
      <label htmlFor="switch" className="switch">
        <input
          type="checkbox"
          id="switch"
          name="switch"
          onChange={(e) => props.onChange(e.target.value)}
          checked={props.checked}
        />
        <FaCheck className="switch__slider" />
      </label>
      {props.label && <span className="label">{props.label}</span>}
    </>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

Switch.defaultProps = {
  onChange: () => {},
  checked: false,
};

export default Switch;
