import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${props => props.size === 'small' ? '16px' : props.size === 'large' ? '32px' : '24px'};
  height: ${props => props.size === 'small' ? '16px' : props.size === 'large' ? '32px' : '24px'};
`;

const SpinnerCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: ${props => props.size === 'small' ? '2px' : '3px'} solid transparent;
  border-top-color: ${props => props.color};
  border-left-color: ${props => props.color};
  animation: ${spin} 0.8s linear infinite;
`;

const LoadingSpinner = ({ size = 'medium', color = '#3A86FF' }) => {
  return (
    <SpinnerContainer size={size}>
      <SpinnerCircle size={size} color={color} />
    </SpinnerContainer>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string
};

export default LoadingSpinner; 