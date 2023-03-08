function IconGlobe({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-globe"
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
      <path d="M12 10m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" />
      <path d="M12 18l0 4" />
      <path d="M8 22l8 0" />
    </svg>
  );
}
export default IconGlobe;
