function IconChartScatter3d({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chart-scatter-3d"
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
      <path d="M3 20l9 -7" />
      <path d="M12 3v10l9 7" />
      <path d="M17 12v.015" />
      <path d="M17 4.015v.015" />
      <path d="M21 8.015v.015" />
      <path d="M12 19.015v.015" />
      <path d="M3 12.015v.015" />
      <path d="M7 8.015v.015" />
      <path d="M3 4.015v.015" />
    </svg>
  );
}
export default IconChartScatter3d;
