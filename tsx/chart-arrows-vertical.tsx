function IconChartArrowsVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chart-arrows-vertical"
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
      <path d="M18 21v-14" />
      <path d="M9 15l3 -3l3 3" />
      <path d="M15 10l3 -3l3 3" />
      <path d="M3 21l18 0" />
      <path d="M12 21l0 -9" />
      <path d="M3 6l3 -3l3 3" />
      <path d="M6 21v-18" />
    </svg>
  );
}
export default IconChartArrowsVertical;
