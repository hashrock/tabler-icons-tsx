function IconGridGoldenratio({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-grid-goldenratio"
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
      <path d="M3 10h18" />
      <path d="M3 14h18" />
      <path d="M10 3v18" />
      <path d="M14 3v18" />
    </svg>
  );
}
export default IconGridGoldenratio;
