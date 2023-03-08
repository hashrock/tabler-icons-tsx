function IconClockX({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-clock-x"
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
      <path d="M20.98 12.61a9 9 0 1 0 -8.485 8.377" />
      <path d="M12 7v5l2 2" />
      <path d="M21.5 21.5l-5 -5" />
      <path d="M16.5 21.5l5 -5" />
    </svg>
  );
}
export default IconClockX;
