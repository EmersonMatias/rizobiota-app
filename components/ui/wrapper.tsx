import { ComponentProps } from 'react'
type Wrapper = ComponentProps<'div'>

export default function Wrapper(props: Wrapper) {
  return <div {...props} />
}
