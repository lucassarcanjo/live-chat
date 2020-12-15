/* eslint-disable react/button-has-type */

import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Button.scss";

const Button = ({ label, icon, type, className, ...props }) => {
  const elementClasses = ClassNames(className, "button__wrapper");

  return (
    <div>
      <button {...props} type={type} className={elementClasses}>
        {icon}
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: "",
  icon: <></>,
  className: "",
};

export default Button;
