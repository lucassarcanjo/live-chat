import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Input.scss";

const Input = ({ className, type, ...props }) => {
  const elementClasses = ClassNames(className, "input__wrapper");

  return <input {...props} type={type} className={elementClasses} />;
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: "",
};

export default Input;
