import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function Shell({ children, className }: ShellProps) {
  return (
    <div className={cn('container mx-auto px-4 py-8', className)}>
      {children}
    </div>
  );
}
