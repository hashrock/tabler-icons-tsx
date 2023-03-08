function IconBuildingStadium({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-building-stadium"
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
      <path d="M12 12m-8 0a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
      <path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
      <path d="M15 6h4v-3h-4v7" />
      <path d="M7 6h4v-3h-4v7" />
    </svg>
  );
}
export default IconBuildingStadium;
