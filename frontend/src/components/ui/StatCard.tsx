import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ label, value, trend, trendUp, icon, className = '' }: StatCardProps) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="stat-label">{label}</p>
          <p className="stat-value font-mono">{value}</p>
          {trend && (
            <p className={`text-xs mt-1 ${trendUp ? 'text-ok' : 'text-danger'}`}>
              {trendUp ? '▲' : '▼'} {trend}
            </p>
          )}
        </div>
        {icon && <div className="text-muted">{icon}</div>}
      </div>
    </div>
  );
}