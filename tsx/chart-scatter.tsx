function IconChartScatter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chart-scatter"
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
      <path d="M3 3v18h18" />
      <path d="M8 15.015v.015" />
      <path d="M16 16.015v.015" />
      <path d="M8 7.03v.015" />
      <path d="M12 11.03v.015" />
      <path d="M19 11.03v.015" />
    </svg>
  );
}
export default IconChartScatter;
