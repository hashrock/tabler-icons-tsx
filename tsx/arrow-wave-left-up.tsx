function IconArrowWaveLeftUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-wave-left-up"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width={stroke}
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10h-4v4" />
      <path d="M21 12c-.887 -1.285 -2.48 -2.033 -4 -2c-1.52 -.033 -3.113 .715 -4 2c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3 -1 -4 -2l-2 -2" />
    </svg>
  );
}
export default IconArrowWaveLeftUp;
