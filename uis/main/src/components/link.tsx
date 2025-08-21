import React from 'react';

type ButtonType = "button" | "submit" | "reset";

interface ClinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: ButtonType;
}

const Clink: React.FC<ClinkProps> = ({ 
  children, 
  onClick, 
  disabled = false,
  size = 'medium',
  className = '',
  type = 'button',
  ...props 
}) => {
  const sizeClasses = {
    small: 'text-xs px-3 py-1.5',
    medium: 'text-sm px-5 py-2.5',
    large: 'text-base px-6 py-3'
  };

  return (
    <button 
      className={`holographic-button ${sizeClasses[size]} ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Clink;