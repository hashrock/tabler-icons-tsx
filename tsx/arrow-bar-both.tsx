function IconArrowBarBoth({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-bar-both"
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
      <path d="M8 12h-6" />
      <path d="M5 15l-3 -3l3 -3" />
      <path d="M22 12h-6" />
      <path d="M19 15l3 -3l-3 -3" />
      <path d="M12 4v16" />
    </svg>
  );
}
export default IconArrowBarBoth;
