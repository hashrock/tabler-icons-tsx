function IconArrowsRightLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-right-left"
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
      <path d="M21 7l-18 0" />
      <path d="M18 10l3 -3l-3 -3" />
      <path d="M6 20l-3 -3l3 -3" />
      <path d="M3 17l18 0" />
    </svg>
  );
}
export default IconArrowsRightLeft;
