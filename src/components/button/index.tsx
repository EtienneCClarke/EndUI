import * as React from "react";
import css from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "warning"
    | "outline"
    | "ghost"
    | "link"
    | "icon"
    | "loading";
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", disabled = false, className, ...props },
    ref,
  ) => {
    return (
      <button
        {...props}
        className={`${css.button} ${css[variant]} ${className ? className : ''}`}
        ref={ref}
        disabled={variant === "loading" ? true : disabled}
      >
        {variant === "loading" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 -960 960 960"
            width="18"
            className={css.loading_icon}
          >
            <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

export { Button };
