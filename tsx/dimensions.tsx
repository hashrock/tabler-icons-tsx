function IconDimensions({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-dimensions"
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
      <path d="M3 5h11" />
      <path d="M12 7l2 -2l-2 -2" />
      <path d="M5 3l-2 2l2 2" />
      <path d="M19 10v11" />
      <path d="M17 19l2 2l2 -2" />
      <path d="M21 12l-2 -2l-2 2" />
      <path d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z" />
    </svg>
  );
}
export default IconDimensions;
