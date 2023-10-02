function IconArrowBackUpDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-back-up-double"
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
      <path d="M13 14l-4 -4l4 -4" />
      <path d="M8 14l-4 -4l4 -4" />
      <path d="M9 10h7a4 4 0 1 1 0 8h-1" />
    </svg>
  );
}
export default IconArrowBackUpDouble;
