function IconDeviceAirpods({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-airpods"
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
      <path d="M6 4a4 4 0 0 1 4 3.8l0 .2v10.5a1.5 1.5 0 0 1 -3 0v-6.5h-1a4 4 0 0 1 -4 -3.8l0 -.2a4 4 0 0 1 4 -4z" />
      <path d="M18 4a4 4 0 0 0 -4 3.8l0 .2v10.5a1.5 1.5 0 0 0 3 0v-6.5h1a4 4 0 0 0 4 -3.8l0 -.2a4 4 0 0 0 -4 -4z" />
    </svg>
  );
}
export default IconDeviceAirpods;
