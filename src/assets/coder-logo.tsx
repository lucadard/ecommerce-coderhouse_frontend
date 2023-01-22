type Props = {
  className?: string
}
export const CoderLogo = ({ className = 'fill-secondary' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className={className}
      width={'16px'}
      height={'28px'}
      preserveAspectRatio="xMidYMid meet"
      // fill={fill}
    >
      <path d="M12.0673 22.6136C11.2284 26.5273 8.80847 28.4682 4.87209 28.4682C1.61327 28.4682 0 27.1318 0 24.4909C0 23.9182 0.0645312 23.2818 0.225859 22.6136L3.74279 6.35455C4.5817 2.44091 6.96934 0.5 10.938 0.5C14.1968 0.5 15.8423 1.83636 15.8423 4.47727C15.8423 5.05 15.7778 5.65455 15.6165 6.35455L14.7453 10.2045H10.1636L11.0025 6.35455C11.0348 6.16364 11.0671 5.97273 11.0671 5.81364C11.0671 5.17727 10.7121 4.82727 9.97003 4.82727H9.93776C9.03433 4.82727 8.48582 5.33636 8.25996 6.35455L4.77529 22.6136C4.74302 22.8045 4.71076 22.9955 4.71076 23.1545C4.71076 23.8227 5.06568 24.1409 5.80778 24.1409C6.71122 24.1409 7.292 23.6318 7.48559 22.6136L8.32449 18.7636H12.9062L12.0673 22.6136Z"></path>
    </svg>
  )
}
