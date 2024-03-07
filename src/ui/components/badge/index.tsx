import { forwardRef } from 'react';
import css from "./badge.module.css";
import { BadgeProps } from './badge.types';

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, className, variant = "primary", ...props },
    ref
  ) => {

    return (
      <div className={`${css.badge} ${css[variant]} ${className ? className : ''}`} {...props} ref={ref}>
        {children}
      </div>
    );
    
  }
)

export { Badge };
