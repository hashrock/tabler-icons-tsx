function IconRoad({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-road"
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
      <path d="M4 19l4 -14" />
      <path d="M16 5l4 14" />
      <path d="M12 8v-2" />
      <path d="M12 13v-2" />
      <path d="M12 18v-2" />
    </svg>
  );
}

export default IconRoad;
