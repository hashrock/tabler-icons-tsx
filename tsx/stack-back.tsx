function IconStackBack({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stack-back"
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
      <path d="M4 8l8 4l8 -4l-8 -4z" />
      <path d="M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
      <path d="M8 10l-4 2l4 2m8 0l4 -2l-4 -2" />
    </svg>
  );
}
export default IconStackBack;
