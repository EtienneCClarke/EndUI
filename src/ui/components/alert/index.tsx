import { forwardRef } from 'react';
import { AlertProps, AlertTitleProps } from './alert.types';
import css from "./alert.module.css";

const Alert = forwardRef<HTMLDivElement, AlertProps>(
    (
        { children, className, variant = "primary", ...props },
        ref
    ) => {
    return (
        <div
            role="alert"
            ref={ref}
            className={`${css.alert} ${css[variant]} ${className}`}
            {...props}
        >
            {children}
        </div>
    )
});

const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
    (
        { children, className, ...props },
        ref
    ) => {
    return (
        <h5 ref={ref} className={`${css.alert_title} ${className}`} {...props}>
            {children}
        </h5>
    );
});

const AlertContent = forwardRef<HTMLHeadingElement, AlertTitleProps>(
    (
        { children, className, ...props },
        ref
    ) => {
    return (
        <p ref={ref} className={`${css.alert_content} ${className}`} {...props}>
            {children}
        </p>
    );
});

export { Alert, AlertTitle, AlertContent }