import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'ok' | 'warn' | 'danger' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'info', className = '' }: BadgeProps) {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
}