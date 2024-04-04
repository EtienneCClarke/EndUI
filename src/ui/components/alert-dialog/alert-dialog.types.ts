import * as React from "react";
import { ButtonProps } from "../button/button.types";

interface AlertDialogProps {
    children: any;
}

interface AlertDialogTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: any;
    className?: string;
}

interface AlertDialogContentProps extends React.HTMLAttributes<HTMLElement> {
    children: any;
    className?: string;
}

interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: any;
    className?: string;
}

interface AlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: any;
    className?: string;
}

interface AlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: any;
    className?: string;
}

interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: any;
    className?: string;
}

interface AlertDialogActionProps extends ButtonProps {
    children: any;
    action?: () => any;
    className?: string;
}

export type {
    AlertDialogProps,
    AlertDialogTriggerProps,
    AlertDialogContentProps,
    AlertDialogHeaderProps,
    AlertDialogTitleProps,
    AlertDialogDescriptionProps,
    AlertDialogFooterProps,
    AlertDialogActionProps
}