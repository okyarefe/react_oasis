import styles from './Button.module.scss'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  variation?: 'primary' | 'secondary' | 'danger'
  children: ReactNode
  className?: string
}

function Button({
  size = 'sm',
  variation = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variation], styles[size], className]
    .filter(Boolean)
    .join(' ')
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
