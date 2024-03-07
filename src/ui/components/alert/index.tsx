import { forwardRef } from 'react';
import { AlertIconProps, AlertProps, AlertTitleProps } from './alert.types';
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
        );

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

const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>(
    (
        { children, className, ...props },
        ref
    ) => {
        
        return (
            <div
                className={`${css.alert_icon} ${className}`}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );

});

function RocketIcon() {
    return (
        <AlertIcon>
            <svg xmlns="http://www.w3.org/2000/svg" data-icon height="20" viewBox="0 -960 960 960" width="20">
                <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/>
            </svg>
        </AlertIcon>
    );
}

function SuccessIcon() {
    return (
        <AlertIcon>
            <svg xmlns="http://www.w3.org/2000/svg" data-icon height="20" viewBox="0 -960 960 960" width="20">
                <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/>
            </svg>
        </AlertIcon>
    );
}

function WarningIcon() {
    return (
        <AlertIcon>
            <svg xmlns="http://www.w3.org/2000/svg" data-icon height="20" viewBox="0 -960 960 960" width="20">
                <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/>
            </svg>
        </AlertIcon>
    );
}

export { Alert, AlertTitle, AlertContent, AlertIcon, RocketIcon, SuccessIcon, WarningIcon }