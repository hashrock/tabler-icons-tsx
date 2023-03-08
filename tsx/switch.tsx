function IconSwitch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-switch"
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
      <path d="M15 4l4 0l0 4" />
      <path d="M14.75 9.25l4.25 -5.25" />
      <path d="M5 19l4 -4" />
      <path d="M15 19l4 0l0 -4" />
      <path d="M5 5l14 14" />
    </svg>
  );
}
export default IconSwitch;
