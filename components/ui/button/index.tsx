import { twMerge } from 'tailwind-merge'
import RawButton, { ButtonProps } from './raw-button'

export function Primary({ className, ...props }: ButtonProps) {
  return (
    <RawButton
      className={twMerge(
        'bg-primary-500 hover:bg-primary-700 p-5 rounded-lg w-full font-semibold gap-4',
        className
      )}
      {...props}
    />
  )
}

export function Secondary({ className, ...props }: ButtonProps) {
  return (
    <RawButton
      className={twMerge(
        'px-5 py-4 bg-secondary-500 hover:bg-secondary-700 rounded-lg w-full font-semibold',
        className
      )}
      {...props}
    />
  )
}

const Button = {
  Primary,
  Secondary
}

export default Button
