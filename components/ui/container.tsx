import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
type Container = ComponentProps<'div'>

export default function Container({ className, ...props }: Container) {
  return <div className={twMerge('max-w-[1280px] mx-auto', className)} {...props} />
}
