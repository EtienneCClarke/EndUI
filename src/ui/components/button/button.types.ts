interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "primary"
        | "secondary"
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