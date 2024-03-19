import * as React from "react";

type ToastPosition = "top_left" | "top_right" | "bottom_left" | "bottom_right";

type ToastVariant = "primary" | "secondary" | "success" | "destructive" | "warning" ;

type ToastAction = {
    label: string;
    fn: () => {};
}

interface ToastContextProps {
    create: (content: any) => void;
    close: (id: number) => void;
}

interface ToastProviderProps {
    children: any;
    position?: ToastPosition;
    className?: string;
}

interface ToastDataProps {
    id: number;
    content: any;
}

interface ToastCreateProps {
    id: number;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastAction;
    duration?: number;
    variant: ToastVariant;
}

interface ToastProps {
    id: number;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastAction;
    duration?: number;
    variant: ToastVariant;
    close: (id?: number) => void;
}

export type {
    ToastContextProps,
    ToastDataProps,
    ToastProviderProps,
    ToastAction,
    ToastProps,
    ToastPosition,
    ToastCreateProps
}