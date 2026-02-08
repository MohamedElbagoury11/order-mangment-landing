import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    href?: string;
    target?: string;
    rel?: string;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = "",
    href,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-900/30 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105",
        secondary: "bg-white text-slate-900 shadow-md hover:bg-slate-50",
        outline: "border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm",
        ghost: "text-slate-700 hover:bg-black/5"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg md:text-xl"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
