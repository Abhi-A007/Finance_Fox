import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30",
    secondary: "bg-card text-white hover:bg-slate-700",
    ghost: "bg-transparent text-textMuted hover:text-white hover:bg-card",
    outline: "border border-slate-600 text-white hover:bg-card"
  };

  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 px-4 text-sm rounded-lg",
    lg: "h-14 px-8 text-lg rounded-2xl"
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
