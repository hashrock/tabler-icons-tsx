function IconArrowLeftFromArc({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-left-from-arc"
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
      <path d="M9 12h12" />
      <path d="M17 16l4 -4l-4 -4" />
      <path d="M12 3a9 9 0 1 0 0 18" />
    </svg>
  );
}
export default IconArrowLeftFromArc;