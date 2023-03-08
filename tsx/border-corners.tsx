function IconBorderCorners({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-border-corners"
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
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 16v2a2 2 0 0 1 -2 2h-2" />
      <path d="M8 20h-2a2 2 0 0 1 -2 -2v-2" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    </svg>
  );
}
export default IconBorderCorners;
