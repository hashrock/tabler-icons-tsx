function IconStairsUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stairs-up"
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
      <path d="M22 6h-5v5h-5v5h-5v5h-5" />
      <path d="M6 10v-7" />
      <path d="M3 6l3 -3l3 3" />
    </svg>
  );
}
export default IconStairsUp;
