interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
    className?: string;
    variant?: "primary" | "success" | "warning" | "destructive";
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children?: any;
    className?: string;
}

interface AlertContentProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children?: any;
    className?: string;
}

interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
    className?: string;
}

export type { AlertProps, AlertTitleProps, AlertContentProps, AlertIconProps }