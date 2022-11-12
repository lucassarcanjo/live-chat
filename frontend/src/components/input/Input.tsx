import React from "react";
import ClassNames from "classnames";

import "./Input.scss";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

export const Input = ({ className, type, ...props }: InputProps) => {
  const elementClasses = ClassNames(className, "input__wrapper");

  return <input {...props} type={type} className={elementClasses} />;
};

export default Input;
