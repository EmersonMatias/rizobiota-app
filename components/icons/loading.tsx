import { SVGProps } from 'react'

export default function Loading(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <radialGradient
        id="a5"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stopColor={props.stopColor}></stop>
        <stop offset=".3" stopColor={props.stopColor} stopOpacity=".9"></stop>
        <stop offset=".6" stopColor={props.stopColor} stopOpacity=".6"></stop>
        <stop offset=".8" stopColor={props.stopColor} stopOpacity=".3"></stop>
        <stop offset="1" stopColor={props.stopColor} stopOpacity="0"></stop>
      </radialGradient>
      <circle
        style={{
          transformOrigin: 'center',
          strokeDashoffset: '0',
          strokeDasharray: '200 1000',
          strokeLinecap: 'round',
          strokeWidth: '15'
        }}
        fill="none"
        stroke="url(#a5)"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
      <circle
        style={{
          transformOrigin: 'center',
          strokeWidth: '15',
          strokeLinecap: 'round'
        }}
        fill="none"
        opacity=".2"
        stroke={props.stopColor}
        cx="100"
        cy="100"
        r="70"
      ></circle>
    </svg>
  )
}
