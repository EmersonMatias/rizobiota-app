import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Loading from '../../icons/loading'

export type ButtonProps = ComponentProps<'button'> & {
  loading?: boolean
  loadingLabel?: string
  loadingPosition?: 'right' | 'left'
  loadingColor?: string
  icon?: ReactNode
  iconPosition?: 'right' | 'left'
}

export default function RawButton({
  className,
  children,
  loading,
  loadingPosition = 'right',
  loadingLabel,
  loadingColor = '#FFFFFF',
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const loadingLeft = loading && loadingPosition === 'left'
  const iconLeft = !loading && iconPosition === 'left'

  return (
    <button
      disabled={loading || props.disabled}
      {...props}
      className={twMerge(
        'cursor-pointer flex gap-2 items-center justify-center disabled:brightness-75 disabled:cursor-default transition-all duration-500',
        className
      )}
    >
      {loadingLeft && <Loading className="w-auto h-6" stopColor={loadingColor} />}
      {iconLeft && icon}
      {!loading && children}
      {loading && loadingLabel && loadingLabel}
      {loading && !loadingLabel && children}
      {loading && loadingPosition === 'right' && (
        <Loading className="w-auto h-6" stopColor={loadingColor} />
      )}
      {!loading && iconPosition === 'right' && icon}
    </button>
  )
}
