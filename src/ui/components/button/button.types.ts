interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "destructive"
        | "outline"
        | "ghost"
        | "link"
        | "icon"
        | "loading";
    disabled?: boolean;
}

export type { ButtonProps }