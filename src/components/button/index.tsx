import * as React from "react"
import css from "./button.module.css";


const Button = React.forwardRef(({ className, children, variant, ...props }, ref) => {
    return (
        <button
            {...props}
            className={
                `${css.button}
                ${className}`
            }
        >
            {children}
        </button>
    );
})

export { Button }