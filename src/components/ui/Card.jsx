import React from 'react';
import './Card.css';

const Card = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const cardClasses = [
    'card',
    `card-${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card; 