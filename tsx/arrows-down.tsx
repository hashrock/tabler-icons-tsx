function IconArrowsDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-down"
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
      <path d="M7 21l0 -18" />
      <path d="M20 18l-3 3l-3 -3" />
      <path d="M4 18l3 3l3 -3" />
      <path d="M17 21l0 -18" />
    </svg>
  );
}
export default IconArrowsDown;
