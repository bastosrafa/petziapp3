import React from 'react';
import { Tooltip } from './Tooltip';
import './Button.css';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  tooltip,
  icon,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    'button',
    `button-${variant}`,
    `button-${size}`,
    disabled ? 'button-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  const buttonContent = (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip}>
        {buttonContent}
      </Tooltip>
    );
  }

  return buttonContent;
};

export default Button; 