function IconChartAreaLine({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chart-area-line"
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
      <path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
      <path d="M4 12l3 -4l4 2l5 -6l4 4" />
    </svg>
  );
}
export default IconChartAreaLine;
