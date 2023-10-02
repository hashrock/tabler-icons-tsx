function IconStretching2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stretching-2"
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
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M6.5 21l3.5 -5" />
      <path d="M5 11l7 -2" />
      <path d="M16 21l-4 -7v-5l7 -4" />
    </svg>
  );
}
export default IconStretching2;
