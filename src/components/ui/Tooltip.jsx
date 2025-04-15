import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

export const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const childRect = tooltipRef.current.firstChild.getBoundingClientRect();
      
      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = childRect.top - rect.height - 8;
          left = childRect.left + (childRect.width - rect.width) / 2;
          break;
        case 'bottom':
          top = childRect.bottom + 8;
          left = childRect.left + (childRect.width - rect.width) / 2;
          break;
        case 'left':
          top = childRect.top + (childRect.height - rect.height) / 2;
          left = childRect.left - rect.width - 8;
          break;
        case 'right':
          top = childRect.top + (childRect.height - rect.height) / 2;
          left = childRect.right + 8;
          break;
        default:
          top = childRect.top - rect.height - 8;
          left = childRect.left + (childRect.width - rect.width) / 2;
      }

      setTooltipPosition({ top, left });
    }
  }, [isVisible, position]);

  return (
    <div
      ref={tooltipRef}
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className={`tooltip tooltip-${position}`}
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}; 