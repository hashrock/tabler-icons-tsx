function IconFireExtinguisher({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-fire-extinguisher"
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
      <path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4z" />
      <path d="M9 16h6" />
      <path d="M12 7v-3" />
      <path d="M16 5l-4 -1l4 -1" />
      <path d="M12 4h-3a3 3 0 0 0 -3 3" />
    </svg>
  );
}
export default IconFireExtinguisher;
