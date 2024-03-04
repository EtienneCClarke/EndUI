import css from "./badge.module.css";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[] | string | number;
  className?: string;
  variant?: "primary" | "secondary" | "warning" | "outline";
}

const Badge = ({
  children,
  className,
  variant = "primary",
  ...props
}: BadgeProps) => {
  return (
    <div className={`${css.badge} ${css[variant]} ${className ? className : ''}`} {...props}>
      {children}
    </div>
  );
};

export { Badge };
