import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'rounded text-primary-foreground py-1 px-4 bg-gradient-to-r from-primary via-pink-600  to-blue-600 transition duration-300 hover:shadow-md hover:shadow-slate-700 active:scale-95',
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
