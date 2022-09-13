function IconArrowRotaryLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-rotary-left"
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
      <circle transform="matrix(-1 0 0 1 32 0)" cx={16} cy={7} r={3} />
      <path d="M16 10v10" />
      <path d="M13 7h-10" />
      <path d="M7 11l-4 -4l4 -4" />
    </svg>
  );
}

export default IconArrowRotaryLeft;
