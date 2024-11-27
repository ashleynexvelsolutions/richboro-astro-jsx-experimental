import * as React from 'react'
const SvgCheckmark = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    viewBox="0 0 45 45"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={45}
        height={45}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill="#fff" d="M45 0H0v45h45z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill="#3E5C54"
          d="M22.5 0C10.094 0 0 10.093 0 22.5S10.094 45 22.5 45 45 34.907 45 22.5 34.907 0 22.5 0m12.92 18.7L21.284 32.835c-.6.601-1.4.932-2.25.932s-1.649-.331-2.25-.932L9.58 25.631a3.16 3.16 0 0 1-.932-2.25c0-.85.331-1.65.932-2.25a3.16 3.16 0 0 1 2.25-.932c.85 0 1.65.33 2.25.932l4.954 4.954L30.92 14.199a3.16 3.16 0 0 1 2.25-.931c.85 0 1.648.33 2.25.931a3.186 3.186 0 0 1 0 4.5"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h45v45H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCheckmark
