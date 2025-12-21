/**
 * DynamicButton Component
 * 
 * A reusable button that accepts different actions via the onClick prop.
 * 
 * USAGE:
 *   <DynamicButton onClick={() => console.log('clicked')}>Click Me</DynamicButton>
 *   <DynamicButton variant="primary" onClick={handleSubmit}>Submit</DynamicButton>
 *   <DynamicButton variant="danger" onClick={handleDelete} disabled>Delete</DynamicButton>
 *   <DynamicButton variant="outline" size="small" onClick={handleCancel}>Cancel</DynamicButton>
 * 
 * PROPS:
 *   - onClick: (event) => void - The action to perform on click
 *   - variant: 'primary' | 'secondary' | 'danger' | 'outline' - Button style
 *   - size: 'small' | 'medium' | 'large' - Button size
 *   - disabled: boolean - Disable the button
 *   - type: 'button' | 'submit' | 'reset' - Button type
 *   - children: ReactNode - Button content
 */

import React from 'react';
import './DynamicButton.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface DynamicButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}

export const DynamicButton: React.FC<DynamicButtonProps> = ({
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  children,
  className = '',
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default DynamicButton;