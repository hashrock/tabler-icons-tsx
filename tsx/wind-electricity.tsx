function IconWindElectricity({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wind-electricity"
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
      <path d="M20 7l-3 5h4l-3 5" />
      <path d="M3 16h4a2 2 0 1 1 0 4" />
      <path d="M3 12h8a2 2 0 1 0 0 -4" />
      <path d="M3 8h3a2 2 0 1 0 0 -4" />
    </svg>
  );
}
export default IconWindElectricity;
