function IconChartArrows({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chart-arrows"
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
      <path d="M3 18l14 0" />
      <path d="M9 9l3 3l-3 3" />
      <path d="M14 15l3 3l-3 3" />
      <path d="M3 3l0 18" />
      <path d="M3 12l9 0" />
      <path d="M18 3l3 3l-3 3" />
      <path d="M3 6l18 0" />
    </svg>
  );
}
export default IconChartArrows;
