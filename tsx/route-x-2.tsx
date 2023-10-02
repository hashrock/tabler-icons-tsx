function IconRouteX2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-route-x-2"
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
      <path d="M3 17l4 4" />
      <path d="M7 17l-4 4" />
      <path d="M17 3l4 4" />
      <path d="M21 3l-4 4" />
      <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
    </svg>
  );
}
export default IconRouteX2;
