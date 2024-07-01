function IconPilcrowRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pilcrow-right"
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
      <path d="M11 9h-2a3 3 0 1 1 0 -6h7" />
      <path d="M11 3v11" />
      <path d="M15 3v11" />
      <path d="M21 18h-18" />
      <path d="M18 15l3 3l-3 3" />
    </svg>
  );
}
export default IconPilcrowRight;
