import { forwardRef } from "react";
import { CardDescriptionProps, CardProps, CardTitleProps } from "./card.types";
import css from "./card.module.css";

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <div className={`${css.card} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

const CardHeader = forwardRef<HTMLDivElement, CardProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <div className={`${css.header} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <h3 className={`${css.title} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </h3>
        )
    }
)

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <p className={`${css.description} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </p>
        )
    }
)

const CardContent = forwardRef<HTMLDivElement, CardProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <div className={`${css.content} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

const CardFooter = forwardRef<HTMLDivElement, CardProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        return (
            <div className={`${css.footer} ${className ? className : ''}`} ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }