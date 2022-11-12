import ClassNames from "classnames";
import "./Button.scss";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  children?: React.ReactNode;
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  label,
  icon,
  className,
  variant = "primary",
  type = "button",
  ...others
}: ButtonProps) => {
  const elementClasses = ClassNames(className, `button--${variant}`, "button");

  return (
    <button {...others} type={type} className={elementClasses}>
      {icon}
      {label}
    </button>
  );
};
