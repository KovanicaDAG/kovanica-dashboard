import React from 'react';

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  keyField?: number;
  className?: string;
  emptyMessage?: string;
}

export function Table({ headers, rows, keyField = 0, className = '', emptyMessage = 'No data' }: TableProps) {
  if (rows.length === 0) {
    return (
      <div className="table-container">
        <p className="text-muted text-center py-8">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`table-container scrollbar-thin ${className}`}>
      <table>
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row[keyField] as string | number}>
              {row.map((cell, j) => (
                <td key={j}>
                  {typeof cell === 'number' ? (
                    <code className="font-mono">{cell.toLocaleString()}</code>
                  ) : (
                    <code className="font-mono">{cell}</code>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}