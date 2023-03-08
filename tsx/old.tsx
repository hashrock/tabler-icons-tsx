function IconOld({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-old"
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
      <path d="M11 21l-1 -4l-2 -3v-6" />
      <path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
      <path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M7 17l-2 4" />
      <path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
    </svg>
  );
}
export default IconOld;
