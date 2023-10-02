function IconClockBolt({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-clock-bolt"
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
      <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
      <path d="M12 7v5l3 3" />
      <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  );
}
export default IconClockBolt;
