function IconBackground({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-background"
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
      <path d="M4 8l4 -4" />
      <path d="M14 4l-10 10" />
      <path d="M4 20l16 -16" />
      <path d="M20 10l-10 10" />
      <path d="M20 16l-4 4" />
    </svg>
  );
}
export default IconBackground;
