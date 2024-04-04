import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
    className?: string;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children?: any;
    className?: string;
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children?: any;
    className?: string;
}

export type {
    CardProps,
    CardTitleProps,
    CardDescriptionProps
}