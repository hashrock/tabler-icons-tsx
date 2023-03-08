function IconSwitchVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-switch-vertical"
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
      <path d="M3 8l4 -4l4 4" />
      <path d="M7 4l0 9" />
      <path d="M13 16l4 4l4 -4" />
      <path d="M17 10l0 10" />
    </svg>
  );
}
export default IconSwitchVertical;
