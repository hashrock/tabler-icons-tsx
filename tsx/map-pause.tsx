function IconMapPause({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-map-pause"
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
      <path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" />
      <path d="M9 4v13" />
      <path d="M15 7v6.5" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </svg>
  );
}
export default IconMapPause;
