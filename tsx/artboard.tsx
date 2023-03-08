function IconArtboard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-artboard"
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
      <path d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
      <path d="M3 8l1 0" />
      <path d="M3 16l1 0" />
      <path d="M8 3l0 1" />
      <path d="M16 3l0 1" />
      <path d="M20 8l1 0" />
      <path d="M20 16l1 0" />
      <path d="M8 20l0 1" />
      <path d="M16 20l0 1" />
    </svg>
  );
}
export default IconArtboard;
