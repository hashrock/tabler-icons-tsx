function IconBorderRadius({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-border-radius"
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
      <path d="M4 12v-4a4 4 0 0 1 4 -4h4" />
      <path d="M16 4l0 .01" />
      <path d="M20 4l0 .01" />
      <path d="M20 8l0 .01" />
      <path d="M20 12l0 .01" />
      <path d="M4 16l0 .01" />
      <path d="M20 16l0 .01" />
      <path d="M4 20l0 .01" />
      <path d="M8 20l0 .01" />
      <path d="M12 20l0 .01" />
      <path d="M16 20l0 .01" />
      <path d="M20 20l0 .01" />
    </svg>
  );
}
export default IconBorderRadius;
