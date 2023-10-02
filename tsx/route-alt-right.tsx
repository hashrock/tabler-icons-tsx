function IconRouteAltRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-route-alt-right"
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
      <path d="M16 3h5v5" />
      <path d="M8 3h-5v5" />
      <path d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
      <path d="M6 6.01v-.01" />
      <path d="M8 8.02v-.01" />
      <path d="M10 10v.01" />
    </svg>
  );
}
export default IconRouteAltRight;
