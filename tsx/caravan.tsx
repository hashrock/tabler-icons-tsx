function IconCaravan({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-caravan"
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
      <path d="M11 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M21 17l-8 0" />
      <path d="M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8" />
      <path d="M6 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    </svg>
  );
}
export default IconCaravan;
