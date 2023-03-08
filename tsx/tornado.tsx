function IconTornado({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-tornado"
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
      <path d="M21 4l-18 0" />
      <path d="M13 16l-6 0" />
      <path d="M11 20l4 0" />
      <path d="M6 8l14 0" />
      <path d="M4 12l12 0" />
    </svg>
  );
}
export default IconTornado;
