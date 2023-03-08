function IconCircleChevronsRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-chevrons-right"
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
      <path d="M9 9l3 3l-3 3" />
      <path d="M13 9l3 3l-3 3" />
      <path d="M3 12a9 9 0 1 0 0 -.265l0 .265z" />
    </svg>
  );
}
export default IconCircleChevronsRight;
