import * as React from "react";

interface SelectedContextProps {
    open: boolean;
    setOpen: (state: boolean) => any;
    selected: any;
    setSelected: (value: any, label: any) => any;
    label: any;
}

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
    defaultValue?: any,
    defaultLabel?: string;
    className?: string;
    onChange?: (value: any) => any
}

interface SelectTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: any
}

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: any;
    className?: string;
}

interface SelectItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: any;
    className?: string;
    value: any;
}

interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: any;
    title: string;
    className?: string;
}

export type {
    SelectedContextProps,
    SelectProps,
    SelectTriggerProps,
    SelectContentProps,
    SelectItemProps,
    SelectGroupProps
}