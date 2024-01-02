// Button.js
import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor || '#007bff'};
  color: ${({ color }) => color || 'white'};
  font-size: ${({ size }) =>
    size === 'large' ? '18px' : size === 'small' ? '14px' : '16px'};
  padding: ${({ size }) =>
    size === 'large'
      ? '15px 30px'
      : size === 'small'
        ? '5px 10px'
        : '10px 20px'};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      color: ${({ bgColor }) => bgColor || '#007bff'};
      border: 2px solid ${({ bgColor }) => bgColor || '#007bff'};
    `}

  &:hover {
    background-color: ${({ bgColor }) =>
      bgColor === '#007bff' ? '#0056b3' : '#0056b3'};
  }
`

const Button = ({ children, onClick, color, bgColor, size, outline }) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      size={size}
      outline={outline}
    >
      {children}
    </StyledButton>
  )
}

export default Button
