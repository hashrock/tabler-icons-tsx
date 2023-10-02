function IconSphereOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sphere-off"
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
      <path d="M3 12c0 1.657 4.03 3 9 3c.987 0 1.936 -.053 2.825 -.15m3.357 -.67c1.735 -.547 2.818 -1.32 2.818 -2.18" />
      <path d="M20.051 16.027a9 9 0 0 0 -12.083 -12.075m-2.34 1.692a9 9 0 0 0 12.74 12.716" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconSphereOff;
