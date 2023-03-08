function IconClockCheck({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-clock-check"
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
      <path d="M20.94 13.046a9 9 0 1 0 -8.893 7.954" />
      <path d="M12 7v5l3 3" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}
export default IconClockCheck;
