function IconTopologyRing2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-topology-ring-2"
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
      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 18h10" />
      <path d="M18 16l-5 -8" />
      <path d="M11 8l-5 8" />
    </svg>
  );
}
export default IconTopologyRing2;
