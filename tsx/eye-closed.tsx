function IconEyeClosed({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-eye-closed"
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
      <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
      <path d="M3 15l2.5 -3.8" />
      <path d="M21 14.976l-2.492 -3.776" />
      <path d="M9 17l.5 -4" />
      <path d="M15 17l-.5 -4" />
    </svg>
  );
}
export default IconEyeClosed;
