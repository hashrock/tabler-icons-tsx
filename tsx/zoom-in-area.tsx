function IconZoomInArea({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zoom-in-area"
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
      <path d="M15 13v4" />
      <path d="M13 15h4" />
      <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M22 22l-3 -3" />
      <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
      <path d="M3 11v-1" />
      <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
      <path d="M10 3h1" />
      <path d="M15 3h1a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
export default IconZoomInArea;
