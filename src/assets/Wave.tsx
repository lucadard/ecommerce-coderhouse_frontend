import React from 'react'

type Props = {
  className: string
}

export const Wave = ({ className }: Props) => {
  return (
    <svg
      id="wave"
      style={{ transform: 'rotate(180deg) translateY(1px)'  }}
      viewBox="0 0 1440 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
          <stop stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path d="M0,80L120,75C240,70,480,60,720,61.7C960,63,1200,77,1440,70C1680,63,1920,37,2160,21.7C2400,7,2640,3,2880,1.7C3120,0,3360,0,3600,3.3C3840,7,4080,13,4320,28.3C4560,43,4800,67,5040,71.7C5280,77,5520,63,5760,56.7C6000,50,6240,50,6480,45C6720,40,6960,30,7200,30C7440,30,7680,40,7920,36.7C8160,33,8400,17,8640,15C8880,13,9120,27,9360,36.7C9600,47,9840,53,10080,51.7C10320,50,10560,40,10800,45C11040,50,11280,70,11520,75C11760,80,12000,70,12240,70C12480,70,12720,80,12960,73.3C13200,67,13440,43,13680,40C13920,37,14160,53,14400,55C14640,57,14880,43,15120,46.7C15360,50,15600,70,15840,73.3C16080,77,16320,63,16560,56.7C16800,50,17040,50,17160,50L17280,50L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
    </svg>
  )
}
