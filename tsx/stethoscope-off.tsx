function IconStethoscopeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stethoscope-off"
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
      <path d="M4.172 4.179a2 2 0 0 0 -1.172 1.821v3.5a5.5 5.5 0 0 0 9.856 3.358m1.144 -2.858v-4a2 2 0 0 0 -2 -2h-1" />
      <path d="M8 15a6 6 0 0 0 10.714 3.712m1.216 -2.798c.046 -.3 .07 -.605 .07 -.914v-3" />
      <path d="M11 3v2" />
      <path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconStethoscopeOff;
