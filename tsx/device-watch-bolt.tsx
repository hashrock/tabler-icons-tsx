function IconDeviceWatchBolt({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-watch-bolt"
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
      <path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
      <path d="M9 18v3h4.5" />
      <path d="M9 6v-3h6v3" />
      <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  );
}
export default IconDeviceWatchBolt;
