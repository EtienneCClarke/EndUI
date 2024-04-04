import { forwardRef } from "react";
import { InputProps } from "./input.types";
import css from "./input.module.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { className, type = "text", ...props },
        ref
    ) => {
        return (
            <input
                type={type}
                className={`${css.input} ${className ? className : ''}`}
                ref={ref}
                {...props}
            />
        )
    }
)

export { Input }