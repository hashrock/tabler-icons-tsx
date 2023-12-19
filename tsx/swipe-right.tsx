function IconSwipeRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-swipe-right"
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
      <path d="M4 12a4 4 0 1 1 8 0a4 4 0 0 1 -8 0z" />
      <path d="M12 12h8" />
      <path d="M17 15l3 -3l-3 -3" />
    </svg>
  );
}
export default IconSwipeRight;
