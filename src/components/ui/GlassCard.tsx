import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
    return (
        <div className={cn(
            "bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg shadow-slate-900/5 transition-all duration-300",
            hoverEffect && "hover:shadow-xl hover:bg-white/50 hover:-translate-y-1",
            className
        )}>
            {children}
        </div>
    );
}
