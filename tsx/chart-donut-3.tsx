function IconChartDonut3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chart-donut-3"
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
      <path d="M12 3v5m4 4h5" />
      <path d="M8.929 14.582l-3.429 2.918" />
      <circle cx={12} cy={12} r={4} />
      <circle cx={12} cy={12} r={9} />
    </svg>
  );
}
export default IconChartDonut3;
