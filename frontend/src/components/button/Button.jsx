/* eslint-disable react/button-has-type */

import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Button.scss";

const Button = ({ label, icon, type, variant, className, ...props }) => {
  const elementClasses = ClassNames(className, `button--${variant}`, "button");

  return (
    <button {...props} type={type} className={elementClasses}>
      {icon}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.func,
  variant: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: "",
  icon: <></>,
  variant: "primary",
  className: "",
};

export default Button;
