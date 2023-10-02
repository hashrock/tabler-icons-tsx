function IconArrowForwardUpDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-forward-up-double"
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
      <path d="M11 14l4 -4l-4 -4" />
      <path d="M16 14l4 -4l-4 -4" />
      <path d="M15 10h-7a4 4 0 1 0 0 8h1" />
    </svg>
  );
}
export default IconArrowForwardUpDouble;
