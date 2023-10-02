function IconClockPause({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-clock-pause"
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
      <path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922" />
      <path d="M12 7v5l2 2" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </svg>
  );
}
export default IconClockPause;
