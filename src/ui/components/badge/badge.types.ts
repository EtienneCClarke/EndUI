interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactNode[] | string | number;
    className?: string;
    variant?: "primary" | "secondary" | "warning" | "destructive" | "outline";
}

export type { BadgeProps }