import React, { MouseEventHandler } from 'react';

type Props = {
  primary?: boolean,
  backgroundColor?: string,
  size: 'small' | 'medium' | 'large',
  label: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  backgroundColor = undefined,
  size = 'medium',
  label,
  onClick
}: Props) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor: backgroundColor } : undefined}
      onClick={onClick}
    >
      {label}
    </button>
  );
};