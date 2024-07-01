function IconArrowRightFromArc({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-right-from-arc"
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
      <path d="M15 12h-12" />
      <path d="M7 8l-4 4l4 4" />
      <path d="M12 21a9 9 0 0 0 0 -18" />
    </svg>
  );
}
export default IconArrowRightFromArc;
