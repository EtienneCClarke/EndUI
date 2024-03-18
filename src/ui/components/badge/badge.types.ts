interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactNode[] | string | number;
    className?: string;
    variant?: "primary" | "secondary" | "success" | "warning" | "destructive" | "outline";
}

export type { BadgeProps }