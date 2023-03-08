function IconBuildingSkyscraper({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-building-skyscraper"
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
      <path d="M3 21l18 0" />
      <path d="M5 21v-14l8 -4v18" />
      <path d="M19 21v-10l-6 -4" />
      <path d="M9 9l0 .01" />
      <path d="M9 12l0 .01" />
      <path d="M9 15l0 .01" />
      <path d="M9 18l0 .01" />
    </svg>
  );
}
export default IconBuildingSkyscraper;
