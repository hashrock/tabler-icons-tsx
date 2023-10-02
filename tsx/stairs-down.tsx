function IconStairsDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stairs-down"
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
      <path d="M22 21h-5v-5h-5v-5h-5v-5h-5" />
      <path d="M18 3v7" />
      <path d="M15 7l3 3l3 -3" />
    </svg>
  );
}
export default IconStairsDown;
