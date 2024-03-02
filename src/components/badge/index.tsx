import css from "./badge.module.css";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[] | string | number;
  className?: string;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "warning" | "outline";
}

const Badge = ({
  children,
  variant = "primary",
  className,
  ...props
}: BadgeProps) => {
  return (
    <div className={`${css.badge} ${css[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Badge };
