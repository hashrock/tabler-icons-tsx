function IconStackForward({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stack-forward"
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
      <path d="M12 5l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
      <path d="M10 12l-6 3l8 4l8 -4l-6 -3" />
    </svg>
  );
}
export default IconStackForward;
