function IconBorderInner({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-border-inner"
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
      <path d="M4 12l16 0" />
      <path d="M12 4l0 16" />
      <path d="M4 4l0 .01" />
      <path d="M8 4l0 .01" />
      <path d="M16 4l0 .01" />
      <path d="M20 4l0 .01" />
      <path d="M4 8l0 .01" />
      <path d="M20 8l0 .01" />
      <path d="M4 16l0 .01" />
      <path d="M20 16l0 .01" />
      <path d="M4 20l0 .01" />
      <path d="M8 20l0 .01" />
      <path d="M16 20l0 .01" />
      <path d="M20 20l0 .01" />
    </svg>
  );
}
export default IconBorderInner;
