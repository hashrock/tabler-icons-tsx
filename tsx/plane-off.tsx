function IconPlaneOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-plane-off"
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
      <path d="M9.788 5.758l-.788 -2.758h3l4 7h4a2 2 0 1 1 0 4h-2m-2.718 1.256l-3.282 5.744h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

export default IconPlaneOff;
