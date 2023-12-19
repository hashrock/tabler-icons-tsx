function IconSwipeDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-swipe-down"
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
      <path d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
      <path d="M12 12v8" />
      <path d="M9 17l3 3l3 -3" />
    </svg>
  );
}
export default IconSwipeDown;
